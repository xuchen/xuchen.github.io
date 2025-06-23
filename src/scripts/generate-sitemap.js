#!/usr/bin/env node

/**
 * Sitemap Generator for Token Epoch Website
 * 
 * This script generates a sitemap.xml file for the Token Epoch website.
 * It automatically detects routes and creates proper sitemap entries.
 * 
 * Usage:
 *   node scripts/generate-sitemap.js
 *   npm run generate-sitemap
 * 
 * Configuration:
 *   - Update DOMAIN constant to change the base URL
 *   - Update ROUTES array to add/remove pages
 *   - Modify priorities and change frequencies as needed
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOMAIN = 'https://xuchen.github.io';
const OUTPUT_FILE = path.join(__dirname, '../public/sitemap.xml');

// Define all routes with their metadata
const ROUTES = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'monthly',
    description: 'Homepage - Xuchen Yao Profile'
  },
  {
    path: '/the-token-epoch',
    priority: '0.8',
    changefreq: 'monthly',
    description: 'The Token Epoch Article (English)'
  },
  {
    path: '/the-token-epoch/zh',
    priority: '0.8',
    changefreq: 'monthly',
    description: 'The Token Epoch Article (Chinese)'
  }
];

/**
 * Get current date in YYYY-MM-DD format
 */
function getCurrentDate() {
  return new Date().toISOString().split('T')[0];
}

/**
 * Generate sitemap XML content
 */
function generateSitemapXML() {
  const currentDate = getCurrentDate();
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  
  ROUTES.forEach(route => {
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}${route.path}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `  </url>\n`;
  });
  
  xml += `</urlset>`;
  
  return xml;
}

/**
 * Write sitemap to file
 */
function writeSitemap() {
  try {
    const sitemapContent = generateSitemapXML();
    
    // Ensure the public directory exists
    const publicDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Write the sitemap file
    fs.writeFileSync(OUTPUT_FILE, sitemapContent, 'utf8');
    
    console.log('✅ Sitemap generated successfully!');
    console.log(`📍 Location: ${OUTPUT_FILE}`);
    console.log(`🌐 Domain: ${DOMAIN}`);
    console.log(`📄 Pages: ${ROUTES.length}`);
    console.log('\n📋 Generated URLs:');
    
    ROUTES.forEach(route => {
      console.log(`   ${DOMAIN}${route.path} (${route.description})`);
    });
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

/**
 * Validate sitemap content
 */
function validateSitemap() {
  try {
    const content = fs.readFileSync(OUTPUT_FILE, 'utf8');
    
    // Basic validation checks
    if (!content.includes('<?xml version="1.0"')) {
      throw new Error('Invalid XML declaration');
    }
    
    if (!content.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')) {
      throw new Error('Invalid urlset declaration');
    }
    
    const urlCount = (content.match(/<url>/g) || []).length;
    if (urlCount !== ROUTES.length) {
      throw new Error(`Expected ${ROUTES.length} URLs, found ${urlCount}`);
    }
    
    console.log('✅ Sitemap validation passed!');
    
  } catch (error) {
    console.error('❌ Sitemap validation failed:', error.message);
    process.exit(1);
  }
}

/**
 * Update robots.txt with correct sitemap URL
 */
function updateRobotsTxt() {
  const robotsFile = path.join(__dirname, '../public/robots.txt');
  const sitemapUrl = `${DOMAIN}/sitemap.xml`;
  
  const robotsContent = `User-agent: *
Allow: /
Sitemap: ${sitemapUrl}`;
  
  try {
    fs.writeFileSync(robotsFile, robotsContent, 'utf8');
    console.log('✅ robots.txt updated with correct sitemap URL');
  } catch (error) {
    console.warn('⚠️  Could not update robots.txt:', error.message);
  }
}

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('🚀 Generating sitemap for Token Epoch website...\n');
  
  writeSitemap();
  validateSitemap();
  updateRobotsTxt();
  
  console.log('\n🎉 Sitemap generation completed successfully!');
  console.log('💡 Tip: Run this script after adding new pages to keep your sitemap up to date.');
}

export {
  generateSitemapXML,
  writeSitemap,
  validateSitemap,
  ROUTES,
  DOMAIN
};
