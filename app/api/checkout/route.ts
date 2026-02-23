import Stripe from "stripe";

export const runtime = "nodejs"; // ensures Node runtime (Stripe needs this)

export async function POST(req: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return new Response("Missing STRIPE_SECRET_KEY", { status: 500 });
  }

  const stripe = new Stripe(secretKey, {
    apiVersion: "2026-01-28.clover",
  });

  const { itemId } = await req.json();

  const catalog: Record<string, { name: string; priceCents: number }> = {
    cd: { name: "Goodymoog — CD (Jewel Case)", priceCents: 1500 },
    tee: { name: "Goodymoog — Logo Tee", priceCents: 3000 },
    poster: { name: "Goodymoog — Poster", priceCents: 2000 },
  };

  const item = catalog[itemId];
  if (!item) return new Response("Invalid item", { status: 400 });

  const origin = req.headers.get("origin") || "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: item.priceCents,
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/merch?success=1`,
    cancel_url: `${origin}/merch?canceled=1`,
  });

  return Response.json({ url: session.url });
}