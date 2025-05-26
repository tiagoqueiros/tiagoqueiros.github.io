import type { Metadata, Viewport } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { inter, outfit } from '@/lib/fonts';
import { siteConfig } from '@/config/site';
import '@/styles/globals.css';

export const viewport: Viewport = {
    ...siteConfig.viewport,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: siteConfig.themeColor },
        { media: '(prefers-color-scheme: dark)', color: siteConfig.themeColor }
    ],
    colorScheme: 'dark'
};

export const metadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.url),
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon.svg', type: 'image/svg+xml' },
        ],
        apple: [
            { url: '/apple-touch-icon.png' },
        ],
    },
    appleWebApp: {
        statusBarStyle: 'black-translucent',
        capable: true,
    },
    openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        type: 'website',
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} - ${siteConfig.creator.role}`,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.title,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: siteConfig.url,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`antialiased ${inter.variable} ${outfit.variable}`}>
            <body>
                <div className="min-h-screen flex flex-col">
                    {children}
                </div>
                <GoogleAnalytics gaId={siteConfig.analytics.googleId} />
            </body>
        </html>
    );
}
