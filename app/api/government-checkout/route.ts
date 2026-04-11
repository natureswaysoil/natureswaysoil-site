import { NextRequest, NextResponse } from 'next/server';
import { governmentPackages } from '@/lib/governmentPackages';

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const slug = url.searchParams.get('package');

    if (!slug || !governmentPackages[slug]) {
      return NextResponse.json({ error: 'Invalid package' }, { status: 400 });
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
    }

    const pkg = governmentPackages[slug];

    const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        mode: 'payment',
        success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/government?success=true`,
        cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/government/quick-purchase?canceled=true`,
        'line_items[0][price_data][currency]': 'usd',
        'line_items[0][price_data][product_data][name]': pkg.name,
        'line_items[0][price_data][unit_amount]': String(pkg.priceCents),
        'line_items[0][quantity]': '1',
      }),
    });

    const session = await res.json();

    return NextResponse.redirect(session.url);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
