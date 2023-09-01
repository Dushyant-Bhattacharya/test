const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("App listening to "+port);
});
app.get("/",(req,res)=>{
    res.redirect("https://deploymentarena.in");
});