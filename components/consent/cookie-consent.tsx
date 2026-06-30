'use client';

import Link from 'next/link';
import { useSyncExternalStore } from 'react';
import { Button } from '@/components/ui/button';
import {
    CONSENT_ANALYTICS,
    CONSENT_CHANGED_EVENT,
    CONSENT_ESSENTIAL
} from '@/lib/consent';
import { readConsent, writeConsent } from '@/lib/consent-client';

function subscribe(onStoreChange: () => void) {
    window.addEventListener(CONSENT_CHANGED_EVENT, onStoreChange);
    return () =>
        window.removeEventListener(CONSENT_CHANGED_EVENT, onStoreChange);
}

function readBannerVisible(): boolean {
    return readConsent() === null;
}

export function CookieConsent() {
    const visible = useSyncExternalStore(
        subscribe,
        readBannerVisible,
        () => false
    );

    function acceptAnalytics() {
        writeConsent(CONSENT_ANALYTICS);
    }

    function acceptEssentialOnly() {
        writeConsent(CONSENT_ESSENTIAL);
    }

    if (!visible) return null;

    return (
        <div
            role="dialog"
            aria-labelledby="cookie-consent-title"
            aria-describedby="cookie-consent-description"
            className="fixed inset-x-0 bottom-0 z-100 border-t border-border/80 bg-card/95 p-4 shadow-lg backdrop-blur-md sm:p-6"
        >
            <div className="section-container flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-2xl">
                    <p
                        id="cookie-consent-title"
                        className="font-heading text-base font-semibold text-foreground"
                    >
                        Cookies on buxmate.com
                    </p>
                    <p
                        id="cookie-consent-description"
                        className="mt-2 text-sm leading-relaxed text-muted-foreground"
                    >
                        We use essential cookies to run this site. With your
                        permission we also load analytics via Google Tag
                        Manager. See our{' '}
                        <Link
                            href="/cookies"
                            className="font-medium text-primary hover:underline"
                        >
                            cookie policy
                        </Link>{' '}
                        and{' '}
                        <Link
                            href="/privacy"
                            className="font-medium text-primary hover:underline"
                        >
                            privacy policy
                        </Link>
                        .
                    </p>
                </div>
                <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                    <Button
                        type="button"
                        variant="outline"
                        className="rounded-full normal-case tracking-normal"
                        onClick={acceptEssentialOnly}
                    >
                        Essential only
                    </Button>
                    <Button
                        type="button"
                        className="rounded-full normal-case tracking-normal"
                        onClick={acceptAnalytics}
                    >
                        Accept analytics
                    </Button>
                </div>
            </div>
        </div>
    );
}

export function hasAnalyticsConsent(): boolean {
    return readConsent() === CONSENT_ANALYTICS;
}
