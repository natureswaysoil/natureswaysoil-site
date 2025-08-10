export const metadata = {
  title: "Nature's Way Soil",
  description: 'Organic soil & lawn products',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{padding:'12px',borderBottom:'1px solid #e5e7eb',display:'flex',justifyContent:'space-between'}}>
          <a href="/" style={{fontWeight:600}}>Nature&apos;s Way Soil</a>
          <nav style={{display:'flex',gap:12}}>
            <a href="/products">Products</a>
            <a href="/cart">Cart</a>
            <a href="/chat">Chat</a>
          </nav>
        </header>
        <main style={{padding:'16px'}}>{children}</main>
      </body>
    </html>
  );
}
