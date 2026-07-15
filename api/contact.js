import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function getRecipients() {
  return (process.env.EMAIL_TO || "maptaul912@gmail.com")
    .split(",")
    .map((recipient) => recipient.trim())
    .filter(Boolean);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderTemplate(template, data) {
  return template.replace(/<%=\s*([a-zA-Z0-9_]+)\s*%>/g, (_, key) =>
    escapeHtml(data[key] ?? ""),
  );
}

// ponytail: template inlined — Vercel functions don't bundle loose files without extra config
const TEMPLATE = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Contact Inquiry</title>
  </head>
  <body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',sans-serif;background-color:#f8fafc;line-height:1.6;color:#1e293b;">
    <table role="presentation" style="width:100%;border-collapse:collapse;background-color:#f8fafc;padding:20px 0;">
      <tr>
        <td align="center" style="padding:0">
          <table role="presentation" style="width:100%;max-width:600px;border-collapse:collapse;background-color:#ffffff;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
            <!-- Header -->
            <tr>
              <td style="background:linear-gradient(135deg,#2563eb 0%,#1e40af 100%);padding:40px 20px;text-align:center;">
                <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:600;letter-spacing:-0.5px;">New Contact Inquiry</h1>
                <p style="margin:8px 0 0 0;color:#dbeafe;font-size:14px;font-weight:500;">maptaul.me — Portfolio</p>
              </td>
            </tr>

            <!-- Main Content -->
            <tr>
              <td style="padding:40px 30px">
                <p style="margin:0 0 28px 0;font-size:16px;color:#1e293b">Hello Maptaul,</p>
                <p style="margin:0 0 32px 0;font-size:15px;color:#64748b;line-height:1.6;">
                  You have received a new message from your portfolio contact form. Details below:
                </p>

                <!-- Contact Details Card -->
                <table role="presentation" style="width:100%;border-collapse:collapse;background-color:#f1f5f9;border-radius:8px;border:1px solid #e2e8f0;margin-bottom:32px;">
                  <tr>
                    <td style="padding:24px">
                      <table role="presentation" style="width:100%;margin-bottom:20px">
                        <tr><td style="padding-bottom:4px"><span style="display:block;font-size:12px;font-weight:700;color:#2563eb;text-transform:uppercase;letter-spacing:0.5px;">Full Name</span></td></tr>
                        <tr><td><span style="display:block;font-size:15px;color:#1e293b;font-weight:500;"><%= name %></span></td></tr>
                      </table>

                      <table role="presentation" style="width:100%;margin-bottom:20px">
                        <tr><td style="padding-bottom:4px"><span style="display:block;font-size:12px;font-weight:700;color:#2563eb;text-transform:uppercase;letter-spacing:0.5px;">Email</span></td></tr>
                        <tr><td><a href="mailto:<%= email %>" style="font-size:15px;color:#2563eb;text-decoration:none;font-weight:500;"><%= email %></a></td></tr>
                      </table>

                      <table role="presentation" style="width:100%;margin-bottom:20px">
                        <tr><td style="padding-bottom:4px"><span style="display:block;font-size:12px;font-weight:700;color:#2563eb;text-transform:uppercase;letter-spacing:0.5px;">Subject</span></td></tr>
                        <tr><td><span style="display:block;font-size:15px;color:#1e293b;font-weight:500;"><%= subject %></span></td></tr>
                      </table>

                      <table role="presentation" style="width:100%">
                        <tr><td style="padding-bottom:4px"><span style="display:block;font-size:12px;font-weight:700;color:#2563eb;text-transform:uppercase;letter-spacing:0.5px;">Message</span></td></tr>
                        <tr><td><div style="font-size:15px;color:#475569;white-space:pre-wrap;word-break:break-word;line-height:1.6;"><%= message %></div></td></tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- CTA -->
                <p style="margin:0 0 32px 0;text-align:center">
                  <a href="mailto:<%= email %>" style="display:inline-block;background:linear-gradient(135deg,#2563eb 0%,#1e40af 100%);color:#ffffff;text-decoration:none;padding:12px 32px;border-radius:6px;font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Reply to Inquiry</a>
                </p>

                <p style="margin:0;font-size:13px;color:#94a3b8;line-height:1.6;text-align:center;">
                  This email was automatically sent from your portfolio contact form.
                  Reply directly to this email to reach the sender.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color:#f1f5f9;border-top:1px solid #e2e8f0;padding:30px;text-align:center;border-radius:0 0 8px 8px;">
                <p style="margin:0 0 12px 0;font-size:14px;color:#1e293b;font-weight:600;">Maptaul Islam Taraq</p>
                <p style="margin:0 0 8px 0;font-size:12px;color:#64748b">Full Stack Engineer &amp; Team Lead</p>
                <p style="margin:0;font-size:11px;color:#94a3b8">&copy; <%= year %> maptaul.me. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "Name, email and message are required." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: "Invalid email address." });
  }
  if (String(message).length > 5000 || String(name).length > 200) {
    return res.status(400).json({ message: "Message too long." });
  }

  const html = renderTemplate(TEMPLATE, {
    name,
    email,
    subject: subject || "No subject",
    message,
    year: String(new Date().getFullYear()),
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.SMTP_USER,
      to: getRecipients(),
      replyTo: email,
      subject: subject ? `Portfolio: ${subject}` : "New portfolio contact message",
      html,
    });
  } catch (error) {
    console.error("[api/contact]", error);
    return res
      .status(500)
      .json({ message: "Failed to send message. Try again later." });
  }

  return res.status(200).json({ message: "Message sent successfully." });
}
