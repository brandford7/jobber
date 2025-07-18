import { ApplicationsTab } from "@/features/applications/components/ApplicationsTab";
import { ProfileCard } from "@/features/users/components/ProfileCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProfilePage() {
  return (
    <div className=" max-w-4xl w-ful mx-auto mt-8 px-4">
      <ProfileCard />
      <Tabs defaultValue="applications" className="mt-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="applications">
          <ApplicationsTab />
        </TabsContent>
        <TabsContent value="settings">
          <p className="text-muted-foreground">Coming soon...</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
