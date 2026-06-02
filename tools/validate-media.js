const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const places = JSON.parse(fs.readFileSync(path.join(root, "data", "mista.json"), "utf8").replace(/^\uFEFF/, ""));
const errors = [];

places.forEach((place) => {
  (place.obrazky || []).forEach((image, index) => {
    const label = `${place.id}: image ${index + 1}`;
    ["url", "sourceUrl", "author", "license"].forEach((field) => {
      if (!image[field]) errors.push(`${label}: missing ${field}`);
    });
    if (image.url && !/^https:\/\//.test(image.url)) errors.push(`${label}: url must be https`);
    if (image.sourceUrl && !/^https:\/\//.test(image.sourceUrl)) errors.push(`${label}: sourceUrl must be https`);
  });
});

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

const imageCount = places.reduce((sum, place) => sum + (place.obrazky || []).length, 0);
console.log(`Validated ${imageCount} credited place images.`);
