const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const sources = JSON.parse(fs.readFileSync(path.join(root, "data", "source-catalog.json"), "utf8").replace(/^\uFEFF/, ""));
const required = ["id", "name", "type", "license", "bestFor", "useInMysteryMap", "risk", "priority"];
const ids = new Set();
const errors = [];

sources.forEach((source, index) => {
  const label = source.id || `source-${index}`;
  required.forEach((field) => {
    if (source[field] === undefined || source[field] === null || source[field] === "") {
      errors.push(`${label}: missing ${field}`);
    }
  });
  if (ids.has(source.id)) errors.push(`${label}: duplicate source id`);
  ids.add(source.id);
  if (!Array.isArray(source.type) || source.type.length === 0) errors.push(`${label}: type must be a non-empty array`);
  if (!Array.isArray(source.bestFor) || source.bestFor.length === 0) errors.push(`${label}: bestFor must be a non-empty array`);
  if (!Number.isInteger(source.priority) || source.priority < 1 || source.priority > 4) {
    errors.push(`${label}: priority must be integer 1-4`);
  }
});

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

const byPriority = sources.reduce((acc, source) => {
  acc[source.priority] = (acc[source.priority] || 0) + 1;
  return acc;
}, {});

console.log(`Validated ${sources.length} sources. Priority counts: ${JSON.stringify(byPriority)}`);
