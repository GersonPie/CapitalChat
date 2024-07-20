const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const cors = require('cors')
const fs = require("node:fs")
const { stringify } = require('node:querystring')

app.use(cors({origin: "*"}))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})


app.use(bodyparser.json())
app.listen(3000, ()=>{
    console.log("server started in port 3000")
}) 
app.post("/", ()=>{
    console.log("Hello world")
})
app.post("/api/room1", (req, res)=>{
    saveData(req.body)
   // console.log(`the saved data is\n ${JSON.stringify(loadFile())}`)
    res.end()
})
app.get("/api/room1", (req, res)=>{

        fs.readFile('./data.md', 'utf8',(err, data)=>{
            if(err)saveData(data)
            else {
                let newdata = data;
                console.log(typeof newdata)
                console.log(`the saved data is\n ${newdata}`)
                res.send(JSON.parse(newdata))
                return res.end();
            }
        })
    
    


    
    
})


const saveData=(data_to_save)=>{
    if(!fs.existsSync('data.md')){

       const response = fs.writeFile('data.md', data_to_save ? JSON.stringify([data_to_save]): JSON.stringify([]), (err) =>{
        if(err)console.error(`error trying to save file ${err}`);
        else console.log('file successfully created')
    })
}else{
    console.log('saving data');

    fs.readFile('./data.md', 'utf8',(err, data)=>{
        if(err)console.error(`Error trying to read file: ${err}`)
        else {
            let newdata = data;
            console.log(typeof newdata)
            console.log(`the saved data is\n ${newdata}`)
            fs.writeFile('data.md', JSON.stringify([...JSON.parse(newdata), data_to_save]),(err)=>{
                if(err)console.error(`there was an error trying to append: ${JSON.stringify(`,${data_to_save}`)}`)
            })
        }
    })

    
}
}


