// Kahena — Next.js Complete Project (updated with Vercel Deployment Guide)
// Added step-by-step instructions to deploy Kahena on Vercel and see the site live.

/*
DEPLOYMENT GUIDE — VERCEL

Step 1: Create a GitHub Repository
1. Go to https://github.com and log in.
2. Create a new repository, e.g., kahena-next.
3. Clone the repository to your computer: 
   git clone https://github.com/username/kahena-next.git
4. Copy all project files into the cloned folder.
5. Commit and push changes:
   git add .
   git commit -m "Initial commit"
   git push origin main

Step 2: Create a Vercel Account
1. Go to https://vercel.com and sign up.
2. Connect your GitHub account.

Step 3: Deploy the Project
1. Click 'New Project' → 'Import Git Repository'.
2. Select your kahena-next repository.
3. Vercel detects Next.js and sets up the build automatically.
4. Click 'Deploy'.
5. After build completion, Vercel provides a public URL, e.g., https://kahena.vercel.app.

Step 4: Configure the Reservation Form
1. Create a .env.local file in the project root:
   NEXT_PUBLIC_FORM_ENDPOINT=https://script.google.com/macros/s/XXXX/exec
2. Push changes to GitHub to trigger automatic redeploy on Vercel.

Step 5: Update Media
1. Replace placeholder images in public/images and public/medias with real photos/videos.
2. Push to GitHub; Vercel rebuilds the site automatically.

Step 6: Local Testing (Optional)
1. Install Node.js (https://nodejs.org).
2. Run locally:
   npm install
   npm run dev
3. Open http://localhost:3000 to preview the site before deployment.

Now your Kahena website is live and fully testable by any visitor.
*/
