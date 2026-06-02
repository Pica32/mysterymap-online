const fs = require("node:fs");
const path = require("node:path");

const domain = process.argv[2];
if (!domain) {
  console.error("Usage: node tools/cloudflare-add-domain.js <domain>");
  process.exit(1);
}

const accountId = "a854b444ad419b1582416181e6610cd7";
const projectName = "mysterymap-online";
const configPath = path.join(process.env.APPDATA, "xdg.config", ".wrangler", "config", "default.toml");
const config = fs.readFileSync(configPath, "utf8");
const token = config.match(/oauth_token\s*=\s*"([^"]+)"/)?.[1];

if (!token) {
  console.error("Wrangler OAuth token not found. Run `wrangler login` first.");
  process.exit(1);
}

fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects/${projectName}/domains`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ name: domain })
})
  .then(async (response) => {
    const payload = await response.json();
    console.log(JSON.stringify({
      status: response.status,
      success: payload.success,
      errors: payload.errors,
      result: payload.result && {
        name: payload.result.name,
        status: payload.result.status,
        verified: payload.result.verified
      }
    }, null, 2));
    if (!payload.success) process.exit(1);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
