import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { /*Briefcase,*/ MapPin, DollarSign,  Badge, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Link} from "react-router";
import { Job } from "../schema/job.schema";

interface JobCardProps {
  job: Job;
  onClick?: () => void;
}

export const JobCard = ({ job }: JobCardProps) => {
 
  

  return (
    <Link to={`/jobs/${job.id}`}>
      {" "}
      <Card className="w-full hover:shadow-md transition-shadow cursor-pointer">
        <CardContent className="p-4 space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold text-primary">
                {job.title}
              </h2>
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
              {formatDistanceToNow(new Date(job.createdAt), {
                addSuffix: true,
              })}
            </span>
          </div>

          <p className="line-clamp-2 text-sm">{job.description}</p>

          <div className="pt-2">
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
