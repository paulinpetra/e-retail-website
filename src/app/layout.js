import "./globals.css";
import AllProductsFetcher from "@/redux/reduxAllProductsFetcher";
import ReduxProviders from "@/redux/reduxProviders";

export const metadata = {
  title: "TrendMart",
  description: "E-retail App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProviders>
          <AllProductsFetcher /> {/* fetch all products on project mount */}
          {children}
        </ReduxProviders>
      </body>
    </html>
  );
}
