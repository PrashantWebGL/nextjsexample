import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const inter = Inter({
  weight: '300',
  subsets: ["latin"]
});

export const metadata = {
  title: "Next+Mongo-CRUD",
  description: "Next Js getting to know",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="fullpage" >
        <div className="parentdiv">

          <div className="titlebar">
            <Header />
          </div>

          <div className="mainbody">
            <div className="childrenstyle">
              {children}
            </div>
          </div>

        </div>
      </body>
    </html>
  );
}
