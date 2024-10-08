import "./global.css";
import { Suspense } from "react";
import Loading from './loading'
import Navbar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
export const metadata = {
  title: "srinivas k Portfolio",
  description: "Generated by Portfolio"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main>
          <Navbar />
          <div className="flex">
            <LeftBar />
            <Suspense fallback={<Loading/>}>
              {children}
            </Suspense>
            <RightBar />
          </div>
        </main>
      </body>
    </html>
  );
}
