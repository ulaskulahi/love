import "./globals.css";

export const metadata = {
  title: "Love",
  description: "A Love Story",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
