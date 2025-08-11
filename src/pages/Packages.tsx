import SEO from "../components/SEO";
import PricingTiers from "../components/PricingTiers";
import Header from "../components/Header";

const Packages = () => {
  return (
    <main className="pt-32">
      <Header />
      <div className="container mx-auto px-6 py-10">
        <SEO
          title="Service Packages | Website Services Platform"
          description="Compare web design packages, features, and add-ons. Filter and search to find the best fit."
          canonical="/packages"
        />
        <h1 className="sr-only">Service Packages</h1>
        <PricingTiers />
      </div>
    </main>
  );
};

export default Packages;
