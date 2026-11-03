import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com/'),
  title: "XRverse — The World Reimagined",
  description: "Next-generation spatial computing, 3D scanning, projection mapping, AR & VR immersive realities.",
  keywords: "XRverse, XRverse, Spatial Computing, 3D Scanning, Augmented Reality, Virtual Reality, Projection Mapping, Immersive Experiences, Digitization",
  authors: [{ name: "XRverse" }],
  creator: "XRverse",
  publisher: "XRverse",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "XRverse - Frontend Engineer",
    description: "Next-generation spatial computing, 3D scanning, projection mapping, AR & VR immersive realities.",
    siteName: "XRverse's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRverse - Frontend Engineer",
    description: "Next-generation spatial computing, 3D scanning, projection mapping, AR & VR immersive realities.",
  },  icons: {
    icon: [{ url: '/icons/favicon.svg', type: 'image/svg+xml' }],
  },
  verification: {
    google: "GsRYY-ivL0F_VKkfs5KAeToliqz0gCrRAJKKmFkAxBA",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''}/>
    </html>
  );
}

