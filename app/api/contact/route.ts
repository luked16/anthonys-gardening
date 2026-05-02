import { NextRequest, NextResponse } from "next/server";

const ANTHONY_PHONE = "07843023366";

// Rate limiting: max 5 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

function validateFields(body: Record<string, unknown>, type: string): string | null {
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const name = str(body.name);
  const phone = str(body.phone);
  const message = str(body.message);
  const address = str(body.address);
  const notes = str(body.notes);
  const email = str(body.email);

  if (!name || name.length > 100) return "Invalid name";
  if (!phone || phone.length > 20) return "Invalid phone number";
  if (email && email.length > 100) return "Invalid email";
  if (type === "booking") {
    if (!address || address.length > 200) return "Invalid address";
    if (notes.length > 1000) return "Notes too long";
  } else {
    if (!message || message.length > 2000) return "Invalid message";
  }
  return null;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const body = await req.json();
    const validationError = validateFields(body, body.type);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }
    const { name, phone, email, message, notes, service, frequency, date, address, type } = body;

    // Build SMS message
    let smsText: string;
    if (type === "booking") {
      smsText = [
        `NEW BOOKING REQUEST - Anthony's Gardening`,
        `Name: ${name}`,
        `Phone: ${phone}`,
        email ? `Email: ${email}` : null,
        address ? `Address: ${address}` : null,
        service ? `Service: ${service}` : null,
        frequency ? `Frequency: ${frequency}` : null,
        date ? `Preferred Date: ${date}` : null,
        notes ? `Notes: ${notes}` : null,
      ]
        .filter(Boolean)
        .join("\n");
    } else {
      smsText = [
        `NEW MESSAGE - Anthony's Gardening`,
        `From: ${name}`,
        `Phone: ${phone}`,
        email ? `Email: ${email}` : null,
        `Message: ${message}`,
      ]
        .filter(Boolean)
        .join("\n");
    }

    // Send SMS via Twilio
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_FROM_NUMBER;

    if (!accountSid || !authToken || !fromNumber) {
      // Twilio not configured — log and return success so the form works in dev
      console.log("SMS would have been sent:", smsText);
      return NextResponse.json({ success: true });
    }

    const toNumber = ANTHONY_PHONE.startsWith("+")
      ? ANTHONY_PHONE
      : `+44${ANTHONY_PHONE.replace(/^0/, "")}`;

    const twilioRes = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
        },
        body: new URLSearchParams({
          To: toNumber,
          From: fromNumber,
          Body: smsText,
        }),
      }
    );

    if (!twilioRes.ok) {
      const err = await twilioRes.text();
      console.error("Twilio error:", err);
      return NextResponse.json({ error: "SMS failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
