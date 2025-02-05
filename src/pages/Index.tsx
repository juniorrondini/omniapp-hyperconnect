import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { WelcomeCard } from "@/components/dashboard/WelcomeCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentActivities } from "@/components/dashboard/RecentActivities";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <WelcomeCard />
        <QuickActions />
        <StatsCard />
        <RecentActivities />
      </div>
    </DashboardLayout>
  );
};

export default Index;