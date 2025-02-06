import type { Metadata } from "next";
import localFont from "next/font/local";


import { cookies } from "next/headers";
import { getLocale, getMessages } from "next-intl/server";
import NextTopLoader from "nextjs-toploader";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "react-hot-toast";


// -----------------------------------------------------

import '@/styles/global.css'
import MainLayout from "@/components/layouts/MainLayout";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export const metadata: Metadata = {
  title: "",
  description: "",
  keywords: [],
  verification: {
    google: "",
  },
  openGraph: {
    images: '',
  },
};





export default async function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;

}>) {



  const cookieStore = cookies();
  const theme = cookieStore.get('theme')

  const messages = await getMessages();



  return (
    <html data-theme={theme?.value === 'true'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${theme?.value === 'true' && 'dark-theme'}`}
      >
        <NextTopLoader
          color="#e03"
          initialPosition={0.1}
          crawlSpeed={300}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={400}
          shadow="0 0 10px #e03,0 0 5px #e03"
        />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <NextIntlClientProvider messages={messages}>
          <MainLayout>
            {children}
          </MainLayout>
        </NextIntlClientProvider>


      </body>
    </html>
  );
}
