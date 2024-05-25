import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";

import "./globals.css";
import TopBanner from "@/components/global/banner";

const font = DM_Sans({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: "NexusFlow",
  description: "Workflow Automation and Integration Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
        
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

          {children}

          <TopBanner />

        </ThemeProvider>
      </body>
    </html>
  );
}
