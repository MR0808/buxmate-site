import type { Metadata, Viewport } from 'next';
import { Geist_Mono, Noto_Sans, Playfair_Display } from 'next/font/google';
import { CookieConsent } from '@/components/consent/cookie-consent';
import { ConsentGtm } from '@/components/consent/consent-gtm';
import { ConsentModeSync } from '@/components/consent/consent-mode-sync';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { Toaster } from '@/components/ui/sonner';
import { getGtmId } from '@/lib/env';
import { CONSENT_MODE_DEFAULTS_SCRIPT } from '@/lib/consent-mode';
import { createPageMetadata } from '@/lib/metadata';
import { cn } from '@/lib/utils';
import './globals.css';

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-heading'
});

const notoSans = Noto_Sans({
    subsets: ['latin'],
    variable: '--font-sans'
});

const geistMono = Geist_Mono({
    subsets: ['latin'],
    variable: '--font-geist-mono'
});

const gtmId = getGtmId();

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#e07a3a'
};

export const metadata: Metadata = {
    ...createPageMetadata({}),
    applicationName: 'Buxmate',
    appleWebApp: {
        title: 'Buxmate'
    },
    robots: { index: true, follow: true }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            data-scroll-behavior="smooth"
            className={cn(
                'h-full antialiased',
                notoSans.variable,
                playfairDisplay.variable,
                geistMono.variable,
                'font-sans'
            )}
            suppressHydrationWarning
        >
            <head>
                {gtmId ? (
                    <script
                        dangerouslySetInnerHTML={{
                            __html: CONSENT_MODE_DEFAULTS_SCRIPT,
                        }}
                    />
                ) : null}
            </head>
            <body className="flex min-h-full flex-col" suppressHydrationWarning>
                {gtmId ? (
                    <>
                        <ConsentModeSync />
                        <ConsentGtm gtmId={gtmId} />
                    </>
                ) : null}
                <SiteHeader />
                <main className="flex-1">{children}</main>
                <SiteFooter />
                <CookieConsent />
                <Toaster richColors position="top-center" />
            </body>
        </html>
    );
}
