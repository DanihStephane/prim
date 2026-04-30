import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
const locales = ['en', 'fr'];
const defaultLocale = 'en';

const nextIntlMiddleware = createMiddleware({
    // A list of all locales that are supported
    locales,

    // Used when no locale matches
    defaultLocale: defaultLocale,

    // Disable automatic locale detection
    localeDetection: false
});

const authRoutes = ['/login', '/signup', '/forgot-password', '/reset-password'];

export default async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if the current route is an auth route (taking locales into account)
    const isAuthRoute = authRoutes.some(route =>
        pathname === route || locales.some(locale => pathname === `/${locale}${route}`)
    );


    return nextIntlMiddleware(request);
}

export const config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
