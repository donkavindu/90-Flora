import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
export const metadata = {
  title: "90 Flora",
  description: "Luxury Floral Designs for Weddings & Events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
