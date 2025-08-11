import { products } from '../../lib/products';
import { useRouter } from 'next/router';

export default function ProductDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const product = products.find(p => p.slug === slug);
  if (!product) return <div>Product not found.</div>;
  return (
    <div style={{padding:'2rem',maxWidth:700,margin:'0 auto'}}>
      <img src={`/images/products/${product.image || product.id + '.jpg'}`} alt={product.name} style={{width:'100%',height:320,objectFit:'cover',borderRadius:8,marginBottom:24}} />
      <h1 style={{fontSize:32,fontWeight:700}}>{product.name}</h1>
      <p style={{margin:'16px 0'}}>{product.description}</p>
      <div><b>Price:</b> ${product.price}</div>
      <div style={{margin:'16px 0'}}>
        <b>Benefits:</b>
        <ul>{product.benefits.map(b => <li key={b}>{b}</li>)}</ul>
      </div>
      <div style={{margin:'16px 0'}}>
        <b>Usage:</b>
        <ul>{product.usage.map(u => <li key={u}>{u}</li>)}</ul>
      </div>
      <div><b>Application Rate:</b> {product.applicationRate}</div>
      <div><b>Ingredients:</b> {product.ingredients}</div>
      <div><b>Size:</b> {product.size}</div>
      <div><b>Category:</b> {product.category}</div>
      <div><b>Type:</b> {product.type}</div>
      <div style={{marginTop:24}}>
        <button style={{padding:'12px 24px',background:'#065f46',color:'#fff',borderRadius:6,border:'none',fontWeight:600}}>Add to Cart</button>
      </div>
    </div>
  );
}
