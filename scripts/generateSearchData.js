import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
// import { createRequire } from "module";
import * as babel from "@babel/core";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_PATH = path.resolve(__dirname, "../src/data/ContentData.jsx");
const OUTPUT_FILE = path.resolve(__dirname, "../public/searchData.json");

const transformFileToTempJS = (inputPath) => {
  const code = fs.readFileSync(inputPath, "utf8");
  const { code: transformed } = babel.transformSync(code, {
    presets: ["@babel/preset-react"],
    filename: "ContentData.jsx",
  });
  const tempPath = path.resolve(__dirname, "../src/data/__temp_ContentData.js");
  fs.writeFileSync(tempPath, transformed, "utf8");
  return tempPath;
};

function slugify(title) {
  return title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
}

function extractDetailedContent(contentData) {
  const results = [];

  for (const [key, value] of Object.entries(contentData)) {
    if (!value || typeof value !== "object") continue;

    const mainTitle = value.title || key;
    const baseSlug = slugify(mainTitle);
    let combinedText = "";

    if (value.sections && Array.isArray(value.sections)) {
      value.sections.forEach((section) => {
        if (section.heading) combinedText += section.heading + ". ";
        if (section.content && Array.isArray(section.content)) {
          section.content.forEach((item) => {
            if (item.text) combinedText += item.text + " ";
          });
        }
      });
    }

    const cleanDescription = combinedText.trim().replace(/\s+/g, " ");

    results.push({
      title: mainTitle,
      description: cleanDescription || `Explore ${mainTitle} in OMS platform.`,
      url: `/productsandservice/${baseSlug}`,
    });
  }

  return results;
}

async function main() {
  console.log("🔍 Transforming ContentData.jsx...");
  const tempFile = transformFileToTempJS(CONTENT_PATH);

  const dataModule = await import(`file://${tempFile}`);
  const contentData = dataModule.default || dataModule.ContentData || dataModule;

  const searchEntries = extractDetailedContent(contentData);

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(searchEntries, null, 2), "utf8");
  fs.unlinkSync(tempFile);

  console.log(`✅ Generated ${OUTPUT_FILE}`);
  console.log(`📦 Found ${searchEntries.length} content entries.`);
}

main().catch((err) => {
  console.error("❌ Error generating search data:", err);
});
