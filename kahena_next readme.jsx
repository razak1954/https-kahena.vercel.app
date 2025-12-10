# README.md for Kahena Project

You can copy the content below and save it as a file named `README.md` at the root of your project folder:

```
# Kahena — Next.js Travel Website

This repository contains the complete Next.js project for **Kahena**, a personalized travel experience website focused on the Tunisian Sahara.

## Features
- Customized travel circuits for 10-12 people
- Luxury desert camps and traditional homestays
- 4×4 and camel dune excursions
- Visits to archaeological sites
- Gallery and media-rich content
- Contact and reservation forms

## Project Structure
```
/public
  /medias
    /images
    /videos
/pages
/components
/styles
```

## Deployment Guide — Vercel
Follow these steps to deploy the website online:

### Step 1: GitHub Repository
1. Create a repository on GitHub, e.g., `kahena-next`.
2. Clone it locally:
   ```bash
   git clone https://github.com/username/kahena-next.git
   ```
3. Copy all project files, commit, and push:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

### Step 2: Vercel Account
1. Go to [Vercel](https://vercel.com) and sign up.
2. Connect your GitHub account.

### Step 3: Deploy Project
1. Click **New Project** → **Import Git Repository**.
2. Select your repository.
3. Vercel detects Next.js automatically.
4. Click **Deploy**.

### Step 4: Copy Live URL
1. On the project dashboard, under 'Production', find the URL.
2. Click the copy icon or select and copy manually.
3. Paste in a browser to view the live site.

### Step 5: Configure Reservation Form
1. Create `.env.local`:
   ```env
   NEXT_PUBLIC_FORM_ENDPOINT=https://script.google.com/macros/s/XXXX/exec
   ```
2. Push changes to GitHub to redeploy.

### Step 6: Update Media
- Replace placeholders in `public/images` and `public/medias` with real photos/videos.
- Push to GitHub; Vercel rebuilds automatically.

### Step 7: Local Testing (Optional)
1. Install Node.js: https://nodejs.org
2. Run:
   ```bash
   npm install
   npm run dev
   ```
3. Open `http://localhost:3000` to preview.

## License
This project uses images and videos from free sources (Unsplash / Pexels) and is intended for personal or commercial web deployment.

## Contact
For any questions or customization requests, contact the Kahena team.
```
