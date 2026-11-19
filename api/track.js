export default async function handler(req) {
  if (!["GET", "POST"].includes(req.method)) {
    return new Response("Not allowed", { status: 405 });
  }
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const ua = req.headers.get("user-agent") || "";
  const time = new Date().toISOString();

  console.log({ time, ip, ua });

  return new Response(JSON.stringify({ ok: true, ip }), {
    headers: { "Content-Type": "application/json" }
  });
}
