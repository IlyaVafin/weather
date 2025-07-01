import { ThemeProvider } from '@/features/theme-toggle/model/ThemeProvider';
import type { Metadata } from 'next';
import './globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ClientProvider } from '@/shared/context/ClientProvider';
import { CityProvider } from '@/shared/context/CitySearchContext';

export const metadata: Metadata = {
  title: 'Weather app',
  description: 'The new weather app with all functions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
