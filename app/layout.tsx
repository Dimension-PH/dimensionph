import type { Metadata } from "next";
import { Geist, Roboto_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Dimension PH",
  description: "An ESL Teaching Platform",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${robotoSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
