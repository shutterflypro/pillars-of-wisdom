# Pillars of Wisdom — Frontend Website

The official marketing website for Pillars of Wisdom, an enterprise-grade platform for institutional workflow automation, AI orchestration, and regulated operations management.

**Live Site:** [pillarsofwisdom.ai](https://pillarsofwisdom.ai)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Production Build](#production-build)
- [Environment Variables](#environment-variables)
- [API Server](#api-server)
  - [Node.js API Server](#nodejs-api-server)
  - [Python API Server](#python-api-server)
- [Deployment](#deployment)
  - [Docker Deployment](#docker-deployment)
  - [cPanel Deployment](#cpanel-deployment)
  - [AWS Deployment](#aws-deployment)
- [Site Architecture](#site-architecture)
  - [Public Pages](#public-pages)
  - [Mortgage Workflow Pages](#mortgage-workflow-pages)
  - [Financial Infrastructure Pages](#financial-infrastructure-pages)
  - [Platform Pillar Pages](#platform-pillar-pages)
  - [Customer Portal](#customer-portal)
- [Design System](#design-system)
- [Contact Form](#contact-form)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Pillars of Wisdom provides institutional-grade infrastructure for organizations that require verifiable operations, policy-compliant workflows, and AI-assisted decision-making. The platform serves regulated industries including financial services, legal compliance, healthcare, government, insurance, and real estate.

This repository contains the complete frontend website, including the public marketing site, customer portal, and the contact form API server.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion 12 |
| **Routing** | React Router DOM 7 |
| **Icons** | Lucide React |
| **API Server (Option A)** | Node.js + Express + Nodemailer |
| **API Server (Option B)** | Python 3 (stdlib only) |
| **Deployment** | Docker + nginx |

---

## Project Structure

```
pillars-website/
├── src/
│   ├── main.jsx                    # Application entry point
│   ├── App.jsx                     # Router, auth provider, scroll-to-top
│   ├── index.css                   # Global styles, Tailwind config, custom utilities
│   ├── context/
│   │   └── AuthContext.jsx         # Authentication context for customer portal
│   ├── lib/
│   │   └── api.js                  # API client for backend communication
│   ├── components/
│   │   ├── PublicNav.jsx           # Public site navigation bar
│   │   ├── PublicFooter.jsx        # Public site footer
│   │   ├── PortalLayout.jsx        # Customer portal layout wrapper
│   │   ├── ProtectedRoute.jsx      # Route guard for authenticated pages
│   │   ├── AISupportWidget.jsx     # AI support chat widget
│   │   └── VideoModal.jsx          # Hero video modal
│   ├── pages/                      # All route-level page components
│   │   ├── Home.jsx                # Landing page
│   │   ├── PlatformPage.jsx        # Platform overview
│   │   ├── ModulesPage.jsx         # Modules catalog
│   │   ├── IndustriesPage.jsx      # Industries overview
│   │   ├── IndustryPage.jsx        # Dynamic industry detail page
│   │   ├── AIPage.jsx              # AI capabilities
│   │   ├── EnterprisePage.jsx      # Enterprise offering
│   │   ├── PricingPage.jsx         # Pricing tiers
│   │   ├── ContactPage.jsx         # Contact form
│   │   ├── SupportPage.jsx         # Support resources
│   │   ├── SecurityPage.jsx        # Security overview
│   │   ├── TermsPage.jsx           # Terms of service
│   │   ├── PrivacyPage.jsx         # Privacy policy
│   │   ├── DisclaimerPage.jsx      # Legal disclaimer
│   │   ├── BillingPage.jsx         # Public billing information
│   │   │
│   │   ├── OperationalFoundationPage.jsx
│   │   ├── AIOrchestrationPage.jsx
│   │   ├── SovereignInfrastructurePage.jsx
│   │   ├── HowPillarsWorkPage.jsx
│   │   ├── UnifiedHubPage.jsx
│   │   ├── AutomationPage.jsx
│   │   ├── AdaptiveIntelligencePage.jsx
│   │   ├── ScalableGrowthPage.jsx
│   │   │
│   │   ├── MortgageOperationsPage.jsx
│   │   ├── MortgageWorkflowPage.jsx
│   │   ├── LoanIntakePage.jsx
│   │   ├── UnderwritingPage.jsx
│   │   ├── ComplianceMonitoringPage.jsx
│   │   ├── AuditReportingPage.jsx
│   │   │
│   │   ├── BlockchainInfrastructurePage.jsx
│   │   ├── RegulatedOperationsPage.jsx
│   │   ├── AssetLifecyclePage.jsx
│   │   ├── DigitalAssetInfrastructurePage.jsx
│   │   │
│   │   ├── LoginPage.jsx           # Portal login
│   │   ├── CustomerPortal.jsx      # Portal dashboard
│   │   ├── OnboardingPage.jsx      # New user onboarding
│   │   ├── WorkflowsPage.jsx       # Workflow management
│   │   ├── PortalBilling.jsx       # Portal billing
│   │   ├── PortalSettings.jsx      # Portal settings
│   │   ├── AvatarPage.jsx          # Avatar configuration
│   │   ├── LogsPage.jsx            # Activity logs
│   │   ├── EssentialsPage.jsx      # Essentials dashboard
│   │   ├── PermissionsPage.jsx     # User permissions
│   │   ├── CRMPage.jsx             # CRM module
│   │   └── MarketingPage.jsx       # Marketing module
│   └── sections/                   # Reusable page sections
│       ├── HeroSection.jsx
│       ├── ThreePillarsSection.jsx
│       ├── ArchitectureSection.jsx
│       ├── FinancialSection.jsx
│       ├── IndustriesSection.jsx
│       ├── GovernanceSection.jsx
│       ├── SecuritySection.jsx
│       ├── ProvenanceSection.jsx
│       ├── ResultsSection.jsx
│       ├── TrustBarSection.jsx
│       ├── UseCasesSection.jsx
│       └── FinalCTA.jsx
├── public/
│   ├── index.html                  # HTML template (injected by Vite)
│   ├── favicon.svg
│   ├── icons.svg
│   ├── images/
│   └── videos/
├── server/                         # Node.js API server (Express)
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
├── api_server/                     # Python API server (stdlib)
│   ├── contact_api.py
│   └── pillars-api.service
├── deploy/                         # Deployment configuration
│   ├── nginx.conf
│   └── pillars-api.service
├── docs/                           # Deployment guides
│   ├── DEPLOYMENT-CPANEL.md
│   └── DEPLOYMENT-AWS.md
├── .env                            # Environment variables
├── .gitignore
├── package.json
├── vite.config.js
└── eslint.config.js
```

---

## Getting Started

### Prerequisites

| Requirement | Version |
|---|---|
| Node.js | 18.x or higher |
| npm | 9.x or higher |

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/shutterflypro/Frontend-Website.git pillars-website
cd pillars-website
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`. Changes to any file will automatically refresh the browser.

To start the API server alongside the frontend (for testing the contact form locally):

**Node.js version:**
```bash
cd server
npm install
node index.js
```

**Python version:**
```bash
cd api_server
python3 contact_api.py
```

The API server runs on port `3001` by default.

### Production Build

Build the optimized production bundle:

```bash
npm run build
```

The output is written to the `dist/` folder. To preview the production build locally:

```bash
npm run preview
```

---

## Environment Variables

Create a `.env` file in the project root with the following variables:

```env
# Frontend
VITE_API_URL=https://your-api-domain.com/api

# API Server (Node.js or Python)
PORT=3001
CONTACT_EMAIL=hello@yourdomain.com
SMTP_HOST=smtp.resend.com
SMTP_PORT=465
SMTP_USER=resend
SMTP_PASS=your-smtp-password
```

| Variable | Description | Required |
|---|---|---|
| `VITE_API_URL` | Base URL for API requests from the frontend | Yes |
| `PORT` | Port the API server listens on | No (default: 3001) |
| `CONTACT_EMAIL` | Email address that receives contact form submissions | No (default: hello@pillarsofwisdom.ai) |
| `SMTP_HOST` | SMTP server hostname | No (default: smtp.resend.com) |
| `SMTP_PORT` | SMTP server port | No (default: 465) |
| `SMTP_USER` | SMTP authentication username | No |
| `SMTP_PASS` | SMTP authentication password | No |

**Note:** If SMTP credentials are not configured, the API server will log contact form submissions to the console instead of sending emails. This is useful for development and testing.

---

## API Server

The project includes two implementations of the contact form API. Choose one based on your server environment.

### Node.js API Server

Located in `server/`. Built with Express.js and Nodemailer.

**Features:**
- CORS protection with allowed origins list
- Rate limiting (5 requests per 15 minutes per IP)
- Input validation for all contact form fields
- HTML and plain text email templates
- Health check endpoint at `GET /api/health`

**Endpoints:**

| Method | Path | Description |
|---|---|---|
| `POST` | `/api/contact` | Submit a contact form |
| `GET` | `/api/health` | Check server and SMTP status |

**Request body for `/api/contact`:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@company.com",
  "company": "Acme Corp",
  "industry": "financial-services",
  "deployment": "enterprise",
  "companySize": "201-1000",
  "message": "We are interested in learning more."
}
```

**To run:**
```bash
cd server
npm install
node index.js
```

**Docker:**
```bash
docker build -t pillars-api server/
docker run -p 3001:3001 --env-file .env pillars-api
```

### Python API Server

Located in `api_server/`. Built with Python's standard library only — no external dependencies required.

**Features:**
- Same functionality as the Node.js version
- Zero dependencies — runs on any Python 3 installation
- Threaded HTTP server for concurrent requests
- SSL/TLS support for SMTP

**To run:**
```bash
cd api_server
python3 contact_api.py
```

**As a systemd service:**
```bash
sudo cp api_server/pillars-api.service /etc/systemd/system/
sudo systemctl enable pillars-api
sudo systemctl start pillars-api
```

---

## Deployment

### Docker Deployment

The recommended production deployment method uses Docker with nginx to serve the static files and a separate container for the API server.

**1. Build the frontend:**
```bash
npm run build
```

**2. Build and run with Docker:**
```bash
docker build -t pillars-website server/
docker run -d \
  --name pillars-of-wisdom \
  -p 8084:8084 \
  -v $(pwd)/dist:/usr/share/nginx/html:ro \
  -v $(pwd)/deploy/nginx.conf:/etc/nginx/nginx.conf:ro \
  pillars-website
```

**3. Deploy to a remote server:**
```bash
rsync -avz --delete dist/ user@your-server:/path/to/pillars-of-wisdom/dist/
ssh user@your-server "docker restart pillars-of-wisdom"
```

### cPanel Deployment

For shared hosting environments that use cPanel, see the complete guide:

**[docs/DEPLOYMENT-CPANEL.md](docs/DEPLOYMENT-CPANEL.md)**

Summary:
1. Run `npm run build` locally
2. Zip the `dist/` folder contents
3. Upload to `public_html` via cPanel File Manager
4. Extract the zip file
5. Create an `.htaccess` file for React Router support
6. Enable HTTPS

### AWS Deployment

For Amazon Web Services hosting using S3 and CloudFront, see the complete guide:

**[docs/DEPLOYMENT-AWS.md](docs/DEPLOYMENT-AWS.md)**

Summary:
1. Run `npm run build` locally
2. Create an S3 bucket with public access
3. Upload `dist/` contents to the bucket
4. Enable static website hosting
5. Create a CloudFront distribution with 404/403 error page rules
6. (Optional) Connect a custom domain with Route 53

---

## Site Architecture

### Public Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Landing page with hero, pillars, architecture, and CTAs |
| `/platform` | Platform | Platform overview and capabilities |
| `/modules` | Modules | Module catalog and feature matrix |
| `/industries` | Industries | Industry solutions overview |
| `/industries/:slug` | Industry Detail | Dynamic industry-specific page |
| `/ai` | AI | AI capabilities and orchestration |
| `/enterprise` | Enterprise | Enterprise offering and deployment options |
| `/pricing` | Pricing | Pricing tiers and comparison |
| `/contact` | Contact | Contact form with strategy session request |
| `/support` | Support | Support resources and documentation |
| `/security` | Security | Security posture and compliance |
| `/terms` | Terms | Terms of service |
| `/privacy` | Privacy | Privacy policy |
| `/disclaimer` | Disclaimer | Legal disclaimer |
| `/billing` | Billing | Public billing information |

### Mortgage Workflow Pages

A connected 6-page workflow circle that guides users through the complete mortgage lifecycle:

| Route | Page | Position |
|---|---|---|
| `/mortgage-operations` | Mortgage Operations | Overview entry point |
| `/loan-intake` | Loan Intake | Step 1 — Document capture and validation |
| `/underwriting` | Underwriting | Step 2 — Risk assessment and decisioning |
| `/compliance-monitoring` | Compliance Monitoring | Step 3 — Regulatory oversight |
| `/audit-reporting` | Audit Reporting | Step 4 — Examiner-ready audit trails |
| `/mortgage-workflow` | Complete Workflow | Integration overview of all four stages |

Each page includes step navigation, prev/next routing, and a shared design language with SVG graphics.

### Financial Infrastructure Pages

| Route | Page | Description |
|---|---|---|
| `/regulated-operations` | Regulated Operations | Compliance and regulatory operations |
| `/asset-lifecycle` | Asset Lifecycle | End-to-end asset management |
| `/digital-asset-infrastructure` | Digital Asset Infrastructure | Digital asset platform capabilities |
| `/blockchain-infrastructure` | Blockchain Infrastructure | Blockchain and provenance (roadmap) |

### Platform Pillar Pages

| Route | Page | Pillar |
|---|---|---|
| `/operational-foundation` | Operational Foundation | Pillar 1 — Foundation |
| `/ai-orchestration` | AI Orchestration | Pillar 2 — Intelligence |
| `/sovereign-infrastructure` | Sovereign Infrastructure | Pillar 3 — Infrastructure |
| `/how-pillars-work` | How Pillars Work | Integration overview |
| `/unified-hub` | Unified Hub | Hub capabilities |
| `/automation` | Automation | Workflow automation |
| `/adaptive-intelligence` | Adaptive Intelligence | AI adaptation |
| `/scalable-growth` | Scalable Growth | Growth infrastructure |

### Customer Portal

Protected routes that require authentication:

| Route | Page | Description |
|---|---|---|
| `/portal` | Dashboard | Main portal dashboard |
| `/portal/onboarding` | Onboarding | New user setup wizard |
| `/portal/users` | Permissions | User and role management |
| `/portal/workflows` | Workflows | Workflow configuration |
| `/portal/billing` | Billing | Billing and subscription management |
| `/portal/settings` | Settings | Account settings |
| `/portal/avatar` | Avatar | AI avatar configuration |
| `/portal/logs` | Logs | Activity and audit logs |
| `/portal/essentials` | Essentials | Essentials dashboard |
| `/portal/crm` | CRM | Customer relationship management |
| `/portal/marketing` | Marketing | Marketing module |

---

## Design System

The site follows a calm, executive, institutional design language.

### Color Palette

| Token | Color | Usage |
|---|---|---|
| Navy | `#0a1628` | Primary background, headings, dark sections |
| Gold | `#c89b3c` | Accents, CTAs, highlights, decorative elements |
| Cream | `#f8f7f4` | Light backgrounds, card surfaces |
| Slate | `#64748b` | Body text, secondary labels |
| White | `#ffffff` | Card backgrounds, text on dark backgrounds |

### Typography

| Element | Font | Weight |
|---|---|---|
| Headings | Playfair Display (serif) | Bold (700) |
| Body | Inter (sans-serif) | Regular (400) / Medium (500) / Semibold (600) |

### Animation

All motion transitions use a custom easing curve: `[0.16, 1, 0.3, 1]` for a smooth, premium feel. Scroll-triggered animations use `useInView` with `once: true` to animate elements as they enter the viewport.

### Components

- **`btn-gold`** — Primary CTA button (gold background, navy text)
- **`btn-outline`** — Secondary button (transparent with border)
- **`link-gold`** — Gold-accented text link
- **`container-site`** — Max-width content container with responsive padding
- **`dot-mesh` / `dot-mesh-dark`** — Subtle dot pattern backgrounds

---

## Contact Form

The contact form on the `/contact` page collects strategy session requests. Submissions are sent via email to the configured `CONTACT_EMAIL` address.

### Form Fields

| Field | Type | Required |
|---|---|---|
| First Name | Text | Yes |
| Last Name | Text | Yes |
| Email | Email | Yes |
| Company | Text | Yes |
| Industry | Dropdown | No |
| Deployment Interest | Dropdown | No |
| Company Size | Dropdown | No |
| Message | Textarea | No |

### Email Delivery

The API server supports any SMTP provider. Recommended providers:

| Provider | Setup |
|---|---|
| **Resend** | Free tier: 100 emails/day. Set `SMTP_HOST=smtp.resend.com`, `SMTP_PORT=465`, `SMTP_USER=resend`, `SMTP_PASS=<api-key>` |
| **Gmail** | Use an App Password. Set `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`, `SMTP_USER=<email>`, `SMTP_PASS=<app-password>` |
| **SendGrid** | Set `SMTP_HOST=smtp.sendgrid.net`, `SMTP_PORT=587`, `SMTP_USER=apikey`, `SMTP_PASS=<api-key>` |

### Rate Limiting

The contact form endpoint is rate-limited to **5 submissions per 15 minutes per IP address** to prevent abuse.

---

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Run `npm run build` to verify the production build succeeds
4. Commit with a descriptive message
5. Push and open a pull request

---

## License

All rights reserved. This codebase is proprietary and may not be copied, modified, or redistributed without explicit written permission.
