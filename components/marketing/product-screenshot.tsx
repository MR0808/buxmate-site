import Image from 'next/image';
import { cn } from '@/lib/utils';

type ProductScreenshotProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
    variant?: 'desktop' | 'mobile';
    framed?: boolean;
    className?: string;
};

export function ProductScreenshot({
    src,
    alt,
    width,
    height,
    priority = false,
    variant = 'desktop',
    framed = true,
    className
}: ProductScreenshotProps) {
    const image = (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className="h-auto w-full"
            sizes={
                variant === 'desktop'
                    ? '(max-width: 1024px) 100vw, 640px'
                    : '(max-width: 640px) 280px, 390px'
            }
        />
    );

    if (!framed) {
        return (
            <div className={cn('overflow-hidden rounded-xl', className)}>
                {image}
            </div>
        );
    }

    return (
        <div
            className={cn(
                'relative mx-auto w-full',
                variant === 'desktop'
                    ? 'max-w-2xl'
                    : 'max-w-[280px] sm:max-w-xs',
                className
            )}
        >
            <div
                className="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-brand-muted/80 via-background to-primary/10 blur-2xl"
                aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-card shadow-xl">
                {image}
            </div>
        </div>
    );
}
