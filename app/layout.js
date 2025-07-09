import "./globals.css";

export const metadata = {
  title: "90 Flora",
  description: "Luxury Floral Designs for Weddings & Events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
