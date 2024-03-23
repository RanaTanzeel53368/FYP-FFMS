import { Typography } from '@mui/material';
import React from 'react'
import { Legend, PieChart, Pie,RadialBar, RadialBarChart, ResponsiveContainer, Tooltip, Label } from 'recharts'

const data01 = [
    {
      name: "Jan",
      waterLevel: 400,
      
    },
    {
      name: "Feb",
      waterLevel: 300,
      
    },
    {
      name: "Mar",
      waterLevel: 300,
      
    },
    {
      name: "Apr",
      waterLevel: 200,
      
    },
    {
      name: "May",
      waterLevel: 278,
      
    },
    {
      name: "June",
      waterLevel: 189,
   
    },
  ];
  const data02 = [
    {
      name: "Jan",
      waterLevel: 400,
    },
    {
      name: "Feb",
      waterLevel: 100,
    },
    {
      name: "Mar",
      waterLevel: 200,
    },
    {
      name: "Apr",
      waterLevel: 200,
    },
    {
      name: "May",
      waterLevel: 278,
    },
    {
      name: "June",
      waterLevel: 189,
    },
  ];



const CustomRadialChart = () => {
  return (
    <>
        <div className='custom_radial_chart  bg-component'>
        <Typography variant="h6" className="fw-bold ">
          Water Level
        </Typography>
        <ResponsiveContainer width="100%" minHeight="100%" aspect={1.1}>
            <PieChart width={730} height={300} >
                <Tooltip/>
                {/* <Pie dataKey="waterLevel" data={data01} nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8"  /> */}
                <Pie dataKey="waterLevel" data={data02} nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={90} fill="#185179" label  />
                
                {/* <Legend
                    verticalAlign='left'
                    iconSize={10}
                    iconType='circle'
                    wrapperStyle={{
                        maxHeight:'100px',
                        overflowY:"auto"
                    }}
                /> */}
            </PieChart>
        </ResponsiveContainer>

        </div>
    </>
  )
}

export default CustomRadialChart