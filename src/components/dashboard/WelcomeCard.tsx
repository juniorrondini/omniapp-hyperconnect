import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WelcomeCard = () => {
  return (
    <Card className="glass-panel fade-up">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Welcome Back</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400">
          Your personal digital hub awaits. What would you like to do today?
        </p>
      </CardContent>
    </Card>
  );
};