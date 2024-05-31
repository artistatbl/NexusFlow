import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import TopBanner from "@/components/global/banner";

const font = Plus_Jakarta_Sans({ subsets: ['latin']});

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
    <ClerkProvider>
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
        
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >

          {children}

          {/* <TopBanner /> */}

        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
