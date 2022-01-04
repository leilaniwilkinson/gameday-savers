import React from 'react';
import { Card, Grid, Autocomplete, TextField, IconButton, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState, useEffect } from "react";
import axios from "axios";


export default function ParkingAdmin() {

    const[lotName, setlotName] = useState(localStorage.getItem('lot'));
    const axios = require('axios').default;

    async function increment(e) {

        await axios.get(`http://localhost:5000/api/parkings`)
        .then(async function(resp) {
            
            for(let element of resp.data){
                if(element.Parking_Lot === lotName && (element.space_available < element.Total_Parking_Space)){
                    element.space_available++;
                    element.Availability = "Yes";
                    await axios.put(`http://localhost:5000/api/parkings/${element._id}`, element).then(console.log("increment+"))
                    
                }
                window.location.reload(false);
            }
        })

    }

    async function decrement(e) {

        await axios.get(`http://localhost:5000/api/parkings`)
        .then(async function(resp) {
            
            for(let element of resp.data){
                if(element.Parking_Lot === lotName && (element.space_available > 0)){
                    element.space_available--;
                    if(element.space_available === 0){
                        element.Availability = "No";
                    }
                    await axios.put(`http://localhost:5000/api/parkings/${element._id}`, element).then(console.log("decrement+"))
                    
                }
                window.location.reload(false);
            }
        })

    }

    async function reset(e) {

        await axios.get(`http://localhost:5000/api/parkings`)
        .then(async function(resp) {
            
            for(let element of resp.data){
                if(element.Parking_Lot === lotName && (element.space_available != element.Total_Parking_Space)){
                    element.space_available = element.Total_Parking_Space;
                    element.Availability = "Yes";
                    await axios.put(`http://localhost:5000/api/parkings/${element._id}`, element).then(console.log("decrement+"))
                    
                }
                window.location.reload(false);
            }
        })
    } 

    useEffect(() => {

        const data = localStorage.getItem('lot');
        if(data){
            setlotName(JSON.parse(data));
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('lot', JSON.stringify(lotName));
    })

    return (
        <div>
            <Card elevation={10} style={{maxWidth:450, margin:"0 auto", padding:"20px 40px 20px 40px"}}>
                <Typography variant="h6" mb={1}>
                    Change Lot Availability
                </Typography>
                <Grid container spacing={1}>
                    <Grid xs={12} sm={8} item>
                        <Autocomplete
                            onChange = {(e, v) =>setlotName(v.label)}
                            disablePortal
                            id="combo-box-lots"
                            options={parkingLots}
                            renderInput={(lotName) => <TextField {...lotName} label={localStorage.getItem('lot')} required />}
                        />
                    </Grid>
                    <Grid xs={12} sm={4} item style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <IconButton aria-label="add"
                            onClick={async () => {
                                increment();
                              }}
                            >
                            <AddIcon />
                        </IconButton>
                        <IconButton aria-label="remove"
                            onClick={async () => {
                                decrement();
                              }}
                            >
                            <RemoveIcon />
                        </IconButton>
                    </Grid>
                    <Grid xs={12} item style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <Button variant="contained" mt={3}
                                onClick={async () => {
                                    reset();
                                  }}
                            >Reset Lot</Button>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

const parkingLots = [
    { label: 'Lot 12' },
    { label: 'Lot 18' },
    { label: 'Lot 36a' },
    { label: 'Lot 37' },
    { label: 'Lot 38' },
    { label: 'Lot 43' },
    { label: 'Lot 47' },
    { label: 'Lot 49' },
    { label: 'Lot 50' },
    { label: 'Lot 54' },
    { label: 'Lot 55' },
    { label: 'Lot 63' },
    { label: 'Lot 71' },
    { label: 'Lot 73' },
    { label: 'Lot 76' },
    { label: 'Lot 77' },
    { label: 'Lot 78' },
    { label: 'Lot 79' },
    { label: 'Lot 80' },
    { label: 'Lot 85' },
    { label: 'Lot 87' },
    { label: 'Lot 88' },
    { label: 'Lot 98' },
    { label: 'Lot 100e' },
    { label: 'Lot 100m' },
    { label: 'Lot 110' },
    { label: 'Lot 111' },
    { label: 'Lot 113' },
    { label: 'Lot 114' },
    { label: 'Lot 115' },
    { label: 'Central Campus Garage' },
    { label: 'Equine Complex' },
    { label: 'Fan Field' },
    { label: 'Gene Stallings (formerly Cain) Garage' },
    { label: 'Northside Garage' },
    { label: 'Polo Road Garage' },
    { label: 'Southside Garage' },
    { label: 'West Campus Garage' }
]
