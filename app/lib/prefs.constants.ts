/**
 * Shared with the client. Kept out of `prefs.server.ts` so importing the cookie
 * name into a browser bundle does not drag `createCookie` and its server-only
 * neighbours along with it.
 */
export const LANG_COOKIE_NAME = "portfolio_lang";
