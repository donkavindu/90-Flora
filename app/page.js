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
      <Hero id="#"/>
      <About id="about"/>
      <Feature/>
      <Products/>
      <Services id="services"/>
      <Portfolio id="portfolio"/>
      <ContactDetails/>
      <ContactUs id="contact"/>
      <Footer/>
    </div>
  );
}