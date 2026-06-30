import Image from 'next/image';
import Link from 'next/link';
import {
    CalendarPlus,
    CreditCard,
    Mail,
    PartyPopper,
    UserPlus,
    Vote
} from 'lucide-react';
import { SectionHeading } from '@/components/marketing/section-heading';
import { Button } from '@/components/ui/button';
import { SCREENSHOTS } from '@/lib/screenshots';

const steps = [
    {
        icon: PartyPopper,
        title: 'Create your event',
        description: 'Set up your bucks, hens or group weekend in minutes.',
        href: '/how-it-works#create-event',
        screenshot: SCREENSHOTS.organiserHome
    },
    {
        icon: CalendarPlus,
        title: 'Add activities',
        description:
            "Build a timeline — dinners, golf, boat day, whatever's on.",
        href: '/how-it-works#add-activities',
        screenshot: SCREENSHOTS.activities
    },
    {
        icon: UserPlus,
        title: 'Invite guests',
        description:
            'Send private invite links. No account needed for guests to start.',
        href: '/how-it-works#invite-guests',
        screenshot: SCREENSHOTS.guestInvite
    },
    {
        icon: Vote,
        title: 'Collect RSVPs',
        description: "See who's in, who's out, and who's still deciding.",
        href: '/how-it-works#collect-rsvps',
        screenshot: SCREENSHOTS.guestRsvp
    },
    {
        icon: CreditCard,
        title: 'Track payments',
        description:
            'Split accommodation, transport and activities without awkward chasing.',
        href: '/how-it-works#track-payments',
        screenshot: SCREENSHOTS.payments
    },
    {
        icon: Mail,
        title: 'Share updates & photos',
        description: 'Post announcements and photos in your private event hub.',
        href: '/how-it-works#share-updates',
        screenshot: SCREENSHOTS.feed
    }
] as const;

export function HowItWorksSection() {
    return (
        <section id="how-it-works" className="section-pad scroll-mt-20">
            <div className="section-container space-y-12">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <SectionHeading
                        eyebrow="How it works"
                        title="From idea to organised weekend"
                        description="A simple flow built for real group events — not enterprise project management."
                    />
                    <Button
                        asChild
                        variant="outline"
                        className="shrink-0 self-start rounded-full normal-case tracking-normal sm:self-auto"
                    >
                        <Link href="/how-it-works">Full walkthrough</Link>
                    </Button>
                </div>

                <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {steps.map((step, index) => (
                        <li key={step.title}>
                            <Link
                                href={step.href}
                                className="buxmate-card group block overflow-hidden transition-shadow hover:shadow-md"
                            >
                                <div className="relative aspect-16/10 overflow-hidden border-b border-border/60 bg-muted/30">
                                    <Image
                                        src={step.screenshot.src}
                                        alt={step.screenshot.alt}
                                        width={step.screenshot.width}
                                        height={step.screenshot.height}
                                        className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="p-6">
                                    <span className="mb-4 flex size-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                                        {index + 1}
                                    </span>
                                    <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-brand-muted text-primary">
                                        <step.icon
                                            className="size-5"
                                            aria-hidden
                                        />
                                    </div>
                                    <p className="font-heading text-lg font-semibold text-foreground">
                                        {step.title}
                                    </p>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                        {step.description}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
