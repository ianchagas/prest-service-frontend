import { Geist } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import LoaderClient from '@/components/ui/loader-client';
import getSeoMetadata from '@/utils/seo';

const font = Geist({ subsets: ['latin'] });

export const metadata = getSeoMetadata();

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang='en'>
        <body className={font.className}>
          <ThemeProvider attribute='class' defaultTheme='white' enableSystem disableTransitionOnChange>
            <main>
              <LoaderClient>{children}</LoaderClient>{' '}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
