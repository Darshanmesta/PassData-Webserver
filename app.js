 const express= require("express")
 const app= express()
 const bodyParser= require("body-parser")

 var items=["New","Old","Junk"]
 var data=""


 app.use(bodyParser.urlencoded({extended: true}))

 app.set("view engine", "ejs")

 app.get("/", (req,res)=>{
   var options= {day: "numeric",month:"long",year:"numeric"}
   var today= new Date()
   var current= today.toLocaleDateString("en-US",options);
   res.render("lists",{Date: current, NeJunk:items})
   console.log(data)


 })


 app.post("/",(req,res)=>{
    data = req.body.text1
   items.push(data)




 })

 app.listen(3000,()=>{
   console.log("Server started on 3000")
 })
