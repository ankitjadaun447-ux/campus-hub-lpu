# 🚀 CampusHub Deployment Guide

This guide walks you through deploying CampusHub (Frontend + Backend + Database) to the web so anyone can access it live with a public URL.

---

## 🎯 Recommended Deployment Options

| Method | Best For | Complexity | Cost | Live URLs |
| :--- | :--- | :--- | :--- | :--- |
| **Option A: All-in-One on Render (Recommended)** | Fastest & easiest deployment. Backend serves frontend directly under a single domain. | ⭐ Easy (5 mins) | **Free** | `https://campushub.onrender.com` |
| **Option B: Vercel (Frontend) + Render (Backend)** | Best frontend speed via global Edge CDN. | ⭐⭐ Medium | **Free** | Frontend: `campushub.vercel.app`<br>Backend: `campushub-api.onrender.com` |
| **Option C: Docker / Railway / VPS** | Production containers or dedicated servers (DigitalOcean, AWS). | ⭐⭐ Medium | Free / $5/mo | Custom domain |

---

## 🌟 Option A: All-in-One Deployment on Render.com (Easiest & Free)

In this setup, your Express backend runs the API on `/api/*` and automatically serves the compiled Vite frontend (`dist/`) for all page routes. There are **zero CORS configuration issues** and only **one live URL**.

### Step 1: Push Your Code to GitHub
1. Create a repository on GitHub (e.g. `campushub`).
2. In your local terminal, run:
   ```bash
   git init
   git add .
   git commit -m "feat: full-stack campushub with sqlite backend"
   git branch -M main
   git remote add origin https://github.com/<your-username>/campushub.git
   git push -u origin main
   ```

### Step 2: Create a Web Service on Render
1. Go to [render.com](https://render.com) and log in (sign up with GitHub).
2. Click **New +** → **Web Service**.
3. Select your GitHub repository (`campushub`).
4. Fill in the settings:
   - **Name**: `campushub` (or any unique name)
   - **Language / Environment**: `Node`
   - **Branch**: `main`
   - **Region**: Nearest to you (e.g. `Singapore` or `Frankfurt`)
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Instance Type**: **Free**
5. Add Environment Variables (under **Environment**):
   - `NODE_ENV`: `production`
6. Click **Deploy Web Service**.
7. Render will build the app and give you a live HTTPS link (e.g. `https://campushub.onrender.com`)!

---

## ⚡ Option B: Split Deployment (Vercel Frontend + Render Backend)

Use this if you want Vercel's global edge network for the React frontend.

### Step 1: Deploy Backend to Render
1. Follow the Render steps above, but set:
   - **Build Command**: `npm install`
   - **Start Command**: `npx tsx server/index.ts`
2. Copy your backend URL: e.g. `https://campushub-api.onrender.com`.

### Step 2: Deploy Frontend to Vercel
1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **Add New...** → **Project**.
3. Import your `campushub` repository.
4. Framework Preset: **Vite**.
5. Under **Environment Variables**, add:
   - `VITE_API_URL`: `https://campushub-api.onrender.com/api`
6. Click **Deploy**.
7. Vercel will deploy your frontend to `https://campushub.vercel.app`.

---

## 🗄️ Database Persistence: SQLite vs Cloud Supabase

### Local / SQLite (`data/campus.db`)
- On free-tier platforms like Render, the container filesystem can reset when the server restarts or sleeps after inactivity.
- If you want persistent disk storage for SQLite on Render, add a **Render Persistent Disk** (`/app/data`) for $0.25/month.

### Cloud PostgreSQL (Supabase - Free)
If you prefer 100% free permanent cloud storage that never resets:
1. Create a free project at [supabase.com](https://supabase.com).
2. Go to the SQL Editor in Supabase and paste the schema from:
   [`supabase/migrations/20260909_campus_locations.sql`](file:///c:/Users/ANKIT/Downloads/Campus%20App/supabase/migrations/20260909_campus_locations.sql).
3. Copy your **Project URL** and **Anon Public Key** from Supabase Project Settings → API.
4. Add them as environment variables in your deployment dashboard:
   - `VITE_SUPABASE_URL`: `https://xxxx.supabase.co`
   - `VITE_SUPABASE_ANON_KEY`: `eyJhbGci...`

---

## 🐳 Option C: Deploy with Docker (Railway / Fly.io / VPS)

The repository includes a production multi-stage [`Dockerfile`](file:///c:/Users/ANKIT/Downloads/Campus%20App/Dockerfile).

To test or run locally in Docker:
```bash
# Build the Docker image
docker build -t campushub .

# Run the container
docker run -p 3001:3001 -v campushub_data:/app/data campushub
```
Visit `http://localhost:3001`.
