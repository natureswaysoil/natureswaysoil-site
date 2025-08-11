import { useState } from 'react';

type CartItem = {
  id: string;
  name: string;
  price: number;
};

export default function CartPage() {
  // Mock cart data for demonstration
  const [cart] = useState<CartItem[]>([
    { id: 'B0D69LNC5T', name: "Nature's Way Soil Booster and Loosener", price: 29.99 },
    { id: 'B0DC9CSMWS', name: "Nature's Way Soil Dog Urine Neutralizer & Lawn Revitalizer", price: 29.99 }
  ]);
  return (
    <div style={{padding:'2rem',maxWidth:700,margin:'0 auto'}}>
      <h1 style={{fontSize:32,fontWeight:700}}>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
      <button style={{padding:'12px 24px',background:'#065f46',color:'#fff',borderRadius:6,border:'none',fontWeight:600,marginTop:24}}>Checkout with Stripe</button>
    </div>
  );
}
