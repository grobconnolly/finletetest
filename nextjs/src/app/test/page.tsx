export default function TestPage() {
  return (
    <div style={{ padding: 40, fontFamily: "system-ui" }}>
      <h1>Test route</h1>
      <p>If you see this at /test, Next.js routing works on Vercel.</p>
      <p>Build time: {new Date().toISOString()}</p>
    </div>
  );
}
