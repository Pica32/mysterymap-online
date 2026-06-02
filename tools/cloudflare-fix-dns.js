const token = process.env.CLOUDFLARE_API_TOKEN;
const zoneId = "0dfaf3bf2c9af3231f894ff716e98e11";
const target = "mysterymap-online.pages.dev";

if (!token) {
  console.error("Set CLOUDFLARE_API_TOKEN with Zone DNS Edit permission for mysterymap.online.");
  process.exit(1);
}

async function request(path, options = {}) {
  const response = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });
  const payload = await response.json();
  if (!payload.success) {
    throw new Error(JSON.stringify({ status: response.status, errors: payload.errors }, null, 2));
  }
  return payload.result;
}

async function listRecords() {
  return request(`/zones/${zoneId}/dns_records?per_page=100`);
}

async function deleteConflictingRecords(records, name) {
  const conflicting = records.filter((record) => record.name === name && ["A", "AAAA", "CNAME"].includes(record.type));
  for (const record of conflicting) {
    await request(`/zones/${zoneId}/dns_records/${record.id}`, { method: "DELETE" });
    console.log(`Deleted ${record.type} ${record.name} -> ${record.content}`);
  }
}

async function createCname(name) {
  const result = await request(`/zones/${zoneId}/dns_records`, {
    method: "POST",
    body: JSON.stringify({
      type: "CNAME",
      name,
      content: target,
      proxied: true,
      ttl: 1
    })
  });
  console.log(`Created CNAME ${result.name} -> ${result.content}`);
}

(async () => {
  const records = await listRecords();
  await deleteConflictingRecords(records, "mysterymap.online");
  await deleteConflictingRecords(records, "www.mysterymap.online");
  await deleteConflictingRecords(records, "*.mysterymap.online");
  await createCname("@");
  await createCname("www");
  console.log("DNS records updated for Cloudflare Pages.");
})().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
