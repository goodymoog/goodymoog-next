import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return new Response("Missing STRIPE_SECRET_KEY", { status: 500 });
  }

  const stripe = new Stripe(secretKey);
  const { itemId } = await req.json();

  const priceMap: Record<string, string> = {
    "warp-drive-cd": "price_1T43muGgY4LU9is8VB2EF95m",
    "sickwiththeflow-cd": "price_1T43n8GgY4LU9is8uY455XZw",
    "new-mexico-cd": "price_1T43nKGgY4LU9is8QNCvlfvJ",
    "poster": "price_1T43naGgY4LU9is8emkDh0Th",
  };

  const priceId = priceMap[itemId];

  if (!priceId) {
    return new Response("Invalid item", { status: 400 });
  }

  const origin =
    req.headers.get("origin") || process.env.NEXT_PUBLIC_SITE_URL;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: `${origin}/merch?success=1`,
    cancel_url: `${origin}/merch?canceled=1`,
  });

  return Response.json({ url: session.url });
}