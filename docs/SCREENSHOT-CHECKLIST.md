# Buxmate marketing screenshot checklist

Print this document and tick each box as you go. Screenshots are captured from the **main app** (`buxmate`, typically `http://localhost:3000`) and saved into the **marketing site** repo for use on `buxmate.com`.

---

## Where files should go

Save all finished PNG files here:

```
buxmate-site/public/screenshots/
```

Use the exact filenames listed below so they can be wired into the site without renaming.

---

## Pre-shoot setup

Complete this section before taking any screenshots.

### Environment

- [ ] Main app is running locally (`npm run dev` in `buxmate/`, port **3000**)
- [ ] Database is seeded with sample data (`npx prisma db seed` in `buxmate/` — safe to re-run; refreshes the sample event without wiping your organiser account)
- [ ] You can log in as the organiser without errors

### Organiser login (seed data)

| Field    | Value                    |
|----------|--------------------------|
| Email    | `organiser@buxmate.dev`  |
| Password | `password123`            |
| Login URL| `http://localhost:3000/login` |

### Sample event (seed data)

| Field        | Value                    |
|--------------|--------------------------|
| Event name   | Dave's Bucks Weekend     |
| Event slug   | `daves-bucks-weekend`    |
| Location     | Gold Coast, QLD          |
| Event type   | bucks                    |

After seeding, the terminal prints the event dashboard URL (`/events/[eventId]`). **Write your event ID here for reference:**

```
Event ID: ___________________________________
```

### Guest invite tokens (seed data)

Use these exact URLs for guest/mobile shots (replace host if not localhost):

| Guest          | Status   | Invite URL                                              |
|----------------|----------|---------------------------------------------------------|
| Dave Smith     | Joined (guest of honour) | `/join/seed-invite-dave-smith`              |
| Tom Nguyen     | Joined   | `/join/seed-invite-tom-nguyen`                          |
| James Wilson   | Invited (not joined) | `/join/seed-invite-james-wilson`            |
| Chris O'Brien  | Joined   | `/join/seed-invite-chris-obrien`                        |
| Mike Carter    | Joined   | `/join/seed-invite-mike-carter`                         |
| Sam Patel      | Invited  | `/join/seed-invite-sam-patel`                           |

Guest hub URL (after joining): `http://localhost:3000/e/daves-bucks-weekend`

### Seed activities (should appear in shots)

- [ ] Friday arrival drinks — Surfers Paradise — free
- [ ] Saturday golf — Hope Island — $120 per attending guest
- [ ] Saturday night out — Broadbeach — $1,500 split by attending guests

### Seed payments (should appear in shots)

- [ ] Auto-generated payment items from golf and Saturday night activities
- [ ] Manual payment: **Group gift for Dave** — $300 total, split among guests **excluding** Dave (guest of honour)

### Seed announcement (should appear in feed/guest view)

- [ ] Pinned announcement: *"Welcome to the bucks weekend hub. Check the activity timeline, RSVP to each day…"*

### Event cover image (recommended before shooting)

- [ ] Event has a cover image uploaded (Settings or create/edit event) — avoids empty gradient blocks on guest join and overview screens

### Browser / capture tool setup

- [ ] Use Chrome or Edge in a clean window (no extensions cluttering the UI)
- [ ] Hide bookmarks bar (optional, cleaner crop)
- [ ] DevTools closed unless using responsive mode for mobile
- [ ] Zoom set to **100%**
- [ ] Use light mode **or** dark mode consistently across all shots (pick one and stick to it)
- [ ] Decide capture method:
  - [ ] Full-window screenshot (then crop), **or**
  - [ ] Browser extension (e.g. GoFullPage), **or**
  - [ ] DevTools device toolbar for mobile (iPhone 14 Pro or similar, ~390px wide)

### Quality rules (apply to every screenshot)

- [ ] No browser URL bar visible (crop it out) **or** use a clean crop of page content only
- [ ] No DevTools, no debug overlays, no toast notifications mid-dismiss
- [ ] No real personal emails — seed uses `@example.com` (already safe)
- [ ] Page fully loaded (no skeleton loaders or spinners)
- [ ] Export as **PNG**
- [ ] Prefer **2× resolution** where possible (e.g. capture at 2560px wide for a 1280px target)
- [ ] Filename matches this document exactly

---

## Priority 1 — Required (homepage placeholders)

These two replace the current CSS mockups on the marketing homepage (`HeroSection` and `PreviewSection`). **Minimum deliverable.**

---

### Screenshot 1 — Organiser event dashboard (desktop)

