const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const queries = JSON.parse(fs.readFileSync(path.join(root, "data", "source-queries.json"), "utf8").replace(/^\uFEFF/, ""));
const sources = JSON.parse(fs.readFileSync(path.join(root, "data", "source-catalog.json"), "utf8").replace(/^\uFEFF/, ""));
const sourceIds = new Set(sources.map((source) => source.id));
const seen = new Set();
const errors = [];

queries.forEach((query, index) => {
  const label = query.id || `query-${index}`;
  ["id", "source", "type", "purpose", "output", "publishable", "notes"].forEach((field) => {
    if (query[field] === undefined || query[field] === null || query[field] === "") errors.push(`${label}: missing ${field}`);
  });
  if (seen.has(query.id)) errors.push(`${label}: duplicate query id`);
  seen.add(query.id);
  if (!sourceIds.has(query.source)) errors.push(`${label}: source ${query.source} not found in source catalog`);
  if (!query.endpoint && !query.query) errors.push(`${label}: missing endpoint or query`);
  if (!Array.isArray(query.output) || query.output.length === 0) errors.push(`${label}: output must be a non-empty array`);
  if (query.publishable !== false) errors.push(`${label}: import queries must create candidates, not publishable pages`);
});

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${queries.length} source queries.`);
