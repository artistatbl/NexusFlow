import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google'
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import TopBanner from "@/components/global/banner";
import { Toaster } from "@/components/ui/toaster";

const dmSans = DM_Sans({ subsets: ['latin'] })

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
    <ClerkProvider 
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    
    >
    <html lang="en">
      <body className={dmSans.className}>
        <ThemeProvider
        
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >

          {children}


          <Toaster />

        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
