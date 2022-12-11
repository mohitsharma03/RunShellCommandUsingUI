const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

/*****************************************************
//running html using nodejs:
app.get("/", function(req,res){
    //console.log(request);
    //response.send("helo");
    res.send("<h1>hello world</h1>");
});

//using different route:
app.get("/contact", function(req,res){
    res.send("contact at 03mohit@gmail.com");
});
*****************************************************/

app.get("/", function(req,res){
   res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

    /*****************************************************
    //sample code for calculator ui:
    //console.log(req.body);//prints req body(in json) sent by ui form submit
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("Calculated result = "+result);
    *****************************************************/

    //running shell commands in nodejs:
    var com = req.body.com;
    const { exec } = require('node:child_process')
    exec(com, (err, output) => {
        if (err) {
            console.error("could not execute command: ", err)
            return
        }
        console.log("Output: \n", output)
        res.send("Command "+com+" executed......<br>Result is:<br><br> " + output);
    })
 });

app.listen(3000, function(){
    console.log('server started on port 3000');
});