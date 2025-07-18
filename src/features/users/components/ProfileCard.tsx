import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/features/auth/hooks/useAuth";


export const ProfileCard = () => {
  const { user, isLoading } = useAuth();

  console.log(user);

  if (isLoading) {
    return (
      <Card className="max-w-md mx-auto p-6">
        <Skeleton className="h-16 w-16 rounded-full mb-4" />
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </Card>
    );
  }

  

  return (
    <Card className="max-w-md mx-auto p-6">
      <CardContent className="flex flex-col items-center space-y-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={""} />
          <AvatarFallback>
            {user?.firstname.charAt(0)}
            {user?.lastname.charAt(0)}
          </AvatarFallback>
        </Avatar>

        <div className="text-center">
          <h2 className="text-xl font-semibold">
            {user?.firstname} {user?.lastname}
          </h2>
          <p className="text-muted-foreground">@{user?.firstname}</p>
        </div>

        <div className="text-sm text-muted-foreground">{user?.email}</div>

        <Badge variant="outline" className="capitalize">
          {user?.role}
        </Badge>

        <Button className="mt-4">Edit Profile</Button>
      </CardContent>
    </Card>
  );
};
