import { products } from '../lib/products';

export default function ProductsPage() {
  return (
    <div style={{padding:'2rem'}}>
      <h1 style={{fontSize:32,fontWeight:700}}>Our Products</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:32}}>
        {products.map(product => (
          <div key={product.id} style={{border:'1px solid #eee',borderRadius:12,padding:24,background:'#fff'}}>
            <img src={`/images/products/${product.image || product.id + '.jpg'}`} alt={product.name} style={{width:'100%',height:220,objectFit:'cover',borderRadius:8,marginBottom:16}} />
            <h2 style={{fontSize:22,fontWeight:600}}>{product.name}</h2>
            <p style={{margin:'12px 0'}}>{product.description}</p>
            <div style={{marginBottom:8}}><b>Price:</b> ${product.price}</div>
            <a href={`/products/${product.slug}`} style={{padding:'8px 16px',background:'#065f46',color:'#fff',borderRadius:6,textDecoration:'none'}}>View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
}
