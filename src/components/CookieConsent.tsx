import { useState, useEffect, useCallback } from 'react';

// ─── GA4 Measurement ID ──────────────────────────────────────────────────────
const GA_MEASUREMENT_ID = 'G-GDKHVFNY1W';

// ─── Translations ────────────────────────────────────────────────────────────
const COPY = {
  en: {
    message: 'We use cookies to analyze site traffic and improve your experience. No personal data is shared with third parties.',
    accept: 'Accept',
    decline: 'Decline',
    privacy: 'Privacy Policy',
  },
  es: {
    message: 'Usamos cookies para analizar el tráfico del sitio y mejorar su experiencia. No se comparten datos personales con terceros.',
    accept: 'Aceptar',
    decline: 'Rechazar',
    privacy: 'Política de Privacidad',
  },
};

type ConsentStatus = 'pending' | 'accepted' | 'declined';
const STORAGE_KEY = 'solosolutions_cookie_consent';

function getStoredConsent(): ConsentStatus {
  try {
    const val = localStorage.getItem(STORAGE_KEY);
    if (val === 'accepted' || val === 'declined') return val;
  } catch {}
  return 'pending';
}

function loadGA4() {
  // Don't load twice
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`)) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
}

// Extend window for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentStatus>(getStoredConsent);
  const [lang, setLang] = useState<'en' | 'es'>(() => {
    try {
      const stored = localStorage.getItem('solosolutions_locale') || localStorage.getItem('i18nextLng');
      return stored?.startsWith('es') ? 'es' : 'en';
    } catch { return 'en'; }
  });

  // If already accepted, load GA4 on mount
  useEffect(() => {
    if (consent === 'accepted') loadGA4();
  }, [consent]);

  const handleAccept = useCallback(() => {
    setConsent('accepted');
    try { localStorage.setItem(STORAGE_KEY, 'accepted'); } catch {}
    loadGA4();
  }, []);

  const handleDecline = useCallback(() => {
    setConsent('declined');
    try { localStorage.setItem(STORAGE_KEY, 'declined'); } catch {}
  }, []);

  // Don't render if consent already given
  if (consent !== 'pending') return null;

  const t = COPY[lang];

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: '#0F2745',
        color: '#ffffff',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        flexWrap: 'wrap',
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        fontSize: '14px',
        lineHeight: 1.5,
        boxShadow: '0 -2px 12px rgba(0,0,0,0.3)',
      }}
    >
      {/* Language toggle */}
      <div style={{ display: 'flex', gap: '4px', marginRight: '8px' }}>
        <button
          onClick={() => setLang('en')}
          style={{
            background: lang === 'en' ? 'rgba(255,255,255,0.2)' : 'transparent',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '4px',
            color: '#fff',
            padding: '2px 8px',
            fontSize: '12px',
            cursor: 'pointer',
          }}
        >
          EN
        </button>
        <button
          onClick={() => setLang('es')}
          style={{
            background: lang === 'es' ? 'rgba(255,255,255,0.2)' : 'transparent',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '4px',
            color: '#fff',
            padding: '2px 8px',
            fontSize: '12px',
            cursor: 'pointer',
          }}
        >
          ES
        </button>
      </div>

      {/* Message */}
      <p style={{ margin: 0, flex: '1 1 300px', opacity: 0.9 }}>
        {t.message}{' '}
        <a
          href="https://app.solosolutionsai.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#93c5fd', textDecoration: 'underline' }}
        >
          {t.privacy}
        </a>
      </p>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
        <button
          onClick={handleDecline}
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.4)',
            borderRadius: '6px',
            color: '#ffffff',
            padding: '8px 20px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          {t.decline}
        </button>
        <button
          onClick={handleAccept}
          style={{
            background: '#953393',
            border: 'none',
            borderRadius: '6px',
            color: '#ffffff',
            padding: '8px 20px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          {t.accept}
        </button>
      </div>
    </div>
  );
}
