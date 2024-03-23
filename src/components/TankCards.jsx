import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import edit from "../assets/pen.png"
import checked from "../assets/checked.png"





export default function TankCards({title, phlevel,sensor, icon, color,isShow}) {

  const [isShowInput,setIsShowInput]=React.useState(false)
  const [value,setValue]=React.useState(phlevel)
  const [textValue,setTextValue]=React.useState("")

  const handleOnClickEdit=()=>{
    setIsShowInput(!isShowInput)
  }

  const handleClickOk=()=>{
    if (textValue === "") {
      alert("Please fill no of dead fishes")
    }else{
      if (isShow) {
        let newText=value-textValue
        setValue(newText)
        setTextValue("")
        setIsShowInput(!isShowInput)
      }
    }
  }

  return (
    <Card sx={{ minWidth: 100 }} className='main-card bg-component '>
      <CardContent>
        <div className='ph-cards text-start'>
          <div className='first d_flex'>
        <Typography  color="text.secondary" className='fw-bold' gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} className='icons'  gutterBottom>
           {icon}
        </Typography>
          </div>
          <div className='ph-level text-start mt-2'>
           <Typography variant='h5' className='alert' color={color}>
             {/* 14/ Alkaline */}
             {isShow == true ? value :phlevel}
           </Typography>
        </div>
        <div className='sensors-name text-start mt-2'>
              {isShow === true ?  (
                <input type='text' placeholder={sensor}  className={`w-75 ${isShowInput ? "" : "disabled"}`}
                disabled={!isShowInput}
                onChange={(e)=>setTextValue(e.target.value)}
              />
              ) :(
                <Typography>{sensor}</Typography>
              )}
           {isShow === true &&
           <Typography sx={{ fontSize: 14 }} className='icons'  gutterBottom>
           {isShowInput == true ?
           <img src={checked} alt="edit icon" style={{ width: 24, height: 24 }} onClick={handleClickOk}/>
           :
           <img src={edit} alt="edit icon" style={{ width: 24, height: 24 }} onClick={handleOnClickEdit}/>
           
           }
        </Typography>
      }
        </div>
       
        </div>
      </CardContent>

    </Card>
  );
}
