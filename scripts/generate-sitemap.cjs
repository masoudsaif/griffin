const fs = require("fs");
const path = require("path");

const RouteName = {
  Home: "Home",
  TermsAndConditions: "TermsAndConditions",
  PrivacyPolicy: "PrivacyPolicy",
  NotFound: "NotFound",
};

const RoutePath = {
  [RouteName.Home]: "/",
  [RouteName.TermsAndConditions]: "/terms-and-conditions",
  [RouteName.PrivacyPolicy]: "/privacy-policy",
  [RouteName.NotFound]: "*",
};
const BASE_URL = process.env.VITE_DOMAIN_URL;
const DEFAULT_CHANGE_FREQ = "monthly";
const DEFAULT_PRIORITY = 0.7;
const EXCLUDED_ROUTES = [RouteName.NotFound];
const OUTPUT_FILE = path.resolve(__dirname, "../public/sitemap.xml");

const PriorityOverrides = {};
const ChangeFreqOverrides = {};

function generateSitemapXml() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const routeKey of Object.keys(RoutePath)) {
    if (EXCLUDED_ROUTES.includes(routeKey)) continue;

    const pathSegment = RoutePath[routeKey];
    const loc = `${BASE_URL}${pathSegment}`;
    const priority = PriorityOverrides[routeKey] || DEFAULT_PRIORITY;
    const changefreq = ChangeFreqOverrides[routeKey] || DEFAULT_CHANGE_FREQ;

    xml += "  <url>\n";
    xml += `    <loc>${loc}</loc>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority.toFixed(1)}</priority>\n`;
    xml += "  </url>\n";
  }

  xml += "</urlset>\n";
  return xml;
}

try {
  const sitemap = generateSitemapXml();
  fs.writeFileSync(OUTPUT_FILE, sitemap);
} catch (error) {
  console.error("Failed to write sitemap.xml:", error);
}
