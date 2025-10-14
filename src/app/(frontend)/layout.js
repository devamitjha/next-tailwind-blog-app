
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";


export default function SiteLayout({ children }) {
  return (
    <div className="h-full w-full font-be-vietnam-pro">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
