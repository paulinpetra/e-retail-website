import "./globals.css";
import NavBar from "@/components/navBar";
import AllProductsFetcher from "@/redux/reduxProductsFetcher";
import ReduxProviders from "@/redux/reduxProviders";

export const metadata = {
  title: "TrendMart",
  description: "E-retail App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <ReduxProviders>
          <AllProductsFetcher /> {/* fetch all products on project mount */}
          <NavBar />
          {children}
        </ReduxProviders>
      </body>
    </html>
  );
}
