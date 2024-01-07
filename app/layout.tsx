import classNames from "classnames";
import "./globals.css";
import { questrial } from "./assets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LPG Fitness",
  icons: {
    apple: {
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    icon: {
      url: "/favicon-32x32.png",
      type: "image/png",
      rel: "icon",
      sizes: "32x32",
    },
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#1e1e1e",
      },
    ],
  },
  other: {
    "msapplication-TileColor": "#1e1e1e",
    "theme-color": "#1e1e1e",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={classNames(
          questrial.className,
          "text-white bg-black-light scrollbar-none",
        )}
      >
        {children}
      </body>
    </html>
  );
}
