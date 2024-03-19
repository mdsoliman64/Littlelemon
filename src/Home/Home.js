import React from 'react'
import Product from "../Home/Product.js"
import {Grid,Paper,Typography,TableContainer,TableBody,TableHead,TableCell,Table,TableRow,Button} from "@mui/material"
import "../Home/Home.css"
import BurgerImage from "../Assets/little_lemon__2_-removebg-preview.png"
export default function Home() {
  return (
    <section id="Home">
      <Paper elevation={4}
       sx={{
        backgroundColor:"var(--lemon-bg)",
        width:"80%",
        margin:"auto",
        padding:2,
       
        }}>

        <Grid spacing={0} container>
          <Grid item xs={12} md={8} sx={{padding:2}}>
            <img src={BurgerImage} alt="burger "/>
            <Typography
            variant="h3"
            component="h2">
              Ginger Burger On sales !
            </Typography>

          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={4} sx={{backgroundColor:"var(--darkGreen-bg)",textAlign:"center"}}>
              <Typography variant="h3" component="h3" sx={{color:"#fff"}}>
                 Popular Menu
              </Typography>

              <TableContainer sx={{color:"#fff"}}>

              <Table  size="small" aria-label="a dense table">
              <TableHead>
                   <TableRow >
                          <TableCell align="center" sx={{color:"#fff",fontWeight:"bold"}}>Item</TableCell>
                          <TableCell align="center"  sx={{color:"#fff",fontWeight:"bold"}}>Price</TableCell>

                   </TableRow>
              </TableHead>
              <TableBody>
              {Product.slice(0,7).reverse().map((item,index)=>{
                return(
                  <TableRow >
                          <TableCell align="center" sx={{color:"#fff"}}>{item.name}</TableCell>
                          <TableCell align="center" sx={{color:"#fff"}}>{item.Price}</TableCell>

                   </TableRow>
                )
              })}
                  

                  
              </TableBody>
              </Table>


              </TableContainer>
              <Button variant="contained"
              sx={{
                margin:2,
                backgroundColor:"var(--yellow-bg)",
                fontSize:"1rem",
                fontWeight:"600",
                transition:"1s ease-in-out",
                color:"var(--darkGreen-bg)",
                ':hover':{
                  backgroundColor:"var(--lemon-bg)",
                  fontSize:".9rem"
                  }
              }}
              href="#BookTable"
              >Book Now</Button>
            </Paper>

            </Grid>
        </Grid>
      </Paper>
    </section>
  )
}
