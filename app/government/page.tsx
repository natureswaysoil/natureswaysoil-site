import QuoteForm from './QuoteForm';

export const metadata = {
  title: 'Government Solutions | Nature\'s Way Soil',
  description:
    'Government-ready soil and turf solutions with quote requests for bases, parks, housing, and facilities.',
};

export default function GovernmentPage({
  searchParams,
}: {
  searchParams?: { source?: string };
}) {
  const source = searchParams?.source || 'direct';

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 12px',
    borderRadius: 999,
    border: '1px solid #d1d5db',
    background: '#fff',
    fontWeight: 700,
    fontSize: 14,
  };

  const sectionStyle: React.CSSProperties = {
    background: '#fff',
    border: '1px solid #e5e7eb',
    borderRadius: 16,
    padding: 24,
    boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
  };

  const cardStyle: React.CSSProperties = {
    border: '1px solid #e5e7eb',
    borderRadius: 16,
    padding: 20,
    background: '#fafaf9',
  };

  return (
    <div
      style={{
        maxWidth: 1180,
        margin: '0 auto',
        display: 'grid',
        gap: 24,
        paddingBottom: 48,
      }}
    >
      <section
        style={{
          background:
            'linear-gradient(135deg, #14532d 0%, #166534 45%, #0f766e 100%)',
          color: '#fff',
          borderRadius: 24,
          padding: '40px 24px',
        }}
      >
        <div style={{ maxWidth: 760, display: 'grid', gap: 18 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <span style={{ ...badgeStyle, background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.28)', color: '#fff' }}>HUBZone</span>
            <span style={{ ...badgeStyle, background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.28)', color: '#fff' }}>USDA BioPreferred</span>
            <span style={{ ...badgeStyle, background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.28)', color: '#fff' }}>SAM Registered</span>
            <span style={{ ...badgeStyle, background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.28)', color: '#fff' }}>CAGE: 9TYW7</span>
          </div>
          <h1 style={{ fontSize: 42, lineHeight: 1.05, margin: 0 }}>
            Government-Ready Soil &amp; Turf Solutions
          </h1>
          <p style={{ fontSize: 20, lineHeight: 1.6, margin: 0, color: 'rgba(255,255,255,0.92)' }}>
            Sustainable products for military bases, housing areas, parks, hospitals, airfields,
            and facility grounds. Built for quick quotes, purchase orders, and contractor support.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, paddingTop: 6 }}>
            <a
              href="#quote-form"
              style={{
                padding: '14px 18px',
                background: '#facc15',
                color: '#111827',
                borderRadius: 10,
                textDecoration: 'none',
                fontWeight: 800,
              }}
            >
              Request Government Pricing
            </a>
            <a
              href="/NWS_Government_Capability_Statement.pdf"
              style={{
                padding: '14px 18px',
                background: '#fff',
                color: '#14532d',
                borderRadius: 10,
                textDecoration: 'none',
                fontWeight: 800,
              }}
            >
              Download Capability Statement
            </a>
          </div>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>
            Source tracking: <strong>{source}</strong>
          </p>
        </div>
      </section>

      <section style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {[
          {
            title: 'Reduce replacement costs',
            body: 'Use restorative inputs that help rebuild soil health instead of relying only on costly turf replacement.',
          },
          {
            title: 'Safe around people and pets',
            body: 'Useful for housing areas, common spaces, parks, and grounds where lower-toxicity products matter.',
          },
          {
            title: 'Easy government purchasing',
            body: 'Built around quotes, invoicing, purchase orders, and responsive follow-up for public-sector buyers.',
          },
          {
            title: 'Small business advantage',
            body: 'HUBZone and USDA BioPreferred positioning can support sustainability and supplier diversity goals.',
          },
        ].map((item) => (
          <div key={item.title} style={sectionStyle}>
            <h2 style={{ marginTop: 0, marginBottom: 10, fontSize: 22 }}>{item.title}</h2>
            <p style={{ margin: 0, lineHeight: 1.7, color: '#374151' }}>{item.body}</p>
          </div>
        ))}
      </section>

      <section style={{ ...sectionStyle, display: 'grid', gap: 18 }}>
        <div>
          <h2 style={{ margin: '0 0 8px 0', fontSize: 30 }}>Common Government Applications</h2>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.7 }}>
            Practical solutions for grounds teams, facility managers, base housing, and contractors.
          </p>
        </div>
        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {[
            'Military housing lawn repair',
            'Airfield and grounds maintenance',
            'Parks, recreation, and municipal turf care',
            'VA, hospital, and campus grounds',
            'Soil restoration and remediation support',
            'Bulk fertilization and revitalization programs',
          ].map((item) => (
            <div key={item} style={cardStyle}>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...sectionStyle, display: 'grid', gap: 18 }}>
        <div>
          <h2 style={{ margin: '0 0 8px 0', fontSize: 30 }}>Popular Government Bundles</h2>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.7 }}>
            Starter-friendly bundles that make budgeting and scope discussions easier.
          </p>
        </div>
        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>Starter Kit</h3>
            <p style={{ fontWeight: 800, color: '#166534' }}>$1,000–$3,000</p>
            <ul style={{ lineHeight: 1.8, paddingLeft: 18 }}>
              <li>Dog urine neutralizer</li>
              <li>Lawn and turf fertilizer</li>
              <li>Ideal for housing areas and spot repair</li>
            </ul>
          </div>
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>Grounds Maintenance Kit</h3>
            <p style={{ fontWeight: 800, color: '#166534' }}>$5,000–$10,000</p>
            <ul style={{ lineHeight: 1.8, paddingLeft: 18 }}>
              <li>Liquid biochar</li>
              <li>Humic + kelp fertility program</li>
              <li>Great for seasonal grounds treatment</li>
            </ul>
          </div>
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>Full Restoration Program</h3>
            <p style={{ fontWeight: 800, color: '#166534' }}>$10,000–$25,000+</p>
            <ul style={{ lineHeight: 1.8, paddingLeft: 18 }}>
              <li>Bulk product supply</li>
              <li>Soil rebuilding and treatment schedule</li>
              <li>Best for contractors, campuses, and bases</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="quote-form"
        style={{
          display: 'grid',
          gap: 24,
          gridTemplateColumns: 'minmax(0, 1.1fr) minmax(320px, 0.9fr)',
          alignItems: 'start',
        }}
      >
        <div style={sectionStyle}>
          <h2 style={{ marginTop: 0, marginBottom: 8, fontSize: 30 }}>Request Government Pricing</h2>
          <p style={{ marginTop: 0, color: '#4b5563', lineHeight: 1.7 }}>
            Share your agency, project size, and timeline. Nature&apos;s Way Soil can respond with
            pricing, recommended products, and next steps.
          </p>
          <QuoteForm initialSource={source} />
        </div>

        <aside style={{ display: 'grid', gap: 16 }}>
          <div style={sectionStyle}>
            <h3 style={{ marginTop: 0 }}>What happens next</h3>
            <ol style={{ paddingLeft: 20, lineHeight: 1.8, marginBottom: 0 }}>
              <li>Your request is submitted with source tracking.</li>
              <li>A confirmation email can be sent automatically.</li>
              <li>You can follow up with a Stripe-hosted invoice when the quote is approved.</li>
            </ol>
          </div>
          <div style={sectionStyle}>
            <h3 style={{ marginTop: 0 }}>Procurement notes</h3>
            <ul style={{ paddingLeft: 18, lineHeight: 1.8, marginBottom: 0 }}>
              <li>Purchase order friendly workflow</li>
              <li>Government purchase card compatible via Stripe invoices</li>
              <li>QR-ready source tracking for cards, handouts, and summit leads</li>
            </ul>
          </div>
          <div style={sectionStyle}>
            <h3 style={{ marginTop: 0 }}>Direct contact</h3>
            <p style={{ margin: '0 0 8px 0' }}><strong>James Jones</strong></p>
            <p style={{ margin: '0 0 8px 0' }}>Founder / Managing Member</p>
            <p style={{ margin: '0 0 8px 0' }}><a href="tel:2525607390">252-560-7390</a></p>
            <p style={{ margin: 0 }}><a href="mailto:sales@natureswaysoil.com">sales@natureswaysoil.com</a></p>
          </div>
        </aside>
      </section>
    </div>
  );
}
