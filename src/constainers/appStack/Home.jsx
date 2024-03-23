import React from "react";
import NavigationDrawer from "../../components/navigationDrawer/index";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Card from "@mui/material/Card";

import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import CardsChart from "../../components/CardsChart";
import ProductsChart from "../../components/ProductsChart";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import TankCards from "../../components/TankCards";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import WaterIcon from '@mui/icons-material/Water';
import CustomRadialChart from "../../components/CustomRadialChart";
import Typography from '@mui/material/Typography';
import tank from "../../assets/tank.png"


const tanks = [
  {
    title:"PH",
    level:"14/ Alkaline",
    sensor:"PH Sensor",
    icon: <WaterDropIcon/>,
    color:"red"
  },
  {
    title:"TDS",
    level:" 250ppm/Low",
    sensor:"TDS Sensor",
    icon:<ThermostatAutoIcon/>,
    color:"green"
  },
  {
    title:"TEMP",  
    level:"25°C/ Normal",
    sensor:"TEMP Sensor",
    icon:<DeviceThermostatIcon/>,
    color:"blue"
  },
  {
    title:"TOTAL Fishes",
    level:4000,
    sensor:"Mortality",
    icon:<img src={tank} alt="Dashboard" style={{ width: 18, height: 18 }}/>,
    isShow:true
  },

]





const Home = () => {
  return ( 
    <>
      <NavigationDrawer>
        <div className="dashboard text-center ">
        <div className="tank-cards ">
        <Typography variant="h6" className="text-start pt-3 m-3 fw-bold ">
          All Tanks
        </Typography>
        <div className="container">
       <div className="row d-flex align-items-center justify-content-center">
          {tanks.map((item, index) => (
            <div className="col-md-3" key={index}>
                <TankCards
                title={item.title}
                phlevel={item.level}
                sensor={item.sensor}
                icon={item.icon}
                color={item.color}
                isShow={item.isShow}
                />
          </div>
          ))}
       </div>
        </div>
        </div>


        <div className="tanks-charts mt-4 ">
        
          <div className="container">
            <div className="row">
                <div className="col-md-8 ">
                
                  <CardsChart/>
                </div>
                <div className="col-md-4 ">
                  <CustomRadialChart/>
                </div>
            </div>
          </div>
        </div>
        
        </div>
      </NavigationDrawer>
    </>
  );
};

export default Home;
