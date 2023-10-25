import Header from '@/components/header';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ActiveSectionProivider from '@/api/contextApi/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/api/contextApi/theme-context';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prateek | Portfolio',
  description: 'Prateek is a full-stack developer with 1.3 years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-slate-100 text-gray-950 relative pt-28 sm:pt-32 
      dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] 
        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10 dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] 
        h-[31.25rem] w-[50rem] rounded-full blur-[10rem] -z-10 sm:w-[68.75rem] 
        md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
        <ActiveSectionProivider>
        <Header/>
        {children}
        <Toaster position='top-right'/>
        <Footer/>
        <ThemeSwitch/>
        </ActiveSectionProivider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
