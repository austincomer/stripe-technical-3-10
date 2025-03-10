import type { Metadata } from 'next'
import { Host_Grotesk } from 'next/font/google'

import './globals.css'

const host = Host_Grotesk({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-host',
})

export const metadata: Metadata = {
  title: 'Stripe Technical 3/10',
  description: 'Stripe Technical 3/10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`h-full 
          min-h-dvh 
          overflow-x-hidden 
          bg-neutral-50 
          font-sans 
          antialiased 
          ${host.variable}
      `}
      >
        <div className='flex min-h-dvh w-full flex-col bg-[#f5f5f0] font-host'>
          {children}
        </div>
      </body>
    </html>
  )
}
