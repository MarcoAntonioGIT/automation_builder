import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes';


const font = DM_Sans({ subsets: ['latin']})

export const metadata: Metadata = {
  title: "Weavier",
  description: "Automatize seu trabalho com Weavier",
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
            storageKey="theme"
      >
        {children}
      </ThemeProvider>

      </body>
    </html>
  );
}
