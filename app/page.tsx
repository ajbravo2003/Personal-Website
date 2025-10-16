'use client';

import { useEffect, useState } from 'react';

export default function HomePage() {
  const fullNameText = "Hi, I'm Alejandro";
  const fullRoleText = 'Software Engineer';

  const [typedName, setTypedName] = useState('');
  const [typedRole, setTypedRole] = useState('');
  const [cursorOnSecondLine, setCursorOnSecondLine] = useState(false);

  useEffect(() => {
    let i = 0;
    const nameInterval = setInterval(() => {
      if (i <= fullNameText.length) {
        setTypedName(fullNameText.slice(0, i));
        i++;
      } else {
        clearInterval(nameInterval);

        // Move cursor to second line after short pause
        setTimeout(() => {
          setCursorOnSecondLine(true);

          let j = 0;
          const roleInterval = setInterval(() => {
            if (j <= fullRoleText.length) {
              setTypedRole(fullRoleText.slice(0, j));
              j++;
            } else {
              clearInterval(roleInterval);
            }
          }, 80);
        }, 500);
      }
    }, 300);

    return () => clearInterval(nameInterval);
  }, []);

  const glowingText = (text: string) =>
    text.split('').map((letter, idx) => (
      <span
        key={idx}
        style={{
          color: '#000',
          animation: `glowColors 3s ease-in-out infinite`,
          animationDelay: `${idx * 0.2}s`,
          display: 'inline-block',
          whiteSpace: letter === ' ' ? 'pre' : 'normal',
        }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));

  const typingDone =
    typedName.length === fullNameText.length &&
    typedRole.length === fullRoleText.length;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        height: '75vh',
        padding: '2rem',
        boxSizing: 'border-box',
        gap: '2rem',
        fontFamily: "'Orbitron', sans-serif",
        position: 'relative',
      }}
    >
      {/* Glowing Typing Text */}
      <div style={{ flex: 1 }}>
        <h1
          style={{
            fontSize: '6.5rem',
            lineHeight: '1.2',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          {glowingText(typedName)}
          {!cursorOnSecondLine && !typingDone && (
            <span className="cursor">&nbsp;</span>
          )}
        </h1>

        <h2 style={{ fontSize: '3.5rem', marginTop: '1rem' }}>
          {glowingText(typedRole)}
          {cursorOnSecondLine && !typingDone && (
            <span className="cursor">&nbsp;</span>
          )}
        </h2>
      </div>

      {/* Photo
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
      </div> */}

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

      {/* Animations */}
      <style>{`
        @keyframes glowColors {
          0% { text-shadow: 0 0 5px #7FFFD4, 0 0 10px #7FFFD4; }
          25% { text-shadow: 0 0 10px #FF69B4, 0 0 20px #FF69B4; }
          50% { text-shadow: 0 0 15px #BA55D3, 0 0 30px #BA55D3; }
          75% { text-shadow: 0 0 20px #00BFFF, 0 0 40px #00BFFF; }
          100% { text-shadow: 0 0 5px #FFB6C1, 0 0 10px #FFB6C1; }
        }

        @keyframes blink {
          0%, 50% { background-color: #000; }
          51%, 100% { background-color: transparent; }
        }

        .cursor {
          display: inline-block;
          width: .1ch;
          background-color: #000;
          margin-left: 2px;
          animation: blink 0.8s infinite;
        }
      `}</style>
    </div>
  );
}
