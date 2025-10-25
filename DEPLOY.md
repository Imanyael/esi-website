# E.S.I. Website Deployment Guide

## Overview
This document provides step-by-step instructions for deploying the E.S.I. (Entrepreneur & Startup Incubator) website to Netlify.

## Prerequisites
- GitHub repository containing the website code
- Netlify account
- Custom domain (optional)

## Quick Deploy

### Option 1: Netlify Drop
1. Run `bun run build` to create the production build
2. Drag and drop the `.next` folder to Netlify's deployment area
3. Update site name and configure custom domain if needed

### Option 2: Git-based Deployment (Recommended)
1. Push your code to a GitHub repository
2. Connect your GitHub account to Netlify
3. Select the repository and configure build settings:
   - **Build command**: `bun run build`
   - **Publish directory**: `.next`
   - **Node version**: 18 or higher

## Environment Variables

Set these environment variables in Netlify Dashboard → Site Settings → Environment Variables:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_TELEMETRY_DISABLED=1
```

## Build Configuration

The site uses the following build configuration (already configured in `netlify.toml`):

- **Framework**: Next.js with App Router
- **Package Manager**: Bun
- **Plugin**: @netlify/plugin-nextjs
- **Build Command**: `bun run build`
- **Output Directory**: `.next`

## Pre-Deployment Checklist

### Required Updates Before Going Live

1. **Update Site URL**
   - Replace `https://esi.example.com` with your actual domain in:
     - `NEXT_PUBLIC_SITE_URL` environment variable
     - `next-sitemap.config.js`
     - All JSON-LD structured data in `layout.tsx`

2. **Add LinkedIn URLs**
   - Replace all `LINKEDIN_*_TODO` placeholders with actual LinkedIn profiles:
     - `LINKEDIN_IMAN_TODO`
     - `LINKEDIN_ALEX_TODO`
     - `LINKEDIN_ASHLEY_TODO`
     - `LINKEDIN_BEE_TODO`

3. **Upload Images**
   - Add logo files: `/logo.png`, `/icon-192.png`, `/icon-512.png`
   - Add Open Graph image: `/og-image.png` (1200x630px)
   - Replace placeholder founder/speaker images

4. **Google Verification**
   - Add Google Search Console verification code
   - Replace `GOOGLE_VERIFICATION_TODO` in `layout.tsx`

5. **Contact Email**
   - Verify `esi.team@gmail.com` is set up and monitored
   - Test Netlify contact form functionality

## SEO Configuration

The website includes comprehensive SEO optimization:

### Structured Data (JSON-LD)
- Organization schema with founder information
- Website schema with search functionality
- Event schema for YC Hackathon win
- BreadcrumbList on all subpages

### Sitemap & Robots
- Automatically generated via `next-sitemap`
- Custom priorities for different page types
- Robots.txt allows all crawlers

### Meta Tags
- Open Graph tags for social sharing
- Twitter Card support
- Proper title templates and descriptions

## Performance Optimization

### Included Optimizations
- Next.js Image optimization
- Automatic code splitting
- CSS optimization with Tailwind
- Font optimization with system fonts
- Smooth theme transitions

### Lighthouse Recommendations
- Images use `next/image` for automatic optimization
- Semantic HTML structure
- Accessible color contrast (AA compliant)
- Keyboard navigation support

## Form Configuration

### Netlify Forms
The contact form is configured for Netlify Forms with:
- Honeypot spam protection
- Required field validation
- Form name: "contact"

### Testing Forms
1. Deploy the site
2. Submit a test form
3. Check Netlify Dashboard → Forms for submissions

## Custom Domain Setup

### DNS Configuration
If using a custom domain:

1. **Add Domain in Netlify**
   - Go to Site Settings → Domain management
   - Add your custom domain

2. **Configure DNS**
   - Point your domain's CNAME to `your-site-name.netlify.app`
   - Or use Netlify DNS for full management

3. **Enable HTTPS**
   - Netlify automatically provides SSL certificates
   - Force HTTPS redirect in Site Settings

## Monitoring & Analytics

### Recommended Setup
1. **Google Analytics 4**
   - Add tracking ID to environment variables
   - Configure goals for application submissions

2. **Google Search Console**
   - Verify domain ownership
   - Submit sitemap: `https://your-domain.com/sitemap.xml`

3. **Social Media Monitoring**
   - Monitor Discord community engagement
   - Track Instagram follower growth
   - LinkedIn company page analytics

## Backup & Recovery

### Recommended Practices
1. **Git Repository**
   - Keep all code in version control
   - Tag releases for easy rollback

2. **Environment Variables**
   - Document all environment variables
   - Keep secure backup of configuration

3. **Database/Content**
   - If adding a CMS later, implement regular backups
   - Export form submissions regularly

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (18+)
   - Verify all dependencies are installed
   - Review build logs for specific errors

2. **Forms Not Working**
   - Ensure form has `data-netlify="true"` attribute
   - Check honeypot field is hidden
   - Verify form name matches Netlify configuration

3. **SEO Issues**
   - Use Google Search Console to identify crawl errors
   - Test structured data with Google's Rich Results Test
   - Verify sitemap is accessible at `/sitemap.xml`

## Post-Deployment Tasks

1. **Test All Functionality**
   - Verify all pages load correctly
   - Test theme switching
   - Submit contact form
   - Check all external links

2. **SEO Setup**
   - Submit sitemap to Google Search Console
   - Request indexing for key pages
   - Set up Google Analytics

3. **Social Media**
   - Update all social media profiles with website link
   - Share launch announcement

4. **Monitoring**
   - Set up uptime monitoring
   - Configure error reporting
   - Monitor form submissions

## Support

For deployment issues:
- Check Netlify documentation: https://docs.netlify.com/
- Review build logs in Netlify Dashboard
- Contact Same support for platform-specific issues

## Version History

- **v1.0**: Initial deployment with dual themes, all pages, SEO optimization
- Future versions will be tracked in git tags
