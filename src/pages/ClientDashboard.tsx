import SEO from "../components/SEO";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import Header from "../components/Header";

const phases = [
  { key: "design", label: "Design", value: 25, notes: "Wireframes, style, content structure" },
  { key: "dev", label: "Development", value: 60, notes: "Components, CMS, integrations" },
  { key: "test", label: "Testing", value: 80, notes: "QA, performance, accessibility" },
  { key: "delivery", label: "Delivery", value: 95, notes: "Handover, training, launch" },
];

const ClientDashboard = () => {
  return (
    <main className="pt-32">
      <Header />
      <div className="container mx-auto px-6 py-10">
        <SEO
          title="Client Dashboard | Track Project Status"
          description="View your project's phases, progress, and updates in real time."
          canonical="/client"
        />
        <h1 className="text-3xl font-bold mb-6">Project Dashboard</h1>
        <Tabs defaultValue="design" className="space-y-6">
          <TabsList>
            {phases.map((p) => (
              <TabsTrigger key={p.key} value={p.key}>{p.label}</TabsTrigger>
            ))}
          </TabsList>
          {phases.map((p) => (
            <TabsContent key={p.key} value={p.key}>
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle>{p.label} Phase</CardTitle>
                  <CardDescription>{p.notes}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Progress value={p.value} />
                  <p className="text-sm text-muted-foreground">{p.value}% complete</p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  );
};

export default ClientDashboard;
