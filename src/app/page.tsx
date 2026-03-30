import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EventDetails from "@/components/EventDetails";
import Rules from "@/components/Rules";
import Prizes from "@/components/Prizes";
import Organizers from "@/components/Organizers";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <EventDetails />
        <div className="section-divider" />
        <Rules />
        <div className="section-divider" />
        <Prizes />
        <div className="section-divider" />
        <Organizers />
        <div className="section-divider" />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
