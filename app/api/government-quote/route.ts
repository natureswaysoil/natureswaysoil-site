import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body?.name || !body?.email || !body?.agency) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const quoteId = `GOV-${Date.now()}`;

    // Optional: send email via Resend if configured
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Nature\'s Way Soil <onboarding@resend.dev>',
            to: [process.env.GOV_QUOTE_EMAIL || 'sales@natureswaysoil.com'],
            subject: `New Government Quote Request ${quoteId}`,
            html: `<p><strong>Quote ID:</strong> ${quoteId}</p>
              <p><strong>Name:</strong> ${body.name}</p>
              <p><strong>Agency:</strong> ${body.agency}</p>
              <p><strong>Email:</strong> ${body.email}</p>
              <p><strong>Phone:</strong> ${body.phone || ''}</p>
              <p><strong>Project:</strong> ${body.projectType || ''}</p>
              <p><strong>Area:</strong> ${body.areaSize || ''}</p>
              <p><strong>Timeline:</strong> ${body.timeline || ''}</p>
              <p><strong>Message:</strong> ${body.message || ''}</p>
              <p><strong>Source:</strong> ${body.source || ''}</p>`,
          }),
        });
      } catch (e) {
        console.error('Email send failed', e);
      }
    }

    return NextResponse.json({ success: true, quoteId });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
