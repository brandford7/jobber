import { useMyApplications } from "@/features/applications/hooks/use-my-applications";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { useSearchParams } from "react-router";
import { Application } from "../schema/application.schema";
import { Pagination } from "@/components/Pagination";

export const ApplicationsTab = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page") || 1);
  const search = searchParams.get("search") || "";
  const location = searchParams.get("location") || "";

  const { data, isLoading } = useMyApplications({
    page,
    search,
    location,
    limit: 10,
  });

 const handlePageChange = (newPage: number) => {
   const updatedParams = new URLSearchParams(searchParams);
   updatedParams.set("page", newPage.toString());
   setSearchParams(updatedParams);
 };


  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-24 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  if (!data) {
    return (
      <p className="text-center text-muted-foreground">No applications yet.</p>
    );
  }

  return (
    <div className="space-y-4">
      {data.data.map((application: Application) => (
        <Card key={application.id}>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              {/*<div>
                <h3 className="text-lg font-semibold">
                  {application.job.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {application.job.company} • {application.job.location}
                </p>
              </div>*/}
              <Badge variant="secondary">Applied</Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Applied on {new Date(application.appliedAt).toLocaleDateString()}
            </p>
          </CardContent>
        </Card>
      ))}
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(data?.meta.total / data?.meta.limit)} // assuming your API returns `total`
        onPageChange={handlePageChange}
      />
    </div>
  );
};
