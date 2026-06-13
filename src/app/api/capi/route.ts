import crypto from "crypto";

const hash = (v: string | undefined) =>
  v ? crypto.createHash("sha256").update(v.trim().toLowerCase()).digest("hex") : undefined;

export async function POST(request: Request) {
  const { eventID, email, phone, eventName, sourceUrl } = await request.json();

  const PIXEL = process.env.META_PIXEL_ID;
  const TOKEN = process.env.META_CAPI_TOKEN;
  const TEST = process.env.META_TEST_EVENT_CODE;

  if (!PIXEL || !TOKEN) {
    return Response.json({ ok: false, error: "Missing META env vars" }, { status: 500 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ua = request.headers.get("user-agent") ?? undefined;

  const payload = {
    data: [
      {
        event_name: eventName || "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventID, // must match browser pixel eventID for dedup
        action_source: "website",
        event_source_url: sourceUrl,
        user_data: {
          em: hash(email),
          ph: phone ? hash(String(phone).replace(/[^0-9]/g, "")) : undefined,
          client_ip_address: ip,
          client_user_agent: ua,
        },
      },
    ],
    ...(TEST ? { test_event_code: TEST } : {}),
  };

  const res = await fetch(
    `https://graph.facebook.com/v21.0/${PIXEL}/events?access_token=${TOKEN}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  const result = await res.json();
  return Response.json({ ok: res.ok, result }, { status: res.ok ? 200 : 500 });
}
