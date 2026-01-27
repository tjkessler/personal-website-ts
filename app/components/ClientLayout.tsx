"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import "../globals.css";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Set theme based on system preference on mount
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(systemTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const maxWidth = 1100;
  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          background: '#222',
          color: '#fff',
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 32px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <Link href="/" style={{ fontWeight: 700, fontSize: '1.25rem', textDecoration: 'none', color: 'inherit' }}>
              Travis J. Kessler
            </Link>
            {/* Desktop nav */}
            <nav className="header-nav" style={{ display: 'none', gap: '16px' }}>
              <Link href="/" className="header-link" style={{ textDecoration: 'none' }}>Home</Link>
              <Link href="/research" className="header-link" style={{ textDecoration: 'none' }}>Research</Link>
              <Link href="/projects" className="header-link" style={{ textDecoration: 'none' }}>Projects</Link>
              <a
                href="https://github.com/tjkessler"
                className="header-link"
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.05A9.38 9.38 0 0112 6.84c.84.004 1.68.11 2.47.32 1.92-1.32 2.75-1.05 2.75-1.05.54 1.4.2 2.44.1 2.7.63.72 1.02 1.63 1.02 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/traviskessler/"
                className="header-link"
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
                </svg>
              </a>
            </nav>
          </div>
          {/* Hamburger menu and theme toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Hamburger menu for mobile */}
            <button
              className="hamburger-menu-btn"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                marginRight: 0,
              }}
            >
              {/* Hamburger icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            {/* Only render theme toggle after mount to avoid hydration mismatch */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="theme-toggle-btn"
                style={{
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: 'none',
                }}
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? (
                  // Moon icon for dark mode
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12.79A9 9 0 0111.21 3a7 7 0 100 14A9 9 0 0021 12.79z" fill="currentColor"/>
                  </svg>
                ) : (
                  // Sun icon for light mode
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="5" fill="currentColor"/>
                    <g stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </g>
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <nav
            id="mobile-menu"
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: '#222',
              color: '#fff',
              position: 'absolute',
              top: '100%',
              right: 0,
              left: 0,
              zIndex: 101,
              padding: '16px 0',
              gap: '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <Link href="/" className="header-link" style={{ textDecoration: 'none', padding: '8px 32px' }} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/research" className="header-link" style={{ textDecoration: 'none', padding: '8px 32px' }} onClick={() => setMenuOpen(false)}>Research</Link>
            <Link href="/projects" className="header-link" style={{ textDecoration: 'none', padding: '8px 32px' }} onClick={() => setMenuOpen(false)}>Projects</Link>
            <a
              href="https://github.com/tjkessler"
              className="header-link"
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', padding: '8px 32px' }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              onClick={() => setMenuOpen(false)}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.05A9.38 9.38 0 0112 6.84c.84.004 1.68.11 2.47.32 1.92-1.32 2.75-1.05 2.75-1.05.54 1.4.2 2.44.1 2.7.63.72 1.02 1.63 1.02 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/traviskessler/"
              className="header-link"
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', padding: '8px 32px' }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              onClick={() => setMenuOpen(false)}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
              </svg>
            </a>
          </nav>
        )}
      </header>
      <main
        style={{
          maxWidth,
          margin: '0 auto',
          padding: '32px',
          marginTop: '3em',
        }}
      >
        {children}
      </main>
    </>
  );
}
