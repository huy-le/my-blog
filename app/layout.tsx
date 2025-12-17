import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Personal Blog",
  description: "A personal blog about my journey, thoughts, and experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950">
          <header className="py-12 px-6">
            <nav className="max-w-2xl mx-auto">
              <div className="flex justify-between items-center">
                <a href="/" className="text-xl font-display font-semibold tracking-tight hover:opacity-60 transition-opacity">
                  Huy Le
                </a>
                <div className="flex gap-8 text-sm">
                  <a href="/" className="hover:opacity-60 transition-opacity">
                    Home
                  </a>
                  <a href="/blog" className="hover:opacity-60 transition-opacity">
                    Writing
                  </a>
                </div>
              </div>
            </nav>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="py-16 px-6">
            <div className="max-w-2xl mx-auto text-center text-sm text-zinc-400">
              <p>© {new Date().getFullYear()}</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
