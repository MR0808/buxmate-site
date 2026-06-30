# Buxmate (marketing site)

Public marketing site for [buxmate.com](https://buxmate.com) — homepage, how-it-works, legal pages, contact form.

- **App:** [app.buxmate.com](https://app.buxmate.com) (`buxmate` repo)

## Stack

Next.js 16 · Resend (contact form) · Google Tag Manager (with Consent Mode v2)

## Local development

```powershell
cd c:\Users\kram\Dropbox\Buxmate\buxmate-site
cp .env.example .env   # if present; else see env table below
npm install
npm run dev            # http://localhost:3001
```

Run the app on port 3000 so signup/login links work. Use `npm run dev:fresh` if Turbopack cache errors appear.

## Environment variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_APP_URL` | `https://app.buxmate.com` |
| `NEXT_PUBLIC_SITE_URL` | `https://buxmate.com` |
| `RESEND_API_KEY` | Contact form email |
| `EMAIL_FROM` | e.g. `Buxmate <hello@buxmate.com>` |

Optional: `NEXT_PUBLIC_GTM_ID` — loads with Consent Mode v2 (denied until user accepts analytics)

## Deploy (Vercel)

1. Create a separate Vercel project for this repo
2. Set env vars above for Production
3. Attach `buxmate.com` (and redirect `www` → apex or vice versa)
4. Ensure screenshots and OG image exist under `public/` (see `docs/SCREENSHOT-CHECKLIST.md`)

```powershell
npm run lint
npm run build
```

## Docs

| Doc | Description |
|-----|-------------|
| [PRODUCTION-LAUNCH.md](../buxmate/docs/PRODUCTION-LAUNCH.md) | Full launch runbook (app + site) |
| [SCREENSHOT-CHECKLIST.md](./docs/SCREENSHOT-CHECKLIST.md) | Marketing screenshot list |
| [MARKETING.md](./docs/MARKETING.md) | Copy & positioning brief |

## Privacy / analytics

- Cookie banner: essential vs analytics (`components/consent/`)
- Google Consent Mode v2 defaults to **denied**; updated when the user chooses
- GTM container loads on every page when `NEXT_PUBLIC_GTM_ID` is set; analytics cookies only after consent
- Contact form: honeypot + rate limiting (no CAPTCHA)

## Security notes

- Security headers + permissive CSP in `lib/security-headers.ts`
- Tighten CSP over time as third-party scripts stabilise
