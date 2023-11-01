import express from "express";

const app=express();
const port=3000;

app.get("/", (req ,res)=>{
    const today = new Date();
    const day = today.getDay();
   // console.log(day);

   let type ="a weekend";
   let advi ="its time to enjoy";

   if(type===0 || type===6) {
    type="a weekend";
    advi="its time to enjoy";
   } 
     else{
    type="its not weekend";
    advi="its time to work hard";
  }

    res.render("index.ejs",
    {
        daytype:type,
        advice:advi,
    });
});

app.listen(port , ()=>{
    console.log(`server running on port ${port}.`);
});
