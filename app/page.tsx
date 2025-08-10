export default function Home() {
  return (
    <div style={{display:'grid',gap:16}}>
      <h1 style={{fontSize:24,fontWeight:600}}>Welcome to Nature’s Way Soil</h1>
      <p>Browse our products, add to cart, and check out with Stripe. You can also chat with us for help.</p>
      <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
        <a href="/products" style={{padding:'8px 12px',background:'#065f46',color:'#fff',borderRadius:6,textDecoration:'none'}}>Shop Products</a>
        <a href="/cart" style={{padding:'8px 12px',border:'1px solid #e5e7eb',borderRadius:6,textDecoration:'none'}}>View Cart</a>
        <a href="/chat" style={{padding:'8px 12px',border:'1px solid #e5e7eb',borderRadius:6,textDecoration:'none'}}>Chat with us</a>
      </div>
    </div>
  );
}
