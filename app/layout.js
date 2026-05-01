import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';

export const metadata = {
  title: 'azami — Experience Designer / UX',
  description: 'UX Designer / Researcher based in Tokyo. 体験の価値はこれから上がる。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Cursor />
        <Nav />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
