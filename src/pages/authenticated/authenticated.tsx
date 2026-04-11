export function AuthenticatedPage() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100svh', gap: '1rem' }}>
      <h1>Authentication successful</h1>
      <p>You are now signed in. The full dashboard will be available here soon.</p>
    </main>
  )
}
