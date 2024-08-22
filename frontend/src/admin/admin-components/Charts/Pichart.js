import React from "react";
import { PieChart, Pie,  Tooltip } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 }
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 }
];

export default function Pichart() {
  return (
    <>
      <div className='mt-[30px] mb-[45px] ml-[50px] w-[550px] h-[500px] bg-slate-200 p-7 rounded-lg box-border '>
        <h1 className='mb-5 font-bold text-2xl'>Pie Chart</h1>
        <PieChart width={700} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx={100}
            cy={200}
            outerRadius={100}
            fill="#8884d8"
            label
          />
          <Pie
            dataKey="value"
            data={data02}
            cx={350}
            cy={200}
            innerRadius={70}
            outerRadius={100}
            fill="#82ca9d"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </>
  );
}
