import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { WelcomeCard } from "@/components/dashboard/WelcomeCard";
import { QuickActions } from "@/components/dashboard/QuickActions";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <WelcomeCard />
        <QuickActions />
      </div>
    </DashboardLayout>
  );
};

export default Index;