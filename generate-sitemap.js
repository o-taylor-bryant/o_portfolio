// sitemap-generator.js
const { SitemapStream, streamToPromise } = require("sitemap");
const { createGzip } = require("zlib");
const fs = require("fs");

async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: "https://otaylorbryant.vercel.app/",
  });

  sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });

  sitemap.end();

  const sitemapXML = (await streamToPromise(sitemap)).toString();
  const gzippedSitemap = createGzip();

  fs.writeFileSync("./public/sitemap.xml.gz", sitemapXML);
}

generateSitemap();
