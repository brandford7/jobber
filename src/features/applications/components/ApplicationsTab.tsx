import { useApplications } from "@/features/applications/hooks/use-applications";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

// to be replaced
interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
}

const data = [
  {
    id: "a8d7f2ee-2f73-4b29-85b9-123456789abc",
    appliedAt: "2025-06-24T10:30:00.000Z",
    job: {
      id: "d46da782-e2b9-441d-bf14-c07cf6c9cd5c",
      title: "Frontend Developer",
      company: "Techify Inc.",
      location: "Remote",
      jobType: "contract",
    },
  },
  {
    id: "bd37e4c9-8e89-4011-b10a-987654321def",
    appliedAt: "2025-06-22T15:45:00.000Z",
    job: {
      id: "f58aa236-2e6e-4f74-b0b3-d2b254c31411",
      title: "Backend Engineer",
      company: "CloudNest",
      location: "New York, NY",
      jobType: "full-time",
    },
  },
  {
    id: "fa13cbe0-bfcd-4f36-a579-23456789abcd",
    appliedAt: "2025-06-20T08:10:00.000Z",
    job: {
      id: "a72cf47b-19a2-40bb-89f6-d9077fe7e821",
      title: "DevOps Specialist",
      company: "DeployOps Ltd.",
      location: "Remote",
      jobType: "full-time",
    },
  },
];

export const ApplicationsTab = () => {
  const { isLoading } = useApplications();

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-24 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <p className="text-center text-muted-foreground">No applications yet.</p>
    );
  }

  return (
    <div className="space-y-4">
      {data.map((application: any) => (
        <Card key={application.id}>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">
                  {application.job.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {application.job.company} • {application.job.location}
                </p>
              </div>
              <Badge variant="secondary">Applied</Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Applied on {new Date(application.appliedAt).toLocaleDateString()}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
