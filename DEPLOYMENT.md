# 🚀 Deploying SoraGuide to GitHub Pages (with GitHub Desktop)

## Step-by-Step Deployment Guide

### 1. **Update Your GitHub Username**
First, open `package.json` and replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

Example: If your username is `kunalkatariya`, change line 6 to:
```json
"homepage": "https://kunalkatariya.github.io/soraguide"
```

---

### 2. **Add Your Project to GitHub Desktop**

1. Open **GitHub Desktop**
2. Click **File** → **Add Local Repository**
3. Click **Choose...** and navigate to:
   ```
   /Users/kunalkatariya/gemini/antigravity/scratch/soraguide
   ```
4. Click **Add Repository**

If prompted that this isn't a Git repository:
- Click **Create a Repository**
- Name it `soraguide`
- Click **Create Repository**

---

### 3. **Publish to GitHub**

1. In GitHub Desktop, you'll see all your files listed as changes
2. In the bottom left, write a commit message: `Initial commit - SoraGuide`
3. Click **Commit to main**
4. Click the **Publish repository** button at the top
5. In the dialog:
   - **Name:** `soraguide`
   - **Description:** (optional) "Your guide to living in Japan"
   - ✅ Uncheck "Keep this code private" if you want it public
   - Click **Publish Repository**

---

### 4. **Deploy to GitHub Pages**

Open Terminal and run:
```bash
cd /Users/kunalkatariya/gemini/antigravity/scratch/soraguide
npm run deploy
```

This will build and deploy your site automatically!

---

### 5. **Enable GitHub Pages** (if needed)

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/soraguide`
2. Click **Settings** → **Pages** (in sidebar)
3. Under "Source":
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

---

### 6. **🎉 Your Site is Live!**

After 1-2 minutes, visit:
```
https://YOUR_GITHUB_USERNAME.github.io/soraguide/
```

---

## 📝 Making Updates Later

**Using GitHub Desktop:**
1. Make your code changes
2. Open GitHub Desktop
3. You'll see your changes listed
4. Write a commit message (e.g., "Updated trash guide")
5. Click **Commit to main**
6. Click **Push origin** at the top

**Deploy the updates:**
```bash
npm run deploy
```

Your site will update in 1-2 minutes!

---

## ⚙️ Already Configured

✅ Installed `gh-pages` package
✅ Added `npm run deploy` script
✅ Configured base path for GitHub Pages
✅ Ready to publish!

**Just update your username in `package.json` and you're ready to go!**
