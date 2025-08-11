import SEO from "../components/SEO";
import QuoteForm from "../components/QuoteForm";
import Header from "../components/Header";

const Quote = () => {
  return (
    <main className="pt-32">
      <Header />
      <div className="container mx-auto px-6 py-10">
        <SEO
          title="Request a Custom Quote | Website Services Platform"
          description="Tell us about your project goals, budget, and timeline to receive a tailored proposal."
          canonical="/quote"
        />
        <h1 className="text-3xl font-bold mb-6">Request a Custom Quote</h1>
        <QuoteForm />
      </div>
    </main>
  );
};

export default Quote;
