import './globals.css';
import Navbar from './ui/NavBar';
import Footer from './ui/Footer';

export const metadata = {
  title: 'Portfolio',
  description: 'Developer & Designer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white mx-auto max-w-screen-xl">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
