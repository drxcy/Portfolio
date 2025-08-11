import SEO from "../components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import Header from "../components/Header";

const AdminDashboard = () => {
  const requests = [
    { id: "q1", name: "Jane Doe", budget: "$1k–$3k", status: "New" },
    { id: "q2", name: "Acme Inc.", budget: "$6k+", status: "New" },
  ];
  const projects = [
    { id: "p1", client: "Bright Studio", phase: "Development" },
    { id: "p2", client: "North Labs", phase: "Testing" },
  ];

  return (
    <main className="pt-32">
      <Header />
      <div className="container mx-auto px-6 py-10">
        <SEO
          title="Admin Dashboard | Manage Clients & Projects"
          description="Review new quotes, manage projects, and update statuses."
          canonical="/admin"
        />
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>New Quote Requests</CardTitle>
              <CardDescription>Latest submissions from clients</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requests.map((r) => (
                  <li key={r.id} className="flex items-center justify-between">
                    <span className="font-medium">{r.name}</span>
                    <span className="text-sm text-muted-foreground">{r.budget} • {r.status}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>Active Projects</CardTitle>
              <CardDescription>Track current work</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {projects.map((p) => (
                  <li key={p.id} className="flex items-center justify-between">
                    <span className="font-medium">{p.client}</span>
                    <span className="text-sm text-muted-foreground">{p.phase}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;
