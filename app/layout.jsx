import Home from '@/components/Home';
import { Inter } from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import 'normalize.css/normalize.css'
import '@/styles/globals.css';
import styles from './layout.module.css';
//import { ThemeProvider } from '@/components/ThemeProvider'
import { LocaleProvider } from '@/components/LocaleProvider'
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ["latin"] });

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
  title: 'Otniel Christin SOTODONOU',
  description: 'Site personnel de christin SOTODONOU',
  openGraph: {
    title: 'Otniel Christin SOTODONOU',
    description: 'Site personnel de christin SOTODONOU',

  }
}

export default function RootLayout({ children }) {

  return <html lang="en">
    <body className={inter.className + '' + styles.body}>
      <ThemeProvider>
        <LocaleProvider>
          <Header />
          <main className={styles.main}>
            <Home />
            <div className={styles.div}> {children}</div>
          </main>
          <Footer />
        </LocaleProvider>
      </ThemeProvider>
    </body>
  </html>
}
