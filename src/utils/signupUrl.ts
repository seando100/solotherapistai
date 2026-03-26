/**
 * Build a signup/login URL that passes the current language to the platform.
 * Use this for all outbound links to app.solosolutionsai.com.
 *
 * Example: getSignupUrl('es') → 'https://app.solosolutionsai.com/sign-up?lang=es'
 */
export function getSignupUrl(lang: string, path = '/sign-up'): string {
  const base = 'https://app.solosolutionsai.com';
  return lang === 'en' ? `${base}${path}` : `${base}${path}?lang=${lang}`;
}

export function getLoginUrl(lang: string): string {
  return getSignupUrl(lang, '/login');
}
