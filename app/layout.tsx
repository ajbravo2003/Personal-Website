// app/layout.tsx
'use client';

import './globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import BackgroundMusic from './backgroundMusic';

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
  ];

  <link //space font link
  href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap"
  rel="stylesheet"
  />

  return (
    <html lang="en">
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0 }}>
        {/* Navbar */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 2rem',
            backgroundColor: '#000', // black navbar
            color: '#fff',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
          }}
        >
          {/* Logo */}
          <div style={{ marginLeft: '1rem' }}>
            <img
              src="/logo.png"
              alt="Logo"
              style={{ height: '60px', width: 'auto' }}
            />
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '2rem' }}>
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  borderBottom:
                    pathname === link.href ? '3px solid red' : '3px solid transparent',
                  paddingBottom: '3px',
                  transition: 'border-bottom 0.2s',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Background image */}
        <div
          style={{
            position: 'fixed',          
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundImage: 'url(/background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: -1,                
          }}
        />
        {/* Main content */}
        <BackgroundMusic />
        <main style={{ padding: '2rem' }}>{children}</main>
      </body>
    </html>
  );
}
