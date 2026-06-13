import type { Metadata } from "next";
import localFont from "next/font/local";
import { Climate_Crisis } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeTransition from "./components/ThemeTransition";
import Navbar from "./components/Navbar";

const gtWalsheim = localFont({
  src: [
    {
      path: "../../public/fonts/GT-Walsheim-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GT-Walsheim-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/GT-Walsheim-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/GT-Walsheim-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gt-walsheim",
  display: "swap",
});

const climateCrisis = Climate_Crisis({
  variable: "--font-climate-crisis",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "hypecaves",
  description: "Full-Stack Software Engineer and UI/UX & Graphic Designer. Building scalable products, communities and digital experiences.",
  openGraph: {
    title: "hypecaves",
    description: "Full-Stack Software Engineer and UI/UX & Graphic Designer. Building scalable products, communities and digital experiences.",
    url: "https://hypecaves.vercel.app",
    siteName: "hypecaves",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "hypecaves portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "hypecaves",
    description: "Full-Stack Software Engineer and UI/UX & Graphic Designer.",
    creator: "@hypecavess",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${gtWalsheim.variable} ${climateCrisis.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
