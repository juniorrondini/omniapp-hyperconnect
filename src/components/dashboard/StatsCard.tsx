import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, ShoppingCart, CreditCard } from "lucide-react";

export const StatsCard = () => {
  const stats = [
    {
      title: "Atividades",
      value: "24",
      icon: Activity,
      color: "text-blue-400",
      description: "Atividades hoje",
    },
    {
      title: "Conexões",
      value: "120",
      icon: Users,
      color: "text-green-400",
      description: "Usuários ativos",
    },
    {
      title: "Compras",
      value: "R$ 2.400",
      icon: ShoppingCart,
      color: "text-purple-400",
      description: "Este mês",
    },
    {
      title: "Pagamentos",
      value: "8",
      icon: CreditCard,
      color: "text-orange-400",
      description: "Transações pendentes",
    },
  ];

  return (
    <Card className="glass-panel fade-up [animation-delay:400ms]">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Estatísticas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ title, value, icon: Icon, color, description }) => (
            <div key={title} className="space-y-2">
              <div className="flex items-center gap-2">
                <Icon className={`h-5 w-5 ${color}`} />
                <span className="font-medium">{title}</span>
              </div>
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-sm text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};