import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Providers } from "@/redux/providers";
import MainLayout from "@/layouts/MainLayout";

export const metadata = {
  title: "ElectroShop",
  description: "E-commerce website for buying electronics product online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col light">
        <Providers>
          <MainLayout>
            <Header />
            <main className="min-h-screen dark:bg-gray-900">{children}</main>
            <Footer />
            <ToastContainer position="top-center" autoClose={1500} />
          </MainLayout>
        </Providers>
      </body>
    </html>
  );
}
