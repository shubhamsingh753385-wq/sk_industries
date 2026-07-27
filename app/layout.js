import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SK Industries - Quality Industrial Products & Portable Infrastructure Solutions',
  description: 'SK Industries is a leading manufacturer and supplier of industrial products including Turbo Fans, Polycarbonate Sheets, Security Cabins, and Portable Toilets in Dadri, Uttar Pradesh.',
  icons: {
    icon: "/gallery/favicon.png",
  },
  keywords: 'SK Industries, industrial products, turbo fans, polycarbonate sheets, security cabins, portable toilets, Dadri, Uttar Pradesh, manufacturing',
  authors: [{ name: 'SK Industries' }],
  openGraph: {
    title: 'SK Industries - Quality Industrial Products',
    description: 'Leading manufacturer of industrial products and portable infrastructure solutions',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
