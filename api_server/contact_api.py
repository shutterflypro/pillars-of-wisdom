#!/usr/bin/env python3
"""Pillars of Wisdom — Contact Form API
Sends form submissions to hello@pillarsofwisdom.ai via SMTP.

Configure via environment variables:
  SMTP_HOST     — SMTP server (default: smtp.gmail.com)
  SMTP_PORT     — SMTP port (default: 587)
  SMTP_USER     — SMTP login email
  SMTP_PASS     — SMTP password or app-specific password
  CONTACT_EMAIL — Destination email (default: hello@pillarsofwisdom.ai)
  API_PORT      — HTTP port to listen on (default: 3001)
"""

import http.server
import json
import smtplib
import os
import re
import ssl
import threading
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from urllib.parse import parse_qs

SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
SMTP_USER = os.environ.get("SMTP_USER", "")
SMTP_PASS = os.environ.get("SMTP_PASS", "")
CONTACT_EMAIL = os.environ.get("CONTACT_EMAIL", "hello@pillarsofwisdom.ai")
API_PORT = int(os.environ.get("API_PORT", "3001"))

ALLOWED_ORIGINS = [
    "https://pillars.artemisailabs.online",
    "https://pillarsofwisdom.ai",
    "https://www.pillarsofwisdom.ai",
    "http://localhost:5173",
]

VALID_INDUSTRIES = {
    "financial-services", "legal-compliance", "healthcare", "government",
    "insurance", "real-estate", "banks-credit-unions", "accounting-tax", "other",
}
VALID_DEPLOYMENTS = {"foundation", "professional", "enterprise", "unsure"}
VALID_SIZES = {"1-10", "11-50", "51-200", "201-1000", "1000+"}

RATE_LIMIT = {}
RATE_WINDOW = 900  # 15 minutes
RATE_MAX = 5


def rate_limited(ip):
    now = __import__("time").time()
    if ip in RATE_LIMIT:
        entries = [t for t in RATE_LIMIT[ip] if now - t < RATE_WINDOW]
        RATE_LIMIT[ip] = entries
        if len(entries) >= RATE_MAX:
            return True
    RATE_LIMIT.setdefault(ip, []).append(now)
    return False


def validate(data):
    errors = []
    if not data.get("firstName", "").strip():
        errors.append("First name is required")
    if not data.get("lastName", "").strip():
        errors.append("Last name is required")
    if not data.get("email", "").strip() or not re.match(
        r"^[^\s@]+@[^\s@]+\.[^\s@]+$", data.get("email", "")
    ):
        errors.append("Valid email is required")
    if not data.get("company", "").strip():
        errors.append("Company is required")
    if data.get("industry") and data.get("industry") not in VALID_INDUSTRIES:
        errors.append("Invalid industry")
    if data.get("deployment") and data.get("deployment") not in VALID_DEPLOYMENTS:
        errors.append("Invalid deployment interest")
    if data.get("companySize") and data.get("companySize") not in VALID_SIZES:
        errors.append("Invalid company size")
    if len(data.get("message", "")) > 5000:
        errors.append("Message too long")
    return errors


INDUSTRY_MAP = {
    "financial-services": "Financial Services",
    "legal-compliance": "Legal & Compliance",
    "healthcare": "Healthcare",
    "government": "Government & Public Sector",
    "insurance": "Insurance",
    "real-estate": "Real Estate",
    "banks-credit-unions": "Banks & Credit Unions",
    "accounting-tax": "Accounting & Tax",
    "other": "Other",
}
DEPLOYMENT_MAP = {
    "foundation": "Foundation",
    "professional": "Professional",
    "enterprise": "Enterprise",
    "unsure": "Not sure yet",
}


