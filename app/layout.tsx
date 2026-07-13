import "./globals.css";

export const metadata = {
  title: "R.H. Jewellers LLP",
  description: "Timeless Gold. Trusted Craftsmanship.",
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