import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, Legend,LabelList  } from "recharts";

const COLORS = { low: "#F44336", medium: "#FFC107", high: "#4CAF50" };

const getColor = (quantity) => {
  if (quantity <= 2000) return COLORS.low;
  if (quantity >= 2000 && quantity <= 50000) return COLORS.medium;
  return COLORS.high;
};

export default function Dashboard({ produtos }) {

  const data = [
    ...produtos,
    { descricao: "Placeholder Low", qtde: 1 },
    { descricao: "Placeholder Medium", qtde: 500 },
    { descricao: "Placeholder High", qtde: 1500 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">

      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Distribuição de Quantidade </h2>
        <ResponsiveContainer width="100%" height={500}>
          <PieChart>
            <Pie
              data={data}
              dataKey="qtde"
              nameKey="descricao"
              innerRadius={100}
              outerRadius={220}
              fill="#8884d8"
              paddingAngle={2}
            >
              {data.map((item, index) => (
                <Cell key={index} fill={getColor(item.qtde)} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-col items-start mt-6 space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8" style={{ backgroundColor: COLORS.low }}></div>
            <span className="text-lg">Quantidade 0</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8" style={{ backgroundColor: COLORS.medium }}></div>
            <span className="text-lg">Quantidade entre 10 e 1000</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8" style={{ backgroundColor: COLORS.high }}></div>
            <span className="text-lg">Quantidade acima de 1000</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6">Quantidade por Produto</h2>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={produtos}>
           
            <YAxis domain={[0, 'dataMax + 5']} tick={{ fontSize: 14 }} />
            <Tooltip
              formatter={(value, name, props) => [`${value}  Nome: ${props.payload.descricao}`, "Quantidade"]}
            />
            <Bar dataKey="qtde" fill="#8884d8">
              <LabelList dataKey="qtde" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
