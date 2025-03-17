
import localFont from "next/font/local";
import "./globals.css";
import { DataProvider } from "./context/dataContext";
import HomepageHeading from "./HomepageHeading";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Best watch collections",
  description: "Discover the latest collection of luxury and everyday watches at Watch Mart. Shop top brands, enjoy exclusive offers, and elevate your style.",
  icons: {
    icon: "watch.svg",
  },
};
export default function RootLayout({ children }) {
  
  return (
    <DataProvider>
      <html lang="en">
      
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
          
          
        </body>
      </html>
    </DataProvider>
  );
}
