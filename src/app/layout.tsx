import './globals.css';
import { ThemeProvider } from './providers/themeProvider';

export const metadata = {
  title: 'Agenda de Compromissos',
  description: 'App com Firebase e Dark Mode',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
