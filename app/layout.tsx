import "./globals.css"; 
import "./landing/styles/landing.css"
import "./landing/styles/motion-palettes.css";
import "./landing/styles/motion-classic.css";
import "./landing/styles/motion.css";
import "./landing/styles/header.css"
import "./landing/styles/footer.css"

import Header from "./(landing)/components/Header";
import Footer from "./(landing)/components/Footer";

export const metadata = {
  title: "DVeb Motion™",
  description: "Fitness aplikacija",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <body className="light-vibrant">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
