import { useState } from 'react';

export default function ChatPage() {
  const [messages, setMessages] = useState<{role: string; content: string}[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessages([...messages, {role: 'user', content: input}]);
    // Call OpenAI API (replace with your key and endpoint)
    const res = await fetch('/api/openai-chat', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({messages: [...messages, {role: 'user', content: input}]}),
    });
    const data = await res.json();
    setMessages([...messages, {role: 'user', content: input}, {role: 'assistant', content: data.reply}]);
    setInput('');
    setLoading(false);
  }

  return (
    <div style={{padding:'2rem',maxWidth:600,margin:'0 auto'}}>
      <h1 style={{fontSize:32,fontWeight:700}}>Live Chat Help</h1>
      <div style={{border:'1px solid #eee',borderRadius:8,padding:16,minHeight:200,marginBottom:16}}>
        {messages.map((msg, i) => (
          <div key={i} style={{margin:'8px 0',color:msg.role==='user'?'#065f46':'#333'}}>
            <b>{msg.role==='user'?'You':'Support'}:</b> {msg.content}
          </div>
        ))}
        {loading && <div>...</div>}
      </div>
      <form onSubmit={sendMessage} style={{display:'flex',gap:8}}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type your question..." style={{flex:1,padding:8,fontSize:18}} />
        <button type="submit" style={{padding:'8px 16px',background:'#065f46',color:'#fff',borderRadius:6,border:'none',fontWeight:600}}>Send</button>
      </form>
      <p style={{marginTop:24,fontSize:14,color:'#888'}}>Powered by OpenAI. Add your API key in /api/openai-chat for live responses.</p>
    </div>
  );
}
