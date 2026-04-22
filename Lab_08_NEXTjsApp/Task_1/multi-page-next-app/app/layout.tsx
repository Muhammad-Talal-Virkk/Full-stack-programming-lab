import "./globals.css";
import Header from "./components/Headers";
import Footer from "./components/Footers";

export const metadata = {
  title: "My Next.js App",
  description: "Multi-page app with TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main style={{ padding: "20px" }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}