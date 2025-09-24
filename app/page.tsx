'use client';

export default function HomePage() {
  const nameText = "Hi, I'm Alejandro";
  const roleText = "Software Engineer";

  const glowingText = (text: string) =>
    text.split('').map((letter, idx) => (
      <span
        key={idx}
        style={{
          color: '#000',
          animation: `glowColors 3s ease-in-out infinite`,
          animationDelay: `${idx * 0.2}s`,
          display: 'inline-block',
          whiteSpace: letter === ' ' ? 'pre' : 'normal', // preserve spaces
        }}
      >
        {letter === ' ' ? '\u00A0' : letter} {/* real space */}
      </span>
    ));

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'left',
        height: '75vh',
        padding: '2rem',
        boxSizing: 'border-box',
        gap: '2rem',
        fontFamily: "'Orbitron', sans-serif",
        position: 'relative',
      }}
    >
      {/* Glowing Text */}
      <div style={{ flex: 1 }}>
        <h1
          style={{
            fontSize: '5rem',
            lineHeight: '1.2',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          {glowingText(nameText)}
        </h1>
        <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>
          {glowingText(roleText)}
        </h2>
      </div>

      {/* Photo */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img
          src="/me.png"
          alt="My Picture"
          style={{
            maxHeight: '90vh',
            width: 'auto',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Powered By section */}
      <div
        style={{
          position: 'absolute',
          bottom: '1rem',
          left: '1rem',
          fontSize: '0.9rem',
          color: '#aaa',
          fontFamily: 'monospace',
        }}
      >
        Powered by <span style={{ color: '#61dafb' }}>Next.js</span>,{' '}
        <span style={{ color: '#61dafb' }}>React</span> &{' '}
        <span style={{ color: '#61dafb' }}>Vercel</span>
      </div>

      {/* Glow colors */}
      <style>{`
        @keyframes glowColors {
          0% {
            text-shadow: 0 0 5px #7FFFD4, 0 0 10px #7FFFD4;
          }
          25% {
            text-shadow: 0 0 10px #FF69B4, 0 0 20px #FF69B4;
          }
          50% {
            text-shadow: 0 0 15px #BA55D3, 0 0 30px #BA55D3;
          }
          75% {
            text-shadow: 0 0 20px #00BFFF, 0 0 40px #00BFFF;
          }
          100% {
            text-shadow: 0 0 5px #FFB6C1, 0 0 10px #FFB6C1;
          }
        }
      `}</style>
    </div>
  );
}
