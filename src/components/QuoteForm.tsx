import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useToast } from "../hooks/use-toast";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  budget: z.string().min(1, "Please select a budget range"),
  details: z.string().min(10, "Tell us a bit more about your project")
});

type FormData = z.infer<typeof schema>;

const QuoteForm = () => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // For now, just show a success toast. We can connect Supabase + email next.
    toast({ title: "Quote requested", description: "We received your request and will reach out shortly." });
    reset();
  };

  return (
    <Card className="card-elevated">
      <CardHeader>
        <CardTitle>Request a Custom Quote</CardTitle>
        <CardDescription>Describe your project and we'll follow up with a tailored proposal.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm">Name</label>
              <Input aria-invalid={!!errors.name} {...register("name")} placeholder="Jane Doe" />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div>
              <label className="mb-1 block text-sm">Email</label>
              <Input aria-invalid={!!errors.email} {...register("email")} placeholder="jane@company.com" />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm">Company (optional)</label>
              <Input {...register("company")} placeholder="Acme Inc." />
            </div>
            <div>
              <label className="mb-1 block text-sm">Budget</label>
              <select
                aria-invalid={!!errors.budget}
                {...register("budget")}
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                defaultValue=""
              >
                <option value="" disabled>Select a range</option>
                <option>Under $1,000</option>
                <option>$1,000 – $3,000</option>
                <option>$3,000 – $6,000</option>
                <option>$6,000+</option>
              </select>
              {errors.budget && <p className="mt-1 text-xs text-destructive">{errors.budget.message}</p>}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm">Project details</label>
            <Textarea aria-invalid={!!errors.details} {...register("details")} placeholder="Tell us about goals, pages, features, deadlines..." rows={6} />
            {errors.details && <p className="mt-1 text-xs text-destructive">{errors.details.message}</p>}
          </div>

          <div className="flex justify-end">
            <Button type="submit" variant="hero" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Send Request"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default QuoteForm;
