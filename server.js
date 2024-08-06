import app from "./app.js";

app.listen(process.env.PORT,()=>{
    console.log(`Server Running on http://localhost:${process.env.PORT}`)
})

app.get("/home",(req,res)=>{
    res.status(200).send("Home page")
})