**Filename:** `hero-organiser-dashboard.png`  
**Used on:** Homepage hero — right side of “Plan the chaos. Split the cost. Keep it private.”  
**Viewport:** Desktop, **1280px wide** minimum (1440px is fine)  
**Orientation:** Landscape crop of main content area

#### Steps

- [ ] Log in as `organiser@buxmate.dev`
- [ ] Navigate to Dave's Bucks Weekend event overview:  
      `http://localhost:3000/events/[YOUR_EVENT_ID]`
- [ ] Scroll to top of page
- [ ] Confirm sidebar shows event name and navigation (Overview, Activities, Guests, Payments, etc.)

#### Must be visible in the frame

- [ ] Event header / command header with **Dave's Bucks Weekend**
- [ ] Setup guide section (shows progress steps — OK if not 100% complete)
- [ ] Metrics grid (guest counts, activity counts, payment summary numbers)
- [ ] **Upcoming activities** section with at least 2–3 activities listed
- [ ] **Guest status** section (going / maybe / not going / no response breakdown)
- [ ] **Payment summary** or recent payment info
- [ ] No error banners or empty-state “create your first…” messages

#### Nice to have (include if it fits without clutter)

- [ ] Recent announcements preview
- [ ] Recent photos preview
- [ ] Dashboard warnings (only if they look intentional, not broken)

#### Crop guidance

- [ ] Include left sidebar + main content
- [ ] Exclude browser chrome (tabs, address bar)
- [ ] Target aspect ratio roughly **4:3 to 16:10** — will sit in a rounded card on the marketing site

#### Done

- [ ] File saved to `buxmate-site/public/screenshots/hero-organiser-dashboard.png`
- [ ] Opened file and verified text is readable at print size

---

### Screenshot 2 — Guest event hub (mobile)

**Filename:** `preview-guest-mobile.png`  
**Used on:** Homepage “Product preview” section — “One hub for the whole weekend”  
**Viewport:** Mobile, **390px wide** (iPhone 14 / 15 width)  
**Orientation:** Portrait, tall scroll or above-the-fold crop

#### Steps

- [ ] Open a **private/incognito** window (avoid organiser session conflict)
- [ ] Go to Tom Nguyen's invite:  
      `http://localhost:3000/join/seed-invite-tom-nguyen`
- [ ] Complete join form if prompted (name/email pre-filled from seed)
- [ ] Land on guest hub:  
      `http://localhost:3000/e/daves-bucks-weekend`
- [ ] Scroll through entire page once to ensure all sections loaded

#### Must be visible in the frame

Choose **one** of these approaches:

**Option A — Single above-the-fold crop (preferred for marketing)**

- [ ] Buxmate logo in sticky header
- [ ] Guest overview with event name **Dave's Bucks Weekend**
- [ ] **Activities** section with Friday drinks, Saturday golf, Saturday night
- [ ] RSVP controls or RSVP summary visible (Going / Maybe / Not going)
- [ ] Start of **Your share** / payments section

**Option B — Taller composite (if you stitch in an image editor)**

- [ ] Everything in Option A, plus:
- [ ] Payment breakdown (activity costs + shared costs)
- [ ] At least one **announcement** in updates section
- [ ] Photo gallery section (even if empty placeholders — OK if no photos seeded)

#### Guest account notes

- [ ] Use **Tom Nguyen** (not Dave) — Tom has mixed RSVPs and payment allocations
- [ ] Do **not** use Dave Smith for this shot — Dave is guest of honour and payment UI differs

#### Crop guidance

- [ ] Full mobile width (390px)
- [ ] Height: **800–1200px** crop from top, or full-page if stitching
- [ ] No desktop breakpoint — must look like a phone guest experience

#### Done

- [ ] File saved to `buxmate-site/public/screenshots/preview-guest-mobile.png`
- [ ] Verified mobile layout (stacked sections, readable tap targets)

---

## Priority 2 — Recommended extras

Not wired into the site yet, but capture now while seed data is set up. Useful for Features, How it works, future carousel, or docs.

---

### Screenshot 3 — Activities timeline (organiser)

**Filename:** `03-organiser-activities.png`  
**URL:** `http://localhost:3000/events/[EVENT_ID]/activities`  
**Viewport:** Desktop, 1280px

- [ ] Logged in as organiser
- [ ] All three activities visible with dates, locations, times
- [ ] RSVP counts per activity visible (e.g. “8 going”)
- [ ] Cost info visible on paid activities (golf, Saturday night)
- [ ] “Add activity” or similar CTA visible
- [ ] Saved to `public/screenshots/03-organiser-activities.png`

---

### Screenshot 4 — Guest list (organiser)

