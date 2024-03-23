import React from 'react'
import NavigationDrawer from './navigationDrawer'
import TankCards from "../components/TankCards";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import WaterIcon from '@mui/icons-material/Water';
import CustomRadialChart from "../components/CustomRadialChart";
import Typography from '@mui/material/Typography';
import CardsChart from "../components/CardsChart";
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import tankImage from "../assets/tank.png"



const tank1 = [
  {
    title:"PH",
    level:"14/ Alkaline",
    sensor:"PH Sensor",
    icon: <WaterDropIcon/>
  },
  {
    title:"TDS",
    level:"250ppm / Low",
    sensor:"TDS Sensor",
    icon:<ThermostatAutoIcon/>
  },
  {
    title:"TEMP",  
    level:"40°C/ Cold",
    sensor:"TEMP Sensor",
    icon:<DeviceThermostatIcon/>
  },

]

const Tank1 = () => {
  return (
    <>
          <NavigationDrawer>
        <div className="dashboard text-center ">
        <div className="tank-cards ">
       <div className='top-section d-flex align-items-center gap-2 p-2 mb-3'>
       <div className=''>
       <img src={tankImage} alt="Tank 1" style={{ width: 35, height: 35 }}/>
       </div>
          
        <Typography variant="h4"  className="text-start  ">
          TANK<sub>1</sub>
        </Typography>
       </div>
        <div className="container">
       <div className="row d-flex align-items-center justify-content-center">
          {tank1.map((item, index) => (
            <div className="col-md-3 " key={index}>
                <TankCards
                title={item.title}
                phlevel={item.level}
                sensor={item.sensor}
                icon={item.icon}
                />
          </div>
          ))}
       </div>
        </div>
        </div>

 
        <div className="tanks-charts mt-5 ">
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
  )
}

export default Tank1