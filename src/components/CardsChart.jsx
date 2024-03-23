import { Typography } from "@mui/material";
import React from "react";
import { ResponsiveContainer , XAxis, YAxis, Tooltip,RadialBarChart, RadialBar, LineChart, Line } from "recharts";

const data01 = [
  {
    name: "Jan",
    value: 400,
  },
  {
    name: "Feb",
    value: 300,
  },
  {
    name: "Mar",
    value: 300,
  },
  {
    name: "Apr",
    value: 200,
  },
  {
    name: "May",
    value: 278,
  },
  {
    name: "June",
    value: 189,
  },
];
const data02 = [
  {
    name: "Jan",
    value: 400,
  },
  {
    name: "Feb",
    value: 100,
  },
  {
    name: "Mar",
    value: 200,
  },
  {
    name: "Apr",
    value: 200,
  },
  {
    name: "May",
    value: 278,
  },
  {
    name: "June",
    value: 189,
  },
];
const data03 = [
  {
    name: "Jan",
    phLevel: 100,
  },
  {
    name: "Feb",
    phLevel: 100,
  },
  {
    name: "Mar",
    phLevel: 100,
  },
  {
    name: "Apr",
    phLevel: 100,
  },
  {
    name: "May",
    phLevel: 278,
  },
  {
    name: "June",
    phLevel: 189,
  },
];

const CardsChart = () => {
  return (
    <>
    <div className="line_chart bg-component p-3">
    <Typography variant="h6" className="text-start mb-2 fw-bold ">
          Analytics
        </Typography>
    <ResponsiveContainer width="80%" aspect={2}>
      <LineChart data={data01} width={400} height={200} >
        <Tooltip
        contentStyle={{
          backgroundColor:"#f8f8f8",
          color:"black",
          border:"none",
          padding:"2px"
        }}
         />
         
        <Line type="monotone" dataKey="value" fill="#8883d8"/>
        <Line type="monotone" dataKey="value" stroke="#82ca9d" data={data02} />
        {/* <Line type="monotone" dataKey="value" stroke="#82ca9d" data={data03} /> */}
        <XAxis dataKey="name"/>
        <YAxis />
      </LineChart>
    </ResponsiveContainer>
    </div>
    
    
    </>

  );
};

export default CardsChart;
