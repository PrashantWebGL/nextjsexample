import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  weight:'300',
  subsets: ["latin"] });

export const metadata = {
  title: "Next+Mongo-CRUD",
  description: "Next Js getting to know",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
