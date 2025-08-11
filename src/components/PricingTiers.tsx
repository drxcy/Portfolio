import { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

type Package = {
  id: string;
  name: string;
  price: number;
  tier: "Starter" | "Pro" | "Premium";
  description: string;
  features: string[];
};

const PACKAGES: Package[] = [
  {
    id: "starter",
    name: "Starter",
    price: 499,
    tier: "Starter",
    description: "Perfect for a simple online presence with a modern single-page site.",
    features: ["1–3 pages", "Responsive design", "Basic SEO", "Contact form"],
  },
  {
    id: "pro",
    name: "Pro",
    price: 1499,
    tier: "Pro",
    description: "For growing businesses that need a custom multi-page website.",
    features: ["Up to 8 pages", "CMS setup", "Advanced SEO", "Analytics"],
  },
  {
    id: "premium",
    name: "Premium",
    price: 2999,
    tier: "Premium",
    description: "Full-service package with integrations, custom components, and more.",
    features: ["Unlimited pages", "Integrations", "Performance tuning", "On-going support"],
  },
];

const PricingTiers = () => {
  const [query, setQuery] = useState("");
  const [tier, setTier] = useState<string>("All");

  const filtered = useMemo(() => {
    return PACKAGES.filter((p) => {
      const matchTier = tier === "All" || p.tier === tier;
      const matchQuery = `${p.name} ${p.description} ${p.features.join(" ")}`
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchTier && matchQuery;
    });
  }, [query, tier]);

  return (
    <section className="space-y-6">
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold">Service Packages</h2>
          <p className="text-muted-foreground">Compare tiers and choose what fits your project.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <Input
            aria-label="Search packages"
            placeholder="Search features, e.g. SEO, CMS, analytics"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            aria-label="Filter by tier"
            className="h-10 rounded-md border border-input bg-background px-3 text-sm"
            value={tier}
            onChange={(e) => setTier(e.target.value)}
          >
            <option>All</option>
            <option>Starter</option>
            <option>Pro</option>
            <option>Premium</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((pkg) => (
          <Card key={pkg.id} className="card-elevated">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <Badge variant="secondary">{pkg.tier}</Badge>
              </div>
              <CardDescription>{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">${""}{pkg.price}
                <span className="text-sm font-normal text-muted-foreground"> USD</span>
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span aria-hidden className="mt-1 size-1.5 rounded-full bg-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button asChild variant="hero" className="flex-1">
                <Link to="/quote" aria-label={`Request quote for ${pkg.name}`}>Request Quote</Link>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link to="/quote" aria-label={`Ask about add-ons for ${pkg.name}`}>Ask About Add-ons</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingTiers;
