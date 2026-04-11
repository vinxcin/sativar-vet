import NavBar from "./NavBar";
import Hero from "./Hero";
import Sec from "./Sec";
import AboutVet from "./AboutVet";
import Services from "./Services";
import Depoimentos from "./Depoimentos";
import Footer from "./Footer";


export default function LandingPage() {

  return (

    <main className=" ">
      <NavBar />
      <Hero />
      <Sec />
      <AboutVet/>
      <Services/>
      <Depoimentos/>
      <Footer/>
    </main>
  );
}
