// app/layout.tsx
import "./globals.css"; // globalni CSS, Tailwind ili tvoje varijable
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
      <body className="bg-[var(--background)] text-[var(--text-primary)]">
        {/* Header - uvek na vrhu */}
        <Header />

        {/* Glavni sadržaj */}
        <main>{children}</main>

        {/* Footer - uvek na dnu */}
        <Footer />
      </body>
    </html>
  );
}
