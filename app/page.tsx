export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>RT - Next.js Application</h1>
      <p>Welcome to the RT application powered by Next.js and Vercel Analytics.</p>
      <div style={{ marginTop: '2rem' }}>
        <h2>API Status</h2>
        <p>Engine API is available at: <code>/api/engine</code></p>
      </div>
    </main>
  )
}
