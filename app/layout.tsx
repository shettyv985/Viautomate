import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Viautomate | Automation Agency",
  description: "We help businesses automate repetitive tasks — spreadsheets, workflows, voice agents, and more.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body suppressHydrationWarning style={{ fontFamily: '"Aeonik Regular", sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
