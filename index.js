import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
let newItems = [];
let newWorkItems =[]

app.get("/",(req,res) =>{
    let options = {weekday:'long', year: 'numeric', month: 'long',
    day:'numeric'}
    let today = new Date();
    let day = today.toLocaleDateString("en-US",options);
    res.render("index.ejs", {khindOfDay : day, newListItems:newItems});
});

app.post("/",(req,res) =>{
    let newItem = req.body.newItem;
    newItems.push(newItem);
    res.redirect('/');
});

app.get("/work",(req,res) =>{
    
    res.render("work.ejs", { newListItems:newItems});
});

app.post("/work",(req,res) =>{
    let newItem = req.body.newItem;
    newWorkItems.push(newItem);
    res.render("work.ejs", { newListItems:newWorkItems});

});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});