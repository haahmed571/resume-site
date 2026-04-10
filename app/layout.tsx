import "./globals.css";
import { Header, Background, Footer } from "@/components/shared";

export const metadata = {
  title: "Hassan Ahmed",
  description: "AWS Network Deployment Technician Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-white">
        <Background />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
