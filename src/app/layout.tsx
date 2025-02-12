import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import ModalProvider from "@/providers/modal-provider";

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
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            storageKey="theme"
          >
            <ModalProvider>{children}</ModalProvider>
          </ThemeProvider>
        </body>
      </html> 
    </ClerkProvider>
  );
}
