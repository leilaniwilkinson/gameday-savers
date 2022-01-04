import React,  { useState } from 'react';
import { Typography, Card, CardContent, Grid, TextField, Button, Autocomplete } from '@mui/material';
import axios from "axios";

function QuestionForm() {
    const [question, setQuestion] = useState('')
    const [tag, setTag] = useState('')
    var [thanks, setThanks] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(question && tag){
            console.log(tag, question)
            postQuestion(e, tag, question)
            setThanks('Thank you for posting a question')
        }
    }

    async function postQuestion(e, tag, question) {

        e.preventDefault()

        try{
            await axios.post("http://localhost:5000/FAQ/insert",{
                
                question: question,
                tag: tag,
                
            });

            console.log(question, tag)

        } catch(error){
            console.log(error)
        }

    }

    // const addToFaq = () =>{
    //     Axios.post("https://localhost:5000/FAQ/insert", {
    //         question: question,
    //         tag: tags,
    //         asnwered: false,
    //     });
    // };

    return (
        <div>
            <Card elevation={0} style={{maxWidth:450, margin:"0 auto", padding:"0px 15px 40px 15px"}}>
                <CardContent>
                    <Typography color="textSecondary" variant="body2" component="p"><p2>Please ask your question below and we will provide an answer shortly.</p2></Typography>
                    <form onSubmit = {handleSubmit}>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                <Typography variant="subtitle1"><p1>Topic of your Question</p1></Typography>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <Autocomplete
                                    onChange = {(e, v) => setTag(v.label)}
                                    disablePortal
                                    id="combo-box-topics"
                                    options={questionTopics}
                                    renderInput={(params) => <TextField {...params} label="Topics" required />}
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField 
                                onChange = {(e) => setQuestion(e.target.value)}
                                label="Question" 
                                multiline rows={6} 
                                placeholder="Ask your question here" 
                                fullWidth required
                                />
                            </Grid>
                            <Grid xs={12} item style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                <Button type="submit" variant="contained">Submit</Button>
                            </Grid>
                            <p>{thanks}</p>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

const questionTopics = [
    { label: 'Gameday Savers' },
    { label: 'Parking' },
    { label: 'Traffic' },
    { label: 'Tickets' },
    { label: 'Other' }
]

export default QuestionForm;