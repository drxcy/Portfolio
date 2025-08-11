import SEO from "../components/SEO";
import Hero from "../components/Hero";
import PricingTiers from "../components/PricingTiers";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import ServicesSection from "../components/Service";
import WhyChooseUs from "../components/Why-Choose-us";
import TechStack from "../components/TechStack";
import { HashLink } from 'react-router-hash-link';

const Index = () => {
  return (
    <main className="pt-32">
      <SEO
        title="Website Services Management Platform"
        description="Browse packages, request custom quotes, track project status, and collaborate with your developer."
        canonical="/"
      />

      <Header />

      <section className="container mx-auto px-6">
        <Hero />
      </section >
      <section id="services" className="bg-gray-100 py-16 container mx-auto px-6">
        <ServicesSection/>
      </section>
      <section className="container mx-auto px-6 py-16" id="why-us">
        <WhyChooseUs />
        </section>
        <section className="container mx-auto px-6 py-16" id="tech">
    <TechStack />
        </section>

      <section className="container mx-auto px-6 py-16">
        <PricingTiers />
        <div className="mt-8 text-center">
          <Button asChild variant="elevated" size="lg">
            <Link to="/packages">See All Packages</Link>
          </Button>
        </div>
      </section>

      <footer className="py-8 border-t">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} WebServices Platform</p>
          <nav className="flex gap-4 text-sm" aria-label="Footer">
            <Link to="/packages" className="hover:underline">Packages</Link>
            <Link to="/quote" className="hover:underline">Quote</Link>
            <a href="#top" className="hover:underline">Back to top</a>
          </nav>
        </div>
      </footer>
    </main>
  );
};

export default Index;
