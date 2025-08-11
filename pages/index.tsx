export default function HomePage() {
  return (
    <div style={{padding:'2rem',maxWidth:700,margin:'0 auto'}}>
      <h1 style={{fontSize:36,fontWeight:700}}>Nature’s Way Soil</h1>
      <p style={{fontSize:20,margin:'16px 0'}}>Organic soil & lawn products for healthy, sustainable gardens and landscapes.</p>
      <a href="/products" style={{padding:'12px 24px',background:'#065f46',color:'#fff',borderRadius:6,textDecoration:'none',fontWeight:600}}>Shop Products</a>
      <div style={{marginTop:32}}>
        <h2 style={{fontSize:24,fontWeight:600}}>Why Choose Us?</h2>
        <ul style={{fontSize:18,lineHeight:1.6}}>
          <li>100% organic formulas</li>
          <li>Safe for pets, kids, and pollinators</li>
          <li>Proven results for lawns, gardens, and farms</li>
          <li>Expert support and advice</li>
        </ul>
      </div>
    </div>
  );
}