**Filename:** `04-organiser-guests.png`  
**URL:** `http://localhost:3000/events/[EVENT_ID]/guests`  
**Viewport:** Desktop, 1280px

- [ ] Guest table/list shows multiple guests (Dave, Tom, James, Chris, etc.)
- [ ] Status badges visible (Joined / Invited)
- [ ] **Guest of honour** badge on Dave Smith
- [ ] Search bar and filter/sort controls visible
- [ ] Mix of joined and invited guests (shows real-world state)
- [ ] Saved to `public/screenshots/04-organiser-guests.png`

---

### Screenshot 5 — Payments overview (organiser)

**Filename:** `05-organiser-payments.png`  
**URL:** `http://localhost:3000/events/[EVENT_ID]/payments`  
**Viewport:** Desktop, 1280px

- [ ] List of payment items including **Group gift for Dave**
- [ ] Activity-linked auto payments (golf, Saturday night) visible
- [ ] Paid vs pending counts or progress visible
- [ ] Per-guest payment status column or summary visible
- [ ] Saved to `public/screenshots/05-organiser-payments.png`

---

### Screenshot 6 — Create payment with preview

**Filename:** `06-create-payment-preview.png`  
**URL:** `http://localhost:3000/events/[EVENT_ID]/payments/new`  
**Viewport:** Desktop, 1280px

- [ ] Form partially filled (e.g. title “Boat day deposit”, amount $200)
- [ ] **Preview / allocation preview** tab or panel open showing split across guests
- [ ] Allocation method selector visible
- [ ] “Exclude guest of honour” option visible if applicable
- [ ] Saved to `public/screenshots/06-create-payment-preview.png`

---

### Screenshot 7 — Payment detail (group gift)

**Filename:** `07-payment-detail-group-gift.png`  
**URL:** `http://localhost:3000/events/[EVENT_ID]/payments/[PAYMENT_ITEM_ID]`  
**Viewport:** Desktop, 1280px

**Payment item ID:** Find “Group gift for Dave” from payments list and open it. Write ID here: `_________________`

- [ ] Title: **Group gift for Dave**
- [ ] Description mentions guest of honour excluded
- [ ] Guest allocation list — Dave **not** in the list
- [ ] Amount per guest shown
- [ ] Paid / pending status per guest visible
- [ ] Saved to `public/screenshots/07-payment-detail-group-gift.png`

---

### Screenshot 8 — Event feed / announcements (organiser)

**Filename:** `08-organiser-feed.png`  
**URL:** `http://localhost:3000/events/[EVENT_ID]/feed`  
**Viewport:** Desktop, 1280px

- [ ] Pinned welcome announcement visible
- [ ] “Create post” or compose area visible
- [ ] Post type selector (announcement, etc.) if shown on empty compose state
- [ ] Saved to `public/screenshots/08-organiser-feed.png`

---

### Screenshot 9 — Photo gallery (organiser)

**Filename:** `09-organiser-photos.png`  
**URL:** `http://localhost:3000/events/[EVENT_ID]/photos`  
**Viewport:** Desktop, 1280px

- [ ] If photos exist: grid of thumbnails with upload UI
- [ ] If no photos: empty state + upload form still worth capturing
- [ ] Upload area / “Add photo” visible
- [ ] Saved to `public/screenshots/09-organiser-photos.png`

**Optional:** Upload 2–3 placeholder photos first for a richer shot.

- [ ] Uploaded sample photos before capture

---

### Screenshot 10 — Guest invite landing (not joined)

**Filename:** `10-guest-invite-landing.png`  
**URL:** `http://localhost:3000/join/seed-invite-james-wilson`  
**Viewport:** Mobile, 390px

- [ ] “Hi James” (or first name) greeting visible
- [ ] Event name **Dave's Bucks Weekend** visible
- [ ] Date range and **Gold Coast, QLD** location visible
- [ ] Event cover image visible (not empty gradient)
- [ ] Join form fields visible
- [ ] Privacy / “private link” trust message visible
- [ ] Saved to `public/screenshots/10-guest-invite-landing.png`

---

### Screenshot 11 — Organiser home dashboard (all events)

**Filename:** `11-organiser-home.png`  
**URL:** `http://localhost:3000/` (after organiser login)  
**Viewport:** Desktop, 1280px

- [ ] “Your events” or dashboard heading visible
- [ ] Dave's Bucks Weekend card/row visible
- [ ] Create event CTA visible
- [ ] Saved to `public/screenshots/11-organiser-home.png`

---

### Screenshot 12 — Guest payments detail (mobile)

