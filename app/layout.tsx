import classNames from "classnames";
import "./globals.css";
import { questrial } from "./assets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LPG Fitness",
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
