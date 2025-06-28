# Deployment Guide for Dr. Serena Blake Therapy Website

## 🚀 Quick Deployment Steps

### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name it: `dr-serena-blake-therapy`
4. Make it **Public**
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### 2. Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
git remote add origin https://github.com/YOUR_USERNAME/dr-serena-blake-therapy.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Vercel

1. Go to [Vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import your `dr-serena-blake-therapy` repository
4. Keep all default settings
5. Click "Deploy"

Your website will be live at: `https://dr-serena-blake-therapy.vercel.app`

## 📱 Testing the Website

### Desktop Testing
- Open the website on desktop
- Test all sections: Hero, About, Services, FAQ, Contact
- Verify responsive design by resizing browser window
- Test contact form functionality

### Mobile Testing
- Open website on mobile device
- Test navigation and scrolling
- Verify touch interactions
- Check FAQ accordion functionality
- Test contact form on mobile

## 🎥 Video Recording Guide

### Required Video Content (2-3 minutes)

1. **Desktop Walkthrough (30 seconds)**
   - Show the full homepage
   - Navigate through all sections
   - Demonstrate the design and layout

2. **Mobile Responsiveness (30 seconds)**
   - Show mobile version
   - Demonstrate responsive design
   - Show touch interactions

3. **Services Section (30 seconds)**
   - Highlight the three service cards
   - Show pricing information
   - Display office hours

4. **Contact Form Demo (30 seconds)**
   - Fill out the contact form
   - Show form validation
   - Demonstrate form submission

### Recording Tips
- Use screen recording software (OBS, Loom, or browser dev tools)
- Record at 1080p resolution
- Speak clearly about each feature
- Show both desktop and mobile views
- Keep the video under 3 minutes

## 🔧 Customization Options

### Update Contact Information
Edit `src/app/page.tsx` and update:
- Phone number
- Email address
- Office address
- Office hours

### Change Colors
Edit `src/app/globals.css` and modify:
- Primary color (currently indigo-600)
- Secondary color (currently purple-600)
- Background colors

### Add Real Photos
Replace the placeholder "SB" initials with:
- Professional headshot
- Office photos
- Therapy environment images

## 📞 Support

If you need help with deployment or customization:
1. Check the README.md file
2. Review the code comments
3. Contact the developer for assistance

---

**Note**: This website is ready for immediate deployment and customization for Dr. Serena Blake's therapy practice. 