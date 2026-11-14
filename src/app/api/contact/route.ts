import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, botcheck } = body;

    // Honeypot spam protection: if bot filled in the hidden field, drop it safely
    if (botcheck) {
      return NextResponse.json({
        success: false,
        message: "Spam submission detected.",
      }, { status: 400 });
    }

    if (!email || !message) {
      return NextResponse.json(
        { success: false, message: "Please provide both your email and a message." },
        { status: 400 }
      );
    }

    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "cac4be95-e692-4f14-8692-033ef392d01f";

    if (!accessKey) {
      return NextResponse.json(
        {
          success: false,
          code: "KEY_MISSING",
          message:
            "Web3Forms Access Key is not configured yet. Please email Shiva directly at vaibhava344@gmail.com.",
        },
        { status: 503 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name || "Anonymous",
        email: email,
        message: message,
        subject: `Portfolio Message from ${name || "Visitor"}`,
        from_name: "Shiva Vaibhav Portfolio Form",
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true, message: "Message sent successfully!" });
    } else {
      return NextResponse.json(
        {
          success: false,
          code: "DELIVERY_ERROR",
          message: data.message || "Failed to deliver message via provider.",
        },
        { status: 400 }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        code: "SERVER_ERROR",
        message: error.message || "An error occurred while transmitting your message.",
      },
      { status: 500 }
    );
  }
}
