import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, ShoppingBag, CreditCard, Activity } from "lucide-react";

export const RecentActivities = () => {
  const activities = [
    {
      icon: MessageSquare,
      title: "Nova mensagem",
      description: "João enviou uma mensagem",
      time: "Agora mesmo",
      color: "text-blue-400",
    },
    {
      icon: ShoppingBag,
      title: "Compra realizada",
      description: "Pedido #1234 confirmado",
      time: "Há 5 minutos",
      color: "text-purple-400",
    },
    {
      icon: CreditCard,
      title: "Pagamento",
      description: "Transferência realizada",
      time: "Há 10 minutos",
      color: "text-green-400",
    },
    {
      icon: Activity,
      title: "Atividade física",
      description: "Meta diária atingida",
      time: "Há 30 minutos",
      color: "text-orange-400",
    },
  ];

  return (
    <Card className="glass-panel fade-up [animation-delay:600ms]">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Atividades Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map(({ icon: Icon, title, description, time, color }) => (
            <div key={title} className="flex items-center gap-4">
              <div className={`p-2 rounded-full bg-gray-800`}>
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{title}</h4>
                <p className="text-sm text-gray-400">{description}</p>
              </div>
              <span className="text-sm text-gray-400">{time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};