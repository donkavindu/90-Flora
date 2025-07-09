import About from "@/components/About";
import ContactDetails from "@/components/ContactDetails";
import ContactUs from "@/components/ContactUs";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Products from "@/components/Products";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Feature/>
      <Products/>
      <Services/>
      <Portfolio/>
      <ContactDetails/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
