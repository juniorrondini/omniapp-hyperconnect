import { Header } from "./Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black p-4">
      <div className="max-w-7xl mx-auto">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};