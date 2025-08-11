import heroImg from "../assets/hero-illustration.jpg";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-primary shadow-glow">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/0" aria-hidden="true" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-16">
        <div>
          <p className="mb-2 text-sm font-semibold tracking-wide text-foreground/70">Built for creating most inovative and modern software and websites</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-primary-foreground">
            Website Services For Full Stack Devlopments
          </h1>
          <p className="mt-4 text-primary-foreground/90 text-lg max-w-prose">
            Compare packages, request custom design, track progress, and collaborate with your developer — all in one modern, responsive websites and softwares.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg" aria-label="Browse service packages">
              <Link to="/packages">Browse Packages</Link>
            </Button>
            <Button asChild variant="elevated" size="lg" aria-label="Request a custom quote">
              <Link to="/quote">Request Quote</Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroImg}
            alt="Dashboard with pricing tiers, project progress, and chat to manage website services"
            className="w-full h-auto rounded-xl shadow-elegant"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
