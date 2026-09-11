# CampusHub · Location Data & Navigation Registry

> **"Your campus, simplified."**  
> Modern student-first campus utility web application for Lovely Professional University.

---

## 📍 CampusHub Location Data

This repository contains the initial CampusHub campus-location registry derived from the supplied LPU site-plan image and public mapping references.

### ⚠️ Important: Ground Truth Principle

**Only coordinates backed by a public mapping source are marked verified in the starter registry. Do not fill missing coordinates with guesses from the site-plan image.**

- Missing coordinates must remain flagged as `needs_verification`.
- Buildings not listed on the official site-plan reference must be flagged as `not_listed_on_source_map`.

---

### 📋 Recommended Production Fields

| Field | Type | Description |
| :--- | :--- | :--- |
| `latitude`, `longitude` | `number` | Real geographic point (WGS 84) used for routing, distance estimation, and search. |
| `entranceLatitude`, `entranceLongitude` | `number` | Preferred pedestrian entrance where students actually walk in. |
| `verified` | `boolean` | Whether a human has checked the pin against the current physical campus. |
| `verificationStatus` | `'verified' \| 'needs_verification' \| 'not_listed_on_source_map'` | Workflow state of the record. |
| `coordinateSource` | `string` | Where the coordinate came from (e.g., OpenStreetMap, Mapcarta, On-Site GPS). |
| `lastVerifiedAt` | `string` | ISO date string (`YYYY-MM-DD`) recording when human verification took place. |
| `plusCode` | `string` | Digital Plus Code lookup reference (e.g., `7P23+Q9`). |
| `notes` | `string` | Administrative or mapping guidance. |

---

### 📌 Current Public-Reference Points

- **Lovely Professional University (Gate 1 / Welcome Plaza)**: `31.25336, 75.70354` (Verified)
- **Block 18, LPU (GT Road)**: `31.25526, 75.70335` (Verified)
- **Central Library (Block 36)**: Public business listing currently exposes Plus Code `7P23+Q9`; exact navigation point should still be verified before production routing (`needs_verification`).

---

### 🛠️ Campus-Admin Verification Workflow

CampusHub includes a live **Campus-Admin Verification Workflow** directly on the interactive map:
1. Navigate to `/map` and select any campus building.
2. Click **"Admin Verification / Calibrate Entrance Pin"** or the shield icon in the building card.
3. Use **"Acquire My Position"** while physically standing at the entrance gate to capture high-precision GPS coordinates (`enableHighAccuracy: true`).
4. Save center point and pedestrian entrance coordinates, and set the status to **Verified**.
5. Coordinates are persisted locally with `lastVerifiedAt` timestamps and prepared for production database sync.

---

## 🚀 Running the Project Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build production bundle
npm run build
```

- Local Dev URL: `http://localhost:5173/`
- Interactive Map URL: `http://localhost:5173/map`
