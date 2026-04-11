import { governmentPackageList } from '@/lib/governmentPackages';

export default function InstantCheckoutPage() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gap: 24, paddingBottom: 48 }}>
      <h1>Instant Government Checkout</h1>
      <p>Purchase pre-configured packages instantly using secure Stripe checkout.</p>

      <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))' }}>
        {governmentPackageList.map((pkg) => (
          <div key={pkg.slug} style={{ border: '1px solid #ddd', borderRadius: 12, padding: 20 }}>
            <h2>{pkg.name}</h2>
            <p><strong>{pkg.rangeLabel}</strong></p>
            <p>{pkg.tagline}</p>

            <ul>
              {pkg.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a
              href={`/api/government-checkout?package=${pkg.slug}`}
              style={{ display: 'block', marginTop: 12, padding: 12, background: '#14532d', color: '#fff', textAlign: 'center', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
