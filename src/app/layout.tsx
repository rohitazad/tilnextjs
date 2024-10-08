
import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        
        <div className='wraper'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
