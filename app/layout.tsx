import classNames from "classnames";
import "./globals.css";
import { questrial } from "./assets";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(questrial.className, "text-white bg-light-black")}
      >
        {children}
      </body>
    </html>
  );
}
