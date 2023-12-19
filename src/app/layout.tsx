import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderOne from '@/components/HeaderOne'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderOne />
        {children}
      </body>
    </html>
  )
}
