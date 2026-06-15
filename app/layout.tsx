import type { Metadata, Viewport } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { Geist_Mono, Noto_Sans, Playfair_Display } from 'next/font/google';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { Toaster } from '@/components/ui/sonner';
import { getGtmId } from '@/lib/env';
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
            <body className="flex min-h-full flex-col" suppressHydrationWarning>
                {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
                <SiteHeader />
                <main className="flex-1">{children}</main>
                <SiteFooter />
                <Toaster richColors position="top-center" />
            </body>
        </html>
    );
}
