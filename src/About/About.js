import React from 'react'
import {Grid,Typography,Card,CardContent,CardMedia} from "@mui/material"

import Product from '../Home/Product';
import "../About/About.css"
function About() {
    const style={
        margin:"auto"
    }
  return (
   <section id="about" >
   <Typography variant='h2' component="h2">
        Speacial Offer !
   </Typography>
        <Grid container spacing={0}>
                {Product.slice(0,3).map((item,index)=>{
                    return(
                        <Grid item md={4} sm={12} sx={style}>
                        <Card sx={{ maxWidth: 400, marginBottom:4 }}>
                            <CardMedia
                              sx={{ height: 240 }}
                              image={item.img}
                              title="green iguana"/>
                              <CardContent>
                                <Typography variant='h4' component='h4'>
                                    {item.name}
                                </Typography>
                                <Typography variant='p' component='p'>
                                    {item.description.slice(0,150)}
                                </Typography>
                              </CardContent>
                        </Card>
                        </Grid>
                        
                    )
                })}
        </Grid>
   </section>
  )
}

export default About