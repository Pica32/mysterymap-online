const fs = require("node:fs");
const path = require("node:path");

const accountId = "a854b444ad419b1582416181e6610cd7";
const projectName = "mysterymap-online";
const configPath = path.join(process.env.APPDATA, "xdg.config", ".wrangler", "config", "default.toml");
const config = fs.readFileSync(configPath, "utf8");
const token = process.env.CLOUDFLARE_API_TOKEN || config.match(/oauth_token\s*=\s*"([^"]+)"/)?.[1];

async function cloudflare(pathname) {
  const response = await fetch(`https://api.cloudflare.com/client/v4${pathname}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const payload = await response.json();
  return { status: response.status, payload };
}

(async () => {
  const domains = await cloudflare(`/accounts/${accountId}/pages/projects/${projectName}/domains`);
  const zones = await cloudflare(`/zones?name=mysterymap.online`);
  const zoneId = zones.payload.result?.[0]?.id;
  const dnsRecords = zoneId ? await cloudflare(`/zones/${zoneId}/dns_records`) : null;
  console.log(JSON.stringify({
    domains: {
      status: domains.status,
      success: domains.payload.success,
      result: (domains.payload.result || []).map((item) => ({
        name: item.name,
        status: item.status,
        verified: item.verified
      })),
      errors: domains.payload.errors
    },
    zones: {
      status: zones.status,
      success: zones.payload.success,
      result: (zones.payload.result || []).map((item) => ({
        id: item.id,
        name: item.name,
        status: item.status,
        nameServers: item.name_servers
      })),
      errors: zones.payload.errors
    },
    dnsRecords: dnsRecords && {
      status: dnsRecords.status,
      success: dnsRecords.payload.success,
      result: (dnsRecords.payload.result || []).map((item) => ({
        id: item.id,
        type: item.type,
        name: item.name,
        content: item.content,
        proxied: item.proxied
      })),
      errors: dnsRecords.payload.errors
    }
  }, null, 2));
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
