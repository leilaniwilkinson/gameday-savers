const user = require("../server/models/user");
const express = require("express");
const router = require("express").Router();

// get method
router.get("/usertest", (req,res)=>{
    res.send("user test is successfull");
});

// post method
router.post("/userposttest", (req,res)=>{
    const username = req.body.username;
    res.send("your username is: " + username);
})

router.get('/autho/:userName/:password',async (req,res) =>{

    const userName = req.params.userName;
    const password = req.params.password;

    console.log(userName);
    console.log(password);
    
    user.find({
                username : userName,
                password: password
            })
        .then((result) => {

            //get authorization value if user is fount
            //return false if no user is found
            console.log(result)
            res.send(result)
        });
});

module.exports = router;