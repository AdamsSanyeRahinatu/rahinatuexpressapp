const express = require("express")
const app = express()

const port = 5000;

app.get("/" ,(req, res)=> {
    res.send("welcome to my api")
})
app.post("/postrequest" ,(req, res)=> {
    res.send("POST YOUR REQUEST HERE")
})
app.delete("/deleterequest" ,(req, res)=> {
    res.send("DELETE FROM HERE")
})
app.put("/p_request" ,(req, res)=> {
    res.send("PUT HERE")
})

app.listen(port, ()=> console.log(`server is working ${port}`));