**Filename:** `12-guest-payments-mobile.png`  
**URL:** `http://localhost:3000/e/daves-bucks-weekend` (as Tom Nguyen)  
**Viewport:** Mobile, 390px

- [ ] Scroll to **Your share** / payments section
- [ ] Activity costs section visible (golf, etc.)
- [ ] Shared costs section visible (group gift, etc.)
- [ ] Payment instructions text visible (“Pay organiser via bank transfer…”)
- [ ] Amount owed per line item readable
- [ ] Saved to `public/screenshots/12-guest-payments-mobile.png`

---

### Screenshot 13 — Guest RSVP on activity (mobile)

**Filename:** `13-guest-rsvp-mobile.png`  
**URL:** `http://localhost:3000/e/daves-bucks-weekend` (as Tom Nguyen)  
**Viewport:** Mobile, 390px

- [ ] Activities list with RSVP buttons (Going / Maybe / Not going)
- [ ] At least one activity showing Tom's current RSVP state
- [ ] Activity time and location visible
- [ ] Saved to `public/screenshots/13-guest-rsvp-mobile.png`

---

## Priority 3 — Social / SEO asset

### Open Graph / Twitter card image

**Filename:** `og-image.png`  
**Used on:** Link previews when sharing `buxmate.com` (Facebook, LinkedIn, iMessage, Slack, etc.)  
**Dimensions:** **1200 × 630 px** exactly  
**Format:** PNG or JPG

This is **not** a raw app screenshot — it is a designed marketing card. Options:

**Option A — Designed card (recommended)**

- [ ] Buxmate logo (mark or full wordmark)
- [ ] Tagline: *Plan the chaos. Split the cost. Keep it private.*
- [ ] Subline: *Private event planning for bucks, hens & group weekends*
- [ ] Brand colours (warm, modern — match marketing site)
- [ ] No tiny unreadable UI text

**Option B — Screenshot composite**

- [ ] Use `hero-organiser-dashboard.png` inside a device frame or rounded card
- [ ] Logo + tagline on left, app screenshot on right
- [ ] Exported at exactly 1200 × 630

#### Done

- [ ] File saved to `buxmate-site/public/screenshots/og-image.png`
- [ ] Previewed in a link debugger (optional): https://www.opengraph.xyz/

---

## Post-shoot delivery checklist

Hand off to dev / drop in repo when complete.

### Priority 1 (minimum)

- [ ] `hero-organiser-dashboard.png`
- [ ] `preview-guest-mobile.png`

### Priority 2 (extras)

- [ ] `03-organiser-activities.png`
- [ ] `04-organiser-guests.png`
- [ ] `05-organiser-payments.png`
- [ ] `06-create-payment-preview.png`
- [ ] `07-payment-detail-group-gift.png`
- [ ] `08-organiser-feed.png`
- [ ] `09-organiser-photos.png`
- [ ] `10-guest-invite-landing.png`
- [ ] `11-organiser-home.png`
- [ ] `12-guest-payments-mobile.png`
- [ ] `13-guest-rsvp-mobile.png`

### Priority 3 (social)

- [ ] `og-image.png`

### Final QA pass

- [ ] All filenames match this document (lowercase, hyphens, `.png`)
- [ ] All files in `buxmate-site/public/screenshots/`
- [ ] Consistent light/dark mode across app screenshots
- [ ] No sensitive or real user data in any image
- [ ] Notify dev to wire Priority 1 into homepage (`HeroSection`, `PreviewSection`)

---

## Quick reference — marketing site placement

| Marketing page / section        | Screenshot needed        | Status today        |
|----------------------------------|--------------------------|---------------------|
| Homepage hero                    | #1 organiser dashboard   | CSS mockup placeholder |
| Homepage product preview         | #2 guest mobile hub      | CSS mockup placeholder |
| Homepage features                | None (icons only)        | Optional extras later |
| Homepage how it works            | None (icons only)        | Optional extras later |
| `/how-it-works` full page        | None                     | Optional extras later |
| Social link previews (OG/Twitter)| OG image                 | Logo only today     |

---

## Notes

**Event ID changes after re-seed.** If you reset the database, re-run seed and update the event ID written at the top of this document. Guest invite tokens and slug stay the same.

**Cover image.** If guest invite (#10) or guest hub (#2) show a blank gradient instead of a photo, upload a cover image on the event before shooting.

**Production screenshots.** For live marketing assets, repeat the same checklist against `https://app.buxmate.com` with a staging/demo event — do not use localhost URLs in public-facing metadata.

---

*Document version: June 2025 — Buxmate marketing site screenshot shoot.*
