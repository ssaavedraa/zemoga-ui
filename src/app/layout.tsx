import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  viewport: {
    width: '100',
    initialScale: 0.5,
    maximumScale: 1.0,
    userScalable: false
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-light max-w-[1100px]">{children}</body>
    </html>
  )
}
