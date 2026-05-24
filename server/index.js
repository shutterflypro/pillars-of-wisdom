import express from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import nodemailer from 'nodemailer'

const app = express()
const PORT = process.env.PORT || 3001

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'hello@pillarsofwisdom.ai'
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.resend.com'
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465')
const SMTP_USER = process.env.SMTP_USER || ''
const SMTP_PASS = process.env.SMTP_PASS || ''

app.use(cors({
  origin: [
    'https://pillars.artemisailabs.online',
    'https://pillarsofwisdom.ai',
    'https://www.pillarsofwisdom.ai',
    'http://localhost:5173',
  ],
  methods: ['POST'],
}))
app.use(express.json())

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, error: 'Too many requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
})

const transporter = SMTP_USER && SMTP_PASS
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
  : null

function validateContact(data) {
  const errors = []
  if (!data.firstName || data.firstName.trim().length < 1) errors.push('First name is required')
  if (!data.lastName || data.lastName.trim().length < 1) errors.push('Last name is required')
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push('Valid email is required')
  if (!data.company || data.company.trim().length < 1) errors.push('Company is required')
  if (data.industry && ![
    'financial-services', 'legal-compliance', 'healthcare', 'government',
    'insurance', 'real-estate', 'banks-credit-unions', 'accounting-tax', 'other',
  ].includes(data.industry)) errors.push('Invalid industry')
  if (data.deployment && !['foundation', 'professional', 'enterprise', 'unsure'].includes(data.deployment))
    errors.push('Invalid deployment interest')
  if (data.companySize && !['1-10', '11-50', '51-200', '201-1000', '1000+'].includes(data.companySize))
    errors.push('Invalid company size')
  if (data.message && data.message.length > 5000) errors.push('Message too long')
  return errors
}

app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const errors = validateContact(req.body)
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors })
    }

    const { firstName, lastName, email, company, industry, deployment, companySize, message } = req.body

    const industryMap = {
      'financial-services': 'Financial Services',
      'legal-compliance': 'Legal & Compliance',
      'healthcare': 'Healthcare',
      'government': 'Government & Public Sector',
      'insurance': 'Insurance',
      'real-estate': 'Real Estate',
      'banks-credit-unions': 'Banks & Credit Unions',
      'accounting-tax': 'Accounting & Tax',
      'other': 'Other',
    }

    const deploymentMap = {
      'foundation': 'Foundation',
      'professional': 'Professional',
      'enterprise': 'Enterprise',
      'unsure': 'Not sure yet',
    }

    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: #0a1628; padding: 32px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: #c89b3c; margin: 0; font-size: 24px; letter-spacing: 0.05em;">PILLARS OF WISDOM</h1>
          <p style="color: #94a3b8; margin: 8px 0 0; font-size: 14px;">New Strategy Session Request</p>
        </div>
        <div style="padding: 32px; border: 1px solid #e2e8f0; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; width: 140px; vertical-align: top;">Contact</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0a1628; font-size: 15px;"><strong>${firstName} ${lastName}</strong><br><a href="mailto:${email}" style="color: #c89b3c;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Company</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0a1628; font-size: 15px;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Industry</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0a1628; font-size: 15px;">${industryMap[industry] || industry || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Deployment</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0a1628; font-size: 15px;">${deploymentMap[deployment] || deployment || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Company Size</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0a1628; font-size: 15px;">${companySize || 'Not specified'}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 12px 0; color: #64748b; font-size: 13px; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #0a1628; font-size: 15px; line-height: 1.6;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')}</td>
            </tr>` : ''}
          </table>
        </div>
        <div style="background: #f8f7f4; padding: 20px 32px; border-radius: 0 0 8px 8px; text-align: center;">
          <p style="color: #94a3b8; font-size: 12px; margin: 0;">Submitted via pillars.artemisailabs.online/contact</p>
        </div>
      </div>
    `

    const textBody = [
      `New Strategy Session Request`,
      ``,
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Industry: ${industryMap[industry] || industry || 'Not specified'}`,
      `Deployment: ${deploymentMap[deployment] || deployment || 'Not specified'}`,
      `Company Size: ${companySize || 'Not specified'}`,
      message ? `Message: ${message}` : '',
    ].filter(Boolean).join('\n')

    if (!transporter) {
      console.log('=== CONTACT FORM SUBMISSION (no SMTP configured) ===')
      console.log(textBody)
      console.log('=== END ===')
      console.log('To enable email delivery, configure SMTP_HOST, SMTP_USER, and SMTP_PASS environment variables.')
      console.log('Recommended: Use Resend (https://resend.com) — free tier includes 100 emails/day.')
      console.log('Set: SMTP_HOST=smtp.resend.com, SMTP_PORT=465, SMTP_USER=resend, SMTP_PASS=<your-api-key>')
      return res.json({ success: true, message: 'Thank you! We received your message and will be in touch shortly.' })
    }

    await transporter.sendMail({
      from: `"Pillars of Wisdom" <noreply@pillarsofwisdom.ai>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Strategy Session: ${firstName} ${lastName} — ${company}`,
      html: htmlBody,
      text: textBody,
    })

    return res.json({ success: true, message: 'Thank you! We received your message and will be in touch shortly.' })
  } catch (err) {
    console.error('Contact form error:', err)
    return res.status(500).json({ success: false, error: 'Something went wrong. Please try again or contact us directly.' })
  }
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', smtp: !!transporter })
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Pillars API running on port ${PORT}`)
  console.log(`SMTP configured: ${!!transporter}`)
  if (!transporter) {
    console.log('Running in log-only mode. Configure SMTP to enable email delivery.')
  }
})