import React from 'react'
import "../Step/Step.css"
import {Grid,Paper,Box,Typography} from "@mui/material"
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Step() {
    const style={
        fontSize:"5rem"
    }
  return (
    <section id="step">
        <Paper elevation={4}
        sx={{
            backgroundColor:"var(--darkGreen-bg)",
            color:"var(--cream-bg)",
            textAlign:"center",
            fontSize:"1.8rem",
            padding:2
        }}
        >
            <Grid container spacing={0}>
                <Grid item md={4} xs={12}>
                <RestaurantMenuIcon sx={style}/> 
                    <Typography variant='h4' component="h3">
                   
                       Check Menu
                    </Typography>
                </Grid>

                <Grid item md={4} xs={12}>
                <TableRestaurantIcon  sx={style}/>
                    <Typography variant='h4' component="h3">
                   
                      Book Table
                    </Typography>
                </Grid>

                <Grid item md={4} xs={12}>
                <EmojiEmotionsIcon sx={style}/>
                    <Typography variant='h4' component="h3">
                   
                       Enjoy Meal
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    </section>
  )
}

export default Step