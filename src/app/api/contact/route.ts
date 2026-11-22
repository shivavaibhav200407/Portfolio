import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, botcheck } = body;

    // Honeypot spam protection: if bot filled in the hidden field, drop it safely
    if (botcheck) {
      return NextResponse.json(
        {
          success: false,
          message: "Spam submission detected.",
        },
        { status: 400 }
      );
    }

    if (!email || !message) {
      return NextResponse.json(
        { success: false, message: "Please provide both your email and a message." },
        { status: 400 }
      );
    }

    const trimmedName = (name || "Visitor").trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    // Check for SMTP credentials for true automated dual-email dispatch
    const smtpPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;
    const smtpUser = process.env.SMTP_USER || "vaibhava344@gmail.com";

    let smtpSent = false;
    let visitorConfirmed = false;

    if (smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        // 1. Send Notification Email to Shiva Vaibhav
        await transporter.sendMail({
          from: `"Portfolio Contact Form" <${smtpUser}>`,
          to: "vaibhava344@gmail.com",
          replyTo: trimmedEmail,
          subject: `✨ New Inquiry from ${trimmedName} (${trimmedEmail})`,
          text: `You received a new portfolio inquiry!\n\nName: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}\n\nSent via vaibhav-beige.vercel.app`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
              <h2 style="color: #0b1b3a; margin-top: 0; font-size: 20px;">New Portfolio Inquiry</h2>
              <p style="color: #64748b; font-size: 14px;">Someone reached out through your portfolio site.</p>
              
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 20px 0;">
                <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>From:</strong> ${trimmedName}</p>
                <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${trimmedEmail}" style="color: #2563eb;">${trimmedEmail}</a></p>
                <p style="margin: 0; font-size: 14px;"><strong>Message:</strong></p>
                <div style="margin-top: 8px; padding: 12px; background: #ffffff; border-radius: 6px; border: 1px solid #cbd5e1; font-size: 14px; line-height: 1.5; color: #1e293b; white-space: pre-wrap;">${trimmedMessage}</div>
              </div>

              <a href="mailto:${trimmedEmail}?subject=Re: Portfolio Inquiry" style="display: inline-block; background: #ff1e27; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; font-size: 13px;">Reply to ${trimmedName}</a>
            </div>
          `,
        });

        // 2. Send Confirmation Email to the Visitor ("that person")
        await transporter.sendMail({
          from: `"A. Shiva Vaibhav" <${smtpUser}>`,
          to: trimmedEmail,
          replyTo: "vaibhava344@gmail.com",
          subject: `Message Received · A. Shiva Vaibhav Portfolio`,
          text: `Hi ${trimmedName},\n\nThank you for reaching out through my portfolio! I have received your message and will review it and reply back as soon as possible.\n\nHere is a copy of your message:\n"${trimmedMessage}"\n\nWarm regards,\nA. Shiva Vaibhav\nB.Tech CSE (AI & ML), SITS\nEmail: vaibhava344@gmail.com\nLinkedIn: https://www.linkedin.com/in/akula-shiva-vaibhav-49918333b/\nGitHub: https://github.com/shivavaibhav200407`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff; color: #1e293b;">
              <div style="border-bottom: 2px solid #ff1e27; padding-bottom: 12px; margin-bottom: 20px;">
                <h2 style="color: #0b1b3a; margin: 0; font-size: 20px;">A. Shiva Vaibhav</h2>
                <p style="color: #64748b; margin: 4px 0 0 0; font-size: 13px; font-family: monospace;">B.Tech 3rd Year CSE (AI & ML) · Siddhartha Institute of Technology & Sciences</p>
              </div>

              <p style="font-size: 15px; line-height: 1.5;">Hi <strong>${trimmedName}</strong>,</p>
              <p style="font-size: 14px; line-height: 1.6; color: #334155;">
                Thank you for reaching out through my portfolio website! I have received your note and will review it and get back to you shortly.
              </p>

              <div style="background: #f8fafc; border-left: 3px solid #2563eb; padding: 12px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
                <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #64748b;">A copy of your message:</p>
                <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #1e293b; font-style: italic; white-space: pre-wrap;">"${trimmedMessage}"</p>
              </div>

              <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0 0 10px 0; font-size: 13px; color: #475569;">Connect with me:</p>
                <div style="display: flex; gap: 12px; font-size: 13px;">
                  <a href="https://www.linkedin.com/in/akula-shiva-vaibhav-49918333b/" style="color: #2563eb; text-decoration: none; font-weight: 600;">LinkedIn</a> &middot;
                  <a href="https://github.com/shivavaibhav200407" style="color: #0b1b3a; text-decoration: none; font-weight: 600;">GitHub</a> &middot;
                  <a href="mailto:vaibhava344@gmail.com" style="color: #ff1e27; text-decoration: none; font-weight: 600;">Direct Email</a>
                </div>
              </div>

              <p style="font-size: 12px; color: #94a3b8; margin-top: 24px;">Sent automatically from Shiva Vaibhav's portfolio contact form.</p>
            </div>
          `,
        });

        smtpSent = true;
        visitorConfirmed = true;
      } catch (smtpError) {
        console.error("Nodemailer SMTP dispatch warning:", smtpError);
        // Fall back to Web3Forms below if SMTP failed
      }
    }

    // If SMTP wasn't used or had an issue, dispatch via Web3Forms (always reliable with embedded key)
    if (!smtpSent) {
      const accessKey =
        process.env.WEB3FORMS_ACCESS_KEY ||
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
        "cac4be95-e692-4f14-8692-033ef392d01f";

      const web3Res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          subject: `Portfolio Message from ${trimmedName}`,
          from_name: "Shiva Vaibhav Portfolio Form",
        }),
      });

      const web3Data = await web3Res.json();
      if (!web3Res.ok || !web3Data.success) {
        return NextResponse.json(
          {
            success: false,
            code: "DELIVERY_ERROR",
            message: web3Data.message || "Failed to deliver message via provider.",
          },
          { status: 400 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      deliveredToShiva: true,
      deliveredToVisitor: visitorConfirmed,
      recipientShiva: "vaibhava344@gmail.com",
      recipientVisitor: trimmedEmail,
      message: "Message successfully transmitted to Shiva!",
    });
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
