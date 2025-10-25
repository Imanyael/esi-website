/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://esi.example.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://esi.example.com'}/sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customConfig = {
      '/': { priority: 1.0, changefreq: 'daily' },
      '/about': { priority: 0.9, changefreq: 'weekly' },
      '/program': { priority: 0.9, changefreq: 'weekly' },
      '/apply': { priority: 0.8, changefreq: 'weekly' },
      '/founders': { priority: 0.8, changefreq: 'monthly' },
      '/speakers': { priority: 0.7, changefreq: 'monthly' },
      '/hackathons': { priority: 0.7, changefreq: 'monthly' },
      '/partners': { priority: 0.6, changefreq: 'monthly' },
      '/resources': { priority: 0.6, changefreq: 'weekly' },
      '/contact': { priority: 0.5, changefreq: 'monthly' },
    }

    const pageConfig = customConfig[path] || {}

    return {
      loc: path,
      changefreq: pageConfig.changefreq || config.changefreq,
      priority: pageConfig.priority || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}
