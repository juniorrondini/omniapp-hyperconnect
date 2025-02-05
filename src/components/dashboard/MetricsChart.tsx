import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", usuarios: 400, transacoes: 240 },
  { name: "Fev", usuarios: 300, transacoes: 139 },
  { name: "Mar", usuarios: 200, transacoes: 980 },
  { name: "Abr", usuarios: 278, transacoes: 390 },
  { name: "Mai", usuarios: 189, transacoes: 480 },
  { name: "Jun", usuarios: 239, transacoes: 380 },
  { name: "Jul", usuarios: 349, transacoes: 430 },
];

export const MetricsChart = () => {
  return (
    <Card className="glass-panel fade-up [animation-delay:800ms]">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Métricas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-600" />
              <XAxis dataKey="name" className="text-gray-400" />
              <YAxis className="text-gray-400" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="usuarios"
                stroke="#60a5fa"
                strokeWidth={2}
                dot={false}
                name="Usuários"
              />
              <Line
                type="monotone"
                dataKey="transacoes"
                stroke="#a78bfa"
                strokeWidth={2}
                dot={false}
                name="Transações"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};