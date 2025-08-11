import { useState } from 'react';

export default function CheckoutPage() {
  const [card, setCard] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(59.98); // Example total
  const [status, setStatus] = useState('');

  // This is a placeholder. In production, use Stripe Elements and backend API.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('Processing payment...');
    setTimeout(() => setStatus('Payment successful!'), 2000);
  }

  return (
    <div style={{padding:'2rem',maxWidth:500,margin:'0 auto'}}>
      <h1 style={{fontSize:32,fontWeight:700}}>Checkout</h1>
      <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:16}}>
        <input type="text" placeholder="Name on Card" value={name} onChange={e => setName(e.target.value)} required style={{padding:8,fontSize:18}} />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{padding:8,fontSize:18}} />
        <input type="text" placeholder="Card Number (demo)" value={card} onChange={e => setCard(e.target.value)} required style={{padding:8,fontSize:18}} />
        <div style={{fontSize:20}}><b>Total:</b> ${amount}</div>
        <button type="submit" style={{padding:'12px 24px',background:'#065f46',color:'#fff',borderRadius:6,border:'none',fontWeight:600}}>Pay Now</button>
      </form>
      {status && <div style={{marginTop:16,fontWeight:600}}>{status}</div>}
      <p style={{marginTop:24,fontSize:14,color:'#888'}}>For production, integrate Stripe Elements and backend API for secure payments.</p>
    </div>
  );
}
