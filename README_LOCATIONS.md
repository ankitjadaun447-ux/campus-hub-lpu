# CampusHub Location Data Registry

This document contains the official specification and operating procedures for the **CampusHub campus-location registry**, derived from the Lovely Professional University (LPU) site-plan reference image and verified public mapping sources.

---

## 📌 Ground Truth Principles

> **IMPORTANT**
> - Only coordinates backed by a public mapping source (e.g. OpenStreetMap, Mapcarta, Google Maps Plus Codes) or verified by a human on-site are marked `verified: true`.
> - **Do NOT** fill missing coordinates with guesses from site-plan images or diagrams.
> - Missing or unconfirmed pins must maintain `verificationStatus: 'needs_verification'`.
> - Unlisted blocks on the source map are explicitly marked `verificationStatus: 'not_listed_on_source_map'`.

---

## 🏗️ Production Schema Fields

| Field | Type | Description |
| :--- | :--- | :--- |
| `latitude`, `longitude` | `number` | Real geographic decimal point (WGS 84) used for navigation, routing, and search. |
| `entranceLatitude`, `entranceLongitude` | `number` | Preferred pedestrian entrance coordinates when a building centroid is not the correct walking destination. |
| `verified` | `boolean` | Flag indicating whether a human has verified the physical pin on campus. |
| `verificationStatus` | `VerificationStatus` | Workflow state: `'verified'`, `'needs_verification'`, or `'not_listed_on_source_map'`. |
| `coordinateSource` | `string` | Provenance of the coordinates (e.g. `'OpenStreetMap/Mapcarta'`, `'On-site GPS'`). |
| `plusCode` | `string` | Digital Plus Code lookup hint (e.g. `7P23+Q9` for Central Library). |
| `lastVerifiedAt` | `string` | ISO 8601 date string recording when human verification took place. |
| `notes` | `string` | Administrative or mapping guidance (e.g. duplicate legend warnings, entrance directions). |

---

## 📍 Current Public-Reference Ground Truth Points

1. **Lovely Professional University (Main Gate 1)**
   - Latitude / Longitude: `31.25336, 75.70354`
   - Source: OpenStreetMap / Mapcarta
   - Status: Verified

2. **Block 18 (Education Block, GT Road)**
   - Latitude / Longitude: `31.25526, 75.70335`
   - Source: OpenStreetMap / Mapcarta
   - Status: Verified
   - Notes: Public mapping source identifies Block 18, LPU on GT Road.

3. **Central Library (Block 36)**
   - Plus Code: `7P23+Q9`
   - Status: `needs_verification`
   - Notes: Public business listing exposes Plus Code 7P23+Q9; exact navigation point should still be verified before production routing.

---

## 🚀 Recommended Admin Verification Workflow

CampusHub includes a **Campus-Admin Verification Workflow** directly on the interactive map:
1. **On-Site Physical Verification**: A trusted campus guide or administrator can stand at the physical entrance of a building and click **"Record Current GPS Position"** using browser HTML5 Geolocation.
2. **Interactive Live Map Calibration**: Click any building marked `needs_verification` to open the verification drawer, input or adjust the coordinates, and select **"Mark as Verified"**.
3. **Persistent Local & Backend Storage**: Verified coordinates are stamped with `lastVerifiedAt: new Date().toISOString()`, saved to local storage, and ready for sync with the Supabase database.
