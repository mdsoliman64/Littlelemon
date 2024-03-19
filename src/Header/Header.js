import React,{useEffect, useState} from 'react'
import {Grid,Paper,Box, Typography,Link} from "@mui/material"
import Logo from "../Assets/logo.png"
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import "../Header/Header.css"
import NoFoodIcon from '@mui/icons-material/NoFood';
import Menu from '../Header/Menu';
import { click } from '@testing-library/user-event/dist/click';
function Header() {
    const [isClick,setClick]=useState(true);
function clickHandle(){
    setClick(!isClick);
}

const [data,setData]=useState({});
const fontSize={
    fontSize:"3rem",
}
useEffect(()=>{
   const  value =  JSON.parse(localStorage.getItem("customerInfo"));
   setData(()=>{
    return ( value || [])
   })
 
},[data])
  return (
    <div id="header" style={{position:"relative"}}>
       <Paper elevation={4} 
       className="header-container"
        sx={{
            backgroundColor:"var(--lemon-bg)",
            padding:2,
          
        }}>

            <Grid spacing={0} container>
                <Grid item xs={12} md={4} className="Logo-container">
                    <img src={Logo} alt="Little Lemon Restaurant logo" style={{textAlign:"center"}}/>     
                </Grid>
                <Grid item xs={10} md={6} className="header-text-container">
                    <Typography variant="h4" component="h6" 
                    sx={{
                        marginTop:"4%",
                        fontWeight:"700",
                        color:"var(--darkGreen-bg)"
                        }}>
                        10% speacial discount on online !
                    </Typography> 
                </Grid>
                <Grid item xs={2} md={2} className="menu-icon-container">
                    <div  className="menu-icon"  onClick={clickHandle}>
                        {isClick ? <LunchDiningIcon sx={fontSize}/> : <NoFoodIcon sx={fontSize}/>}
                    </div>
                </Grid>
            </Grid>
       </Paper>
       <Paper elevation={4} className="menu-container" 
       sx={{
        transition:"1s ease-in-out",
        position:"absolute",
        right:"10%",
       zIndex:200,
       
        display:`${isClick ?"none":"block"}`,
        backgroundColor:"var(--yellow-bg)",
        border:"2px solid var(--darkGreen-bg)",
        padding:2,
        color:"var(--darkGreen-bg)"
        
        
        }}>
                <Typography variant="h5" element="h5">
                  Total Order= {data.length}
                </Typography>
                <Typography variant="h2" element="h2">
                  This is test 
                </Typography>
                <Typography variant="h2" element="h2">
                  This is test 
                </Typography>
                <Typography variant="h2" element="h2">
                  This is test 
                </Typography>
                <Link href="#">Link</Link>
       </Paper>
       
        
    </div>
  )
}

export default Header