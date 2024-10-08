import CTA from "./components/ui/CTA";
import FAQs from "./components/ui/FAQs";
import Features from "./components/ui/Features";
import FooterCTA from "./components/ui/FooterCTA";
import Hero from "./components/ui/Hero";
import LogoGrid from "./components/ui/LogoGrid";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import "./App.css";

function App() {
  return (
    <>
      {/* <Head>
        <meta name="robots" content="index" />
      </Head> */}
      <Navbar />
      <Hero />
      <LogoGrid />
      <CTA />
      <Features />
      <FAQs />
      <FooterCTA />
      <Footer />
    </>
  );
}

export default App;
