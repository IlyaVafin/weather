import { ThemeProvider } from '@/features/theme-toggle/model/ThemeProvider';
import type { Metadata } from 'next';
import './globals.css';
import { Montserrat} from 'next/font/google'
import { ClientProvider } from '@/shared/context/ClientProvider';
import { CityProvider } from '@/shared/context/CitySearchContext';

export const metadata: Metadata = {
  title: 'Weather app',
  description: 'The new weather app with all functions',
};

const montserrat = Montserrat({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <ClientProvider>
        <ThemeProvider>
          <CityProvider>
            <body>
              <div className="content-bg">{children}</div>
            </body>
          </CityProvider>
        </ThemeProvider>
      </ClientProvider>
    </html>
  );
}
