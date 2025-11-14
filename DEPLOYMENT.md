# Free Deployment Options for Your Portfolio

## 🚀 Best Option: Vercel (Recommended)

**Why Vercel?**
- Created by the Next.js team - perfect integration
- **100% FREE** for personal projects
- Automatic deployments from GitHub
- Custom domain support (free)
- SSL certificate included
- Global CDN for fast loading
- Zero configuration needed

### Steps to Deploy on Vercel:

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Done! Your site will be live in ~2 minutes

3. **Your site URL will be:**
   - `https://my-portfolio-username.vercel.app`
   - You can add a custom domain later (free)

---

## 🌐 Alternative Options:

### 2. Netlify
- **Free tier:** Generous limits
- **Pros:** Easy setup, good for static sites
- **Cons:** Less optimized for Next.js than Vercel
- **URL:** [netlify.com](https://netlify.com)

### 3. Railway
- **Free tier:** $5 credit/month (enough for small projects)
- **Pros:** Good for full-stack apps
- **Cons:** Credit-based, may need to upgrade later
- **URL:** [railway.app](https://railway.app)

### 4. Render
- **Free tier:** Available with limitations
- **Pros:** Good documentation
- **Cons:** Slower cold starts on free tier
- **URL:** [render.com](https://render.com)

### 5. GitHub Pages
- **Free tier:** Unlimited
- **Pros:** Free, simple
- **Cons:** Requires static export (not ideal for Next.js)
- **URL:** GitHub Pages (built-in)

---

## 📝 Quick Vercel Deployment Checklist:

- [ ] Push code to GitHub
- [ ] Sign up on Vercel
- [ ] Connect GitHub repository
- [ ] Deploy (automatic)
- [ ] Add custom domain (optional)
- [ ] Share your portfolio URL!

---

## 🎯 Recommended: Vercel

**For Next.js projects, Vercel is the best choice because:**
- ✅ Zero configuration
- ✅ Automatic deployments
- ✅ Built-in CI/CD
- ✅ Preview deployments for every PR
- ✅ Analytics included
- ✅ 100% free for personal use

---

## 💡 Pro Tips:

1. **Environment Variables:** If you add any API keys later, add them in Vercel dashboard → Settings → Environment Variables

2. **Custom Domain:** 
   - Go to Vercel project settings
   - Add your domain (e.g., `aimeneharbi.com`)
   - Follow DNS instructions
   - Free SSL automatically configured

3. **Automatic Updates:**
   - Every push to `main` branch = automatic deployment
   - Every pull request = preview deployment

4. **Performance:**
   - Vercel automatically optimizes your Next.js app
   - Images are optimized via Next.js Image component
   - Global CDN ensures fast loading worldwide

---

## 🚀 Ready to Deploy?

**Easiest path:**
1. Push to GitHub
2. Sign up on Vercel
3. Import & Deploy
4. Share your portfolio!

Your portfolio will be live in minutes! 🎉

