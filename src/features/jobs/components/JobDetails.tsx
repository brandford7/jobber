import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, MapPin, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Job } from "../schema/job.schema";

interface JobDetailsCardProps {
  job: Job;
}

export const JobDetailsCard = ({ job }: JobDetailsCardProps) => {
  return (
    <Card className="w-full max-w-4xl mx-auto p-6">
      <CardContent className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-primary">{job.title}</h1>
            <p className="text-muted-foreground">{job.company}</p>
          </div>
          <Badge className="capitalize">{job.jobType}</Badge>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin size={14} /> {job.location}
          </span>
          {job.salary && (
            <span className="flex items-center gap-1">
              <DollarSign size={14} /> ${job.salary}
            </span>
          )}
            <span className="flex items-center gap-1">
            <Clock size={14} />
            {formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}
          </span>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-1">Job Description</h2>
          <p className="text-sm leading-relaxed">{job.description}</p>
        </div>

        {/*   {job.experienceLevel && (
          <div>
            <h2 className="text-lg font-semibold mb-1">Experience Level</h2>
            <p className="text-sm capitalize">{job.experienceLevel}</p>
          </div>
        )} */}
      </CardContent>
    </Card>
  );
};
