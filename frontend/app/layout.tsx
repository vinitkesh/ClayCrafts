import type { Metadata } from "next";
import { Footer } from "@/components/organisms/footer";
import { Navbar } from "@/components/organisms/navbar";
import { CartProvider } from "@/components/providers/cart-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "La. Ta Studio | Handmade Ceramics",
  description:
    "La. Ta Studio is an editorial ceramic storefront featuring handcrafted pottery for modern spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
