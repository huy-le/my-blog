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
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-gray-200 dark:border-gray-800">
            <nav className="max-w-4xl mx-auto px-4 py-6">
              <div className="flex justify-between items-center">
                <a href="/" className="text-2xl font-bold hover:text-blue-600 transition-colors">
                  My Blog
                </a>
                <div className="flex gap-6">
                  <a href="/" className="hover:text-blue-600 transition-colors">
                    Home
                  </a>
                  <a href="/blog" className="hover:text-blue-600 transition-colors">
                    Blog
                  </a>
                </div>
              </div>
            </nav>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="border-t border-gray-200 dark:border-gray-800 mt-12">
            <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
              <p>&copy; {new Date().getFullYear()} My Personal Blog. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
