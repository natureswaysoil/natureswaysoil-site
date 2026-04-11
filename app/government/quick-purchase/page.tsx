export const metadata = {
  title: 'Quick Purchase | Nature\'s Way Soil Government',
  description:
    'Government quick-purchase options under the micro-purchase threshold with starting prices and included scope.',
};

export default function GovernmentQuickPurchasePage() {
  const sectionStyle: React.CSSProperties = {
    background: '#fff',
    border: '1px solid #e5e7eb',
    borderRadius: 16,
    padding: 24,
    boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
  };

  const cardStyle: React.CSSProperties = {
    border: '1px solid #d1d5db',
    borderRadius: 18,
    padding: 24,
    background: '#fafaf9',
    display: 'grid',
    gap: 14,
  };

  const buyLink = (subject: string, body: string) =>
    `mailto:sales@natureswaysoil.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gap: 24, paddingBottom: 48 }}>
      <section
        style={{
          background: 'linear-gradient(135deg, #14532d 0%, #166534 45%, #0f766e 100%)',
          color: '#fff',
          borderRadius: 24,
          padding: '40px 24px',
        }}
      >
        <div style={{ maxWidth: 820, display: 'grid', gap: 18 }}>
          <p style={{ margin: 0, fontWeight: 800, letterSpacing: 0.3 }}>GOVERNMENT QUICK PURCHASE</p>
          <h1 style={{ margin: 0, fontSize: 42, lineHeight: 1.05 }}>
            Quick Purchase Options Under $15,000
          </h1>
          <p style={{ margin: 0, fontSize: 20, lineHeight: 1.6, color: 'rgba(255,255,255,0.92)' }}>
            Pre-scoped solutions designed for faster government purchasing using purchase cards,
            invoices, or small-order workflows.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="/government#quote-form" style={{ padding: '14px 18px', background: '#facc15', color: '#111827', borderRadius: 10, textDecoration: 'none', fontWeight: 800 }}>
              Request Custom Pricing
            </a>
            <a href="/government" style={{ padding: '14px 18px', background: '#fff', color: '#14532d', borderRadius: 10, textDecoration: 'none', fontWeight: 800 }}>
              Back to Government Page
            </a>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ marginTop: 0, marginBottom: 8, fontSize: 30 }}>How quick purchase works</h2>
        <p style={{ marginTop: 0, color: '#4b5563', lineHeight: 1.7 }}>
          These are starting-price packages built to help buyers move faster on urgent housing,
          grounds, and restoration needs. Final scope can be adjusted for acreage, timing, and delivery.
        </p>
        <ul style={{ lineHeight: 1.9, paddingLeft: 18, marginBottom: 0 }}>
          <li>Starting prices are shown for budget planning and faster approvals.</li>
          <li>Packages can be purchased by invoice, card, or purchase order workflow.</li>
          <li>Each package includes direct support from Nature&apos;s Way Soil on product selection and application use.</li>
        </ul>
      </section>

      <section style={{ display: 'grid', gap: 18, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <div style={cardStyle}>
          <div>
            <p style={{ margin: 0, fontWeight: 800, color: '#166534' }}>SMALL PROJECT</p>
            <h2 style={{ margin: '6px 0 6px 0' }}>Targeted Lawn Repair Program</h2>
            <p style={{ margin: 0, fontWeight: 800, fontSize: 24 }}>$1,000–$3,000</p>
          </div>
          <p style={{ margin: 0, color: '#374151', lineHeight: 1.7 }}>
            Built for fast-response turf repair in military housing, pet areas, entryways, and other
            visible problem spots where replacement is expensive and disruptive.
          </p>
          <div>
            <strong>What it includes</strong>
            <ul style={{ lineHeight: 1.8, paddingLeft: 18, marginBottom: 0 }}>
              <li>Dog urine neutralizer for soil-level damage recovery</li>
              <li>Lawn fertilizer to support regrowth and root recovery</li>
              <li>Application instructions for hose-end or spray use</li>
              <li>Recommended treatment sequence for repeat applications</li>
            </ul>
          </div>
          <div>
            <strong>What it helps with</strong>
            <ul style={{ lineHeight: 1.8, paddingLeft: 18, marginBottom: 0 }}>
              <li>Reduces turf replacement costs in small damaged areas</li>
              <li>Improves appearance in high-visibility housing zones</li>
              <li>Supports faster recovery than untreated areas</li>
            </ul>
          </div>
          <a href={buyLink('Government Quick Purchase - Small Project', 'Please send a quick-purchase invoice for the Small Project / Targeted Lawn Repair Program. Agency name:\nContact name:\nDelivery location:\nEstimated area:')} style={{ padding: '14px 18px', background: '#14532d', color: '#fff', borderRadius: 10, textDecoration: 'none', fontWeight: 800, textAlign: 'center' }}>
            Request Invoice
          </a>
        </div>

        <div style={cardStyle}>
          <div>
            <p style={{ margin: 0, fontWeight: 800, color: '#166534' }}>MEDIUM PROJECT</p>
            <h2 style={{ margin: '6px 0 6px 0' }}>Grounds Health &amp; Fertility Program</h2>
            <p style={{ margin: 0, fontWeight: 800, fontSize: 24 }}>$5,000–$10,000</p>
          </div>
          <p style={{ margin: 0, color: '#374151', lineHeight: 1.7 }}>
            Designed for parks, base grounds, campuses, and recurring maintenance zones that need
            stronger soil performance without jumping straight to major restoration work.
          </p>
          <div>
            <strong>What it includes</strong>
            <ul style={{ lineHeight: 1.8, paddingLeft: 18, marginBottom: 0 }}>
              <li>Liquid biochar for carbon-rich soil support</li>
              <li>Humic + fulvic + kelp inputs to improve nutrient uptake and plant vigor</li>
              <li>Program schedule for phased applications across a 4–8 week window</li>
              <li>Recommended use guidance for maintenance teams or contractors</li>
            </ul>
          </div>
          <div>
            <strong>What it helps with</strong>
            <ul style={{ lineHeight: 1.8, paddingLeft: 18, marginBottom: 0 }}>
              <li>Improves nutrient retention and helps reduce fertilizer runoff</li>
              <li>Supports healthier turf under heat, traffic, and drought stress</li>
              <li>Can support disturbed soils around construction and grounds repair zones</li>
            </ul>
          </div>
          <a href={buyLink('Government Quick Purchase - Medium Project', 'Please send a quick-purchase invoice for the Medium Project / Grounds Health and Fertility Program. Agency name:\nContact name:\nDelivery location:\nEstimated area:')} style={{ padding: '14px 18px', background: '#14532d', color: '#fff', borderRadius: 10, textDecoration: 'none', fontWeight: 800, textAlign: 'center' }}>
            Request Invoice
          </a>
        </div>

        <div style={cardStyle}>
          <div>
            <p style={{ margin: 0, fontWeight: 800, color: '#166534' }}>LARGE PROJECT</p>
            <h2 style={{ margin: '6px 0 6px 0' }}>Full Soil Restoration &amp; Regeneration Program</h2>
            <p style={{ margin: 0, fontWeight: 800, fontSize: 24 }}>$10,000–$15,000</p>
          </div>
          <p style={{ margin: 0, color: '#374151', lineHeight: 1.7 }}>
            Created for larger sites that need a stronger recovery plan, including degraded turf,
            poor-performing soil, and construction-disturbed areas that need ongoing support.
          </p>
          <div>
            <strong>What it includes</strong>
            <ul style={{ lineHeight: 1.8, paddingLeft: 18, marginBottom: 0 }}>
              <li>Bulk liquid biochar and soil-support inputs sized to project scope</li>
              <li>Multi-application plan with phased treatment recommendations</li>
              <li>Ongoing supply structure for repeat applications</li>
              <li>Direct coordination support for contractors or facility teams</li>
            </ul>
          </div>
          <div>
            <strong>What it helps with</strong>
            <ul style={{ lineHeight: 1.8, paddingLeft: 18, marginBottom: 0 }}>
              <li>Rebuilds degraded soil systems and improves long-term turf sustainability</li>
              <li>Helps reduce dependence on repeated re-sodding and heavy chemical inputs</li>
              <li>Improves nutrient holding capacity and can help reduce runoff pressure</li>
              <li>Useful for construction recovery, disturbed soils, and broader restoration planning</li>
            </ul>
          </div>
          <a href={buyLink('Government Quick Purchase - Large Project', 'Please send a quick-purchase invoice for the Large Project / Full Soil Restoration and Regeneration Program. Agency name:\nContact name:\nDelivery location:\nEstimated area:')} style={{ padding: '14px 18px', background: '#14532d', color: '#fff', borderRadius: 10, textDecoration: 'none', fontWeight: 800, textAlign: 'center' }}>
            Request Invoice
          </a>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ marginTop: 0, marginBottom: 8, fontSize: 30 }}>Need a custom package?</h2>
        <p style={{ marginTop: 0, color: '#4b5563', lineHeight: 1.7 }}>
          For airfields, base-wide grounds, municipal systems, or larger restoration work, use the custom quote form for a project-specific package.
        </p>
        <a href="/government#quote-form" style={{ display: 'inline-block', padding: '14px 18px', background: '#14532d', color: '#fff', borderRadius: 10, textDecoration: 'none', fontWeight: 800 }}>
          Request Custom Quote
        </a>
      </section>
    </div>
  );
}
