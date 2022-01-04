// Including dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path")
const cors = require('cors');
const router = express.Router();

// File module location
const faq = require("../server/models/faq");
const user = require("../server/models/user");
const tailgate = require("../server/models/tailgate");
const parking = require("../server/models/parking");
//const userRoute = require("./routes/user");
const parkingRoute = require("./routes/parkingRoute");
// const users = require("./routes/userRoute");
//const routes = require("./routes/")

dotenv.config(); 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));                  

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
 });

// Connecting to database
mongoose
    .connect(process.env.MONGO_URL || 'mongodb+srv://gameday:gameday@cluster0.h0kgk.mongodb.net/Project_3_db?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        }
    )
    .then(() => console.log("DBConnection Successful"))
    .catch((err) => {
        console.log(err);
    });


// Our application  

//Have the routes all Here

// Parking 
app.use("/api" , parkingRoute);
//app.use("/api" , users);

app.use(express.static('/public/index.html'));

if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === 'staging') {
    app.use(express.static('client/build'));
    
    app.get("*", function (request, response) {
        response.sendFile(path.join(__dirname, "../client/build", "index.html"));
    });
}

// FAQ 
app.get('/FAQ/:tags',async (req,res) =>{
    const tag = req.params.tags;
    
    faq.find({tags : tag})
        .then((result) => {
            console.log(result)
            res.send(result)
        });
});

app.get('/autho/:userName/:password',async (req,res) =>{
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

app.get('/lots/:lotName',async (req,res) =>{
    const lotName = req.params.lotName;
    
    parking.find({
                lot_name : lotName
            })
        .then((result) => {

            //get authorization value if user is fount
            //return false if no user is found
            console.log(result)
            res.send(result)
        });
});

app.post('/FAQ/insert', async(req,res) => {

    let{ tag } = req.body
    let{ question } = req.body

    const new_faq = new faq({

        question: question,
        tags: tag,
        answered: false
    })

    new_faq.save()
        .then((result) => {
            console.log(result)
        });
    
    //let{ answered } = req.body.answered

    console.log(question);
    console.log(tag);

});


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});