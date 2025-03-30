import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "John Doe - Portfolio",
  description: "Showcasing the projects and skills of John Doe, a passionate developer specializing in web development and modern technologies.",
  keywords: "John Doe, Portfolio, Developer, Projects, Skills, Web Development, Frontend, Backend, Full Stack, React, JavaScript",
  author: "John Doe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Jhon.jpg" />
        <meta name="description" content="Showcasing the projects and skills of John Doe, a passionate developer specializing in web development and modern technologies." />
        <meta name="keywords" content="John Doe, Portfolio, Developer, Projects, Skills, Web Development, Frontend, Backend, Full Stack, React, JavaScript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="John Doe - Portfolio" />
        <meta property="og:description" content="Showcasing the projects and skills of John Doe, a passionate developer specializing in web development and modern technologies." />
        <meta property="og:image" content="/Jhon.jpg" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="John Doe - Portfolio" />
        <meta name="twitter:description" content="Showcasing the projects and skills of John Doe, a passionate developer specializing in web development and modern technologies." />
        <meta name="twitter:image" content="/Jhon.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
