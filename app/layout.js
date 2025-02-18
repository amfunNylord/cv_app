// app/layout.js
import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Мое CV',
  description: 'Мое резюме в виде веб-приложения',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
