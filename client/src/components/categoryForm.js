import React,  { useState } from 'react';
import { Typography, Card, CardContent, Grid, TextField, Button, Autocomplete } from '@mui/material';
import axios from "axios";
import CustomizedDialog from '../components/Dialog';

function CategoryForm() {
    var [res, setRes] = useState('')
    const [tag, setTag] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(tag){
            console.log(tag)
            getQuestions(e, tag)
        }
    }

    async function getQuestions(e, tag){
        let answered_questions = []
        e.preventDefault()
        try{
            let url = "http://localhost:5000/FAQ/" + tag
            const data = await axios.get(url).then(res => res.data)
            for(const [key0, value0] of Object.entries(data)){
                for(const [key1, value1] of Object.entries(value0)){
                    if(`${key1}` == "answered" && `${value1}` == "true"){
                        answered_questions.push(value0)
                    }

                }

            }
            console.log(answered_questions)
            var output = ""
            for(const obj of answered_questions){
                var answer = ""
                for(const [key, value] of Object.entries(obj)){
                    if(`${key}` == "answer"){
                        answer = `${value}`
                    }
                    if(`${key}` == "question"){
                        output += "Q: "
                        output += `${value}`
                        output += "\n"
                    }
                    if(answer != ""){
                        output += "A: " + answer + "\n"
                        break;
                    }
                }
            }

            console.log(output)

            setRes(output)
        } catch(error){
            console.log(error)
        }
    }
        return (
            <div>
                <Card elevation={0} style={{maxWidth:450, margin:"0 auto", padding:"0px 15px 40px 15px"}}>
                    <CardContent>
                        <form onSubmit = {handleSubmit}>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                    <Typography variant="subtitle1">Topic of your Question</Typography>
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Autocomplete
                                        onChange = {(e, v) => setTag(v.label)}
                                        disablePortal
                                        id="combo-box-topics"
                                        options={topics}
                                        renderInput={(params) => <TextField {...params} label="Topics" required />}
                                    />
                                </Grid>
                                <Grid xs={12} item style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                    <Button type="submit" variant="contained">Submit</Button>
                                </Grid>
                                <p style={{whiteSpace: "pre-line"}}>{res}</p>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </div>
        );
}

    const topics = [
        { label: 'Gameday Savers' },
        { label: 'Parking' },
        { label: 'Traffic' },
        { label: 'Tickets' },
        { label: 'Other' }
    ]

export default CategoryForm;