def send_email(data):
    first = data.get("firstName", "").strip()
    last = data.get("lastName", "").strip()
    email = data.get("email", "").strip()
    company = data.get("company", "").strip()
    industry = INDUSTRY_MAP.get(data.get("industry", ""), data.get("industry", "Not specified"))
    deployment = DEPLOYMENT_MAP.get(data.get("deployment", ""), data.get("deployment", "Not specified"))
    size = data.get("companySize", "Not specified")
    message = data.get("message", "").strip()

    subject = f"Strategy Session: {first} {last} — {company}"

    text_lines = [
        "New Strategy Session Request",
        "",
        f"Name: {first} {last}",
        f"Email: {email}",
        f"Company: {company}",
        f"Industry: {industry}",
        f"Deployment: {deployment}",
        f"Company Size: {size}",
    ]
    if message:
        text_lines.append(f"Message: {message}")
    text = "\n".join(text_lines)

    safe_msg = message.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("\n", "<br>") if message else ""
    msg_row = f"""<tr><td style="padding:12px 0;color:#64748b;font-size:13px;vertical-align:top">Message</td><td style="padding:12px 0;color:#0a1628;font-size:15px;line-height:1.6">{safe_msg}</td></tr>""" if message else ""

    html = f"""<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;background:#fff">
  <div style="background:#0a1628;padding:32px;text-align:center;border-radius:8px 8px 0 0">
    <h1 style="color:#c89b3c;margin:0;font-size:24px;letter-spacing:0.05em">PILLARS OF WISDOM</h1>
    <p style="color:#94a3b8;margin:8px 0 0;font-size:14px">New Strategy Session Request</p>
  </div>
  <div style="padding:32px;border:1px solid #e2e8f0;border-top:none">
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:12px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;width:140px;vertical-align:top">Contact</td>
          <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;color:#0a1628;font-size:15px"><strong>{first} {last}</strong><br><a href="mailto:{email}" style="color:#c89b3c">{email}</a></td></tr>
      <tr><td style="padding:12px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px">Company</td>
          <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;color:#0a1628;font-size:15px">{company}</td></tr>
      <tr><td style="padding:12px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px">Industry</td>
          <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;color:#0a1628;font-size:15px">{industry}</td></tr>
      <tr><td style="padding:12px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px">Deployment</td>
          <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;color:#0a1628;font-size:15px">{deployment}</td></tr>
      <tr><td style="padding:12px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px">Company Size</td>
          <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;color:#0a1628;font-size:15px">{size}</td></tr>
      {msg_row}
    </table>
  </div>
  <div style="background:#f8f7f4;padding:20px 32px;border-radius:0 0 8px 8px;text-align:center">
    <p style="color:#94a3b8;font-size:12px;margin:0">Submitted via pillars.artemisailabs.online/contact</p>
  </div>
</div>"""

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = f'"Pillars of Wisdom" <{SMTP_USER}>' if SMTP_USER else '"Pillars of Wisdom" <noreply@pillarsofwisdom.ai>'
    msg["To"] = CONTACT_EMAIL
    msg["Reply-To"] = email
    msg.attach(MIMEText(text, "plain"))
    msg.attach(MIMEText(html, "html"))

    if SMTP_HOST and SMTP_USER and SMTP_PASS:
        ctx = ssl.create_default_context()
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls(context=ctx)
            server.login(SMTP_USER, SMTP_PASS)
            server.sendmail(SMTP_USER, CONTACT_EMAIL, msg.as_string())
        print(f"[SENT] Email sent to {CONTACT_EMAIL} via {SMTP_HOST}")
    else:
        print(f"[LOG-ONLY] Would send email to {CONTACT_EMAIL}")
        print(f"  Subject: {subject}")
        print(f"  From: {first} {last} <{email}>")
        print(f"  Company: {company} | Industry: {industry} | Deployment: {deployment} | Size: {size}")
        if message:
            print(f"  Message: {message[:200]}")
        print()
        print("To enable email delivery:")
        print("  1. Go to https://myaccount.google.com/apppasswords (Google Workspace admin)")
        print(f"  2. Create an App Password for the hello@pillarsofwisdom.ai account")
        print("  3. Restart the server with:")
        print(f'     pkill -f contact_api.py')
        print(f'     cd /home/shutterflypro/pillars-of-wisdom/api_server')
        print(f'     SMTP_USER=hello@pillarsofwisdom.ai SMTP_PASS=xxxx-xxxx-xxxx-xxxx nohup python3.11 contact_api.py >> server.log 2>&1 &')

    return True


