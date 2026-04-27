import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Learning Path Finder | Penasihat Kurikulum Data Science",
  description:
    "Temukan jalur belajar Data Science yang dipersonalisasi dengan panduan AI. Dapatkan peta jalan melalui kurikulum 152 SKS dengan 3 jalur konsentrasi.",
  keywords: [
    "data science",
    "jalur belajar",
    "penasihat AI",
    "kurikulum",
    "machine learning",
    "business intelligence",
    "data engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body className="antialiased bg-grid min-h-screen">
        {children}
      </body>
    </html>
  );
}
