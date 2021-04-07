const express = require ("express")
const dotenv = require ("dotenv")
const humans = require("./users")
const morgan = require("morgan")

dotenv.config()

const app = express()

// middlewares

app.use(morgan("dev"))

// body parser to allow updating, thus, PUT request
app.use(express.json())

// single human
app.get("/api/v3/humans/:name", (req, res)=> {
    res.json(humans.filter((human)=>human.name === req.params.name));
})

// delete a human
app.delete("/api/v3/humans/:name", (req, res)=> {
    res.json(humans.filter((human)=>human.name !== req.params.name));
})

// updating a human ternary operator style 
app.put("/api/v3/humans/:name", (req, res)=> {
    const humanFound= humans.some((human)=> human.name === req.params.name);
    humanFound && 
        humanss.forEach((human)=> {
            human.name=req.body.name &&
            ((human.name = req.params.name),
            (human.comunity = req.body.community))
        })
        res.json(humans);
})

 

// get all humans
app.get("/api/v3/humans", (req, res)=> {
    res.json(humans);
})

const PORT = process.env.PORT

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`) )