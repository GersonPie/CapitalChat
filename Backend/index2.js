const express = require("express")
const app = express()

app.get("/", (req, res)=>{

  res.send("<h1>Ola</h1>")
  res.end()
}
       ).listen(3000, ()=>{
  console.log("server stared and running on port 3000")})