class ContactHandler(http.server.BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        print(f"[{self.log_date_time_string()}] {fmt % args}")

    def _send_json(self, code, data):
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(data).encode())

    def _send_cors(self, method="POST"):
        origin = self.headers.get("Origin", "")
        if origin in ALLOWED_ORIGINS:
            self.send_header("Access-Control-Allow-Origin", origin)
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Access-Control-Max-Age", "86400")

    def do_OPTIONS(self):
        self.send_response(204)
        self._send_cors()
        self.end_headers()

    def do_GET(self):
        if self.path == "/api/health":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            origin = self.headers.get("Origin", "")
            if origin in ALLOWED_ORIGINS:
                self.send_header("Access-Control-Allow-Origin", origin)
            self.end_headers()
            smtp_ok = bool(SMTP_HOST and SMTP_USER and SMTP_PASS)
            self.wfile.write(json.dumps({"status": "ok", "smtp": smtp_ok}).encode())
        else:
            self._send_json(404, {"error": "Not found"})

    def do_POST(self):
        origin = self.headers.get("Origin", "")

        if self.path != "/api/contact":
            self.send_response(404)
            self._send_cors()
            self.end_headers()
            return

        client_ip = self.headers.get("X-Forwarded-For", self.client_address[0]).split(",")[0].strip()

        if rate_limited(client_ip):
            self.send_response(429)
            self._send_cors()
            self._send_json(429, {"success": False, "error": "Too many requests. Please try again later."})
            return

        content_length = int(self.headers.get("Content-Length", 0))
        if content_length > 1_000_000:
            self._send_json(413, {"success": False, "error": "Request too large"})
            return

        body = self.rfile.read(content_length)

        try:
            data = json.loads(body)
        except (json.JSONDecodeError, ValueError):
            self.send_response(400)
            self._send_cors()
            self._send_json(400, {"success": False, "error": "Invalid JSON"})
            return

        errors = validate(data)
        if errors:
            self.send_response(400)
            self._send_cors()
            self._send_json(400, {"success": False, "errors": errors})
            return

        try:
            send_email(data)
        except smtplib.SMTPAuthenticationError:
            print("[ERROR] SMTP authentication failed — check SMTP_USER and SMTP_PASS")
            self.send_response(500)
            self._send_cors()
            self._send_json(500, {"success": False, "error": "Mail server authentication failed. Please try again later."})
            return
        except Exception as e:
            print(f"[ERROR] Failed to send email: {e}")
            self.send_response(500)
            self._send_cors()
            self._send_json(500, {"success": False, "error": "Something went wrong. Please try again."})
            return

        self.send_response(200)
        self._send_cors()
        self._send_json(200, {"success": True, "message": "Thank you! We received your message and will be in touch shortly."})


class ThreadedHTTPServer(http.server.ThreadingHTTPServer):
    allow_reuse_address = True


if __name__ == "__main__":
    print(f"Pillars API (Python) running on port {API_PORT}")
    smtp_ok = bool(SMTP_HOST and SMTP_USER and SMTP_PASS)
    print(f"SMTP configured: {smtp_ok}")
    print(f"Contact email: {CONTACT_EMAIL}")
    if smtp_ok:
        print(f"SMTP host: {SMTP_HOST}:{SMTP_PORT}")
    else:
        print("SMTP not configured — running in LOG-ONLY mode (emails will NOT be sent)")
        print("To enable: set SMTP_USER and SMTP_PASS env vars (Gmail App Password)")
    server = ThreadedHTTPServer(("0.0.0.0", API_PORT), ContactHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down...")
        server.shutdown()