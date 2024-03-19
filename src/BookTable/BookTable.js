import React, { useEffect, useState } from 'react'
import {Grid,Box, Paper,Typography,Button} from "@mui/material"
import "../BookTable/BookTable.css"
import PizzaImage from "../Assets/PIZZA.png"

export default function BookTable() {

  const [customer,setCustomer] = useState({
    name:"",
    email:"",
    number:"",
    people:"",
    table_type:4,
    date:"",

  })  ;

const [data,setData]=useState(()=>{
  return (JSON.parse(localStorage.getItem("customerInfo"))||[])
});

  const handleChange=(e)=>{
        const {name,value}=e.target;
        setCustomer({...customer,[name]:value})

    if(customer.number.length > 11) { setCustomer((user)=>{
        return {...user, number: ""};
    });
   
    }

  }
function submitHandle(e){

 setData((prev)=>{
  return [...prev , customer]
 });
 e.preventDefault();

}

useEffect(()=>{
  localStorage.setItem("customerInfo",JSON.stringify(data));
},[data]);


  const currentDate= new Date();
  const time =currentDate + currentDate.getTime();
  return (
    <section id="BookTable">
            <Paper elevation={4} sx={{padding:1,margin:"auto"}}>
                <Grid container spacing={0}>
                    <Grid item md={6} sm={4}>
                        
                      <Box
                      sx={{
                        margin:"auto",
                        
                        width:"380px",
                        padding:4,
                        border:"2px solid var(--darkGreen-bg)",
                        boxShadow:"2px 2px 13px #000",
                        backgroundColor:"var(--lemon-bg)",
                        borderRadius:"25px",
                        marginBottom:2
                      }}
                      >
                      <Typography variant="h3" component="h3">
                            Book A Table
                        </Typography>
                        <form  onSubmit={submitHandle}>
                                <label htmlFor="name">
                                 <Typography variant="body" component="body">Name:</Typography>   
                                </label>
                                <input 
                                type="text" 
                                name="name" 
                                id="name"
                                onChange={handleChange}
                                value={customer.name}
                                required

                                />

                                <label htmlFor="email">
                                       <Typography variant="body" component="body">Email:</Typography>   
                                </label>
                                <input 
                                type="email" 
                                name="email" 
                                id="email"
                                onChange={handleChange}
                                required
                                value={customer.email}
                                />

                                
                                <label htmlFor="number">
                                       <Typography variant="body" component="body">Phone:</Typography>   
                                </label>
                                <input 
                                type="number" 
                                name="number" 
                                id="number"
                                onChange={handleChange}
                                required
                                value={customer.number}

                                />

                                <label htmlFor="people">
                                       <Typography variant="body" component="body">People:</Typography>   
                                </label>
                                <input 
                                type="range" 
                                name="people" 
                                id="people"
                                onChange={handleChange}
                                min="1"
                                max="8"
                                required
                                value={customer.people}

                                />{customer.people}

                                <label htmlFor="table_type">
                                       <Typography variant="body" component="body">Table Type:</Typography>   
                                </label>
                                <select id="table_type"
                                name="table_type"
                                value={customer.table_type}
                                required
                                onChange={handleChange}
                                 >
                                  <option> Single seat </option>
                                  <option> 2 seat </option>
                                  <option> 4 seat </option>
                                  <option> 8 seat </option>
                                </select>
                                <label htmlFor="date">
                                       <Typography variant="body" component="body">Date:</Typography>   
                                </label>
                                <input type="datetime-local"
                                name="date"
                                id="date"
                                min={time}
                                value={customer.date}
                                onChange={handleChange}


                                /><br/>
                                <Button 
                                variant="contained" 
                                type="submit" id="submitBtn"
                                
                                 
                                 >
                                  Book Now
                                </Button>
                        </form>
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={4}>
                        <Box sx={{overflow:"hidden"}}>
                          <img src={PizzaImage} alt="pizza on sale near me "/>
                        </Box>

                        </Grid>
                       
                </Grid>
            </Paper>
    </section>
  )
}
