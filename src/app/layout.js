import "./globals.css";

export const metadata = {
  title: "TrendMart",
  description: "E-retail App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
