import fs from "fs";
import path from "path";

const pagesDir = path.resolve("./src/pages");

const landingSections = [
  { title: "Solutions", description: "Explore OMS solutions designed for modern businesses.", url: "/#solutions" },
  { title: "Why OMS", description: "Learn why global organizations trust OMS software.", url: "/#why-oms" },
  { title: "How to Buy", description: "Step-by-step guide to purchasing and deploying OMS.", url: "/#how-to-buy" },
  { title: "Learn", description: "Tutorials, documentation, and resources for OMS users.", url: "/#learn" },
  { title: "Support", description: "Reach support or browse FAQs for quick help.", url: "/#support" },
  { title: "Partners", description: "Explore collaborations and partnerships with OMS.", url: "/#partners" }
];

function findAstroPages(dir, baseUrl = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let pages = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const subPages = findAstroPages(fullPath, baseUrl + "/" + entry.name);
      pages = pages.concat(subPages);
    } else if (entry.name.endsWith(".astro")) {
      const fileName = entry.name.replace(".astro", "");
      const routePath =
        fileName === "index" ? baseUrl || "/" : baseUrl + "/" + fileName;

      const title =
        fileName === "index"
          ? "Home"
          : fileName.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

      pages.push({
        title,
        description: `Explore OMS ${title} page for details.`,
        url: routePath
      });
    }
  }

  return pages;
}

const astroPages = findAstroPages(pagesDir);
const allSearchData = [...astroPages, ...landingSections];
const outputPath = path.resolve("./src/data/searchData.json");

fs.writeFileSync(outputPath, JSON.stringify(allSearchData, null, 2));

console.log(`✅ searchData.json generated successfully with ${allSearchData.length} entries.`);
