import express, { response } from "express";

import bodyParser from "body-parser";
//const express = require('express');


const app = express();
const port = 3000; // You can change this to any port you prefer

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
var i1 = [];
var j1 = [];


app.get('/', (req, res) => {
    // Render the todo list view here
    // You can pass tasks data here
    res.render('index', { newItems: i1 });
});

app.get('/work', (req, res) => {
    res.render('work', { newItems1: j1 }); // Renders the page2.ejs template
});


app.post("/", (req, res) => {
    var i = req.body.newItem;
    //console.log(i);
    i1.push(i);

    // response.render("index", { newItem: i })
    res.redirect("/");
})


app.post("/work", (req, res) => {
    var j = req.body.newItem1;
    //console.log(i);
    j1.push(j);

    res.redirect("/work");
})


// Add routes for adding and deleting tasks

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
