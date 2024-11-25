import "./globals.css";
import Navbar from "./_components/Navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="overflow-x-hidden">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
