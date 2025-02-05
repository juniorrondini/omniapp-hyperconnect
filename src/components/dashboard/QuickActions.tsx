import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, ShoppingBag, Activity, Home } from "lucide-react";

export const QuickActions = () => {
  const actions = [
    { icon: MessageSquare, label: "Chat", color: "text-blue-400" },
    { icon: ShoppingBag, label: "Shop", color: "text-purple-400" },
    { icon: Activity, label: "Health", color: "text-green-400" },
    { icon: Home, label: "Home", color: "text-orange-400" },
  ];

  return (
    <Card className="glass-panel fade-up [animation-delay:200ms]">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {actions.map(({ icon: Icon, label, color }) => (
            <Button
              key={label}
              variant="ghost"
              className="flex flex-col items-center gap-2 h-auto py-4"
            >
              <Icon className={`h-6 w-6 ${color}`} />
              <span className="text-sm">{label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};