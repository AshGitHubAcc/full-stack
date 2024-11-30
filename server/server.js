import express from 'express'
import cors from 'cors'
import mysql2 from 'mysql2'

// import path from 'path'`
// import { fileURLToPath } from 'url'

const app = express();
const PORT = 4000;

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

app.use(cors())
app.use(express.json())
// app.use('/public', express.static(path.join(__dirname, 'public')))


const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "asdvd123fqw12",
    database: "fullstack"

})



let id = 0
app.post('/students', (req,res)=>{

    const sqlQuery = "INSERT INTO Student (id, first_name, last_name, email, age, gender, undergraduate) VALUES(?,?,?,?,?,?,?);"
    id++
    const values = [
        id,
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        12,
        req.body.gender,
        true
    ]



    db.query(sqlQuery, values, (error, result)=>{
        if (error) {
            return res.status(500).send("Server Error: " + error)
        }
        return res.status(200).send("Post Successful")
    })
})
 

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT)
});
