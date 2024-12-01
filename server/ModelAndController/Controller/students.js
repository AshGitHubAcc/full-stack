import express from 'express'
import db from '../../database.js'


const controller = express.Router()

controller.post('/students', (req,res)=>{


    const sqlQuery = "INSERT INTO Students (first_name, last_name, email, age, gender, undergraduate) VALUES(?,?,?,?,?,?);"
    const values = [
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        parseInt(req.body.age),
        req.body.gender,
        true
    ]
    db.query(sqlQuery, values, (error, result)=>{
        if (error) {
            return res.status(400).send("Server Error: " + error)
        }
        return res.status(200).send("Post Successful")
    })
})



controller.get('/students', (req,res)=>{

    const sqlQuery = "SELECT * FROM Students;"

    db.query(sqlQuery, (error, result)=> {

        if (error) {
            return res.status(500).send("Server Error: " + error)

        }

        return res.json(result)
    })
})

controller.get("/students/:id",(req,res)=>{

    const {id} = req.params
    const sqlQuery = `SELECT * FROM Students WHERE id = ${id}`

    db.query(sqlQuery, (error, result)=>{
        if (error) {
            return res.status(500).send("Server Error: " + error)
        }
        return res.json(result[0])
    })
})


controller.put('/students/:id',(req,res)=>{
    const {id} = req.params
    const { first_name, last_name, email, age, gender, undergraduate } = req.body

    const sqlQuery = `
        UPDATE Students
        SET
            first_name = ?, 
            last_name = ?, 
            email = ?,
            age = ?,
            gender = ?,
            undergraduate = ?
        WHERE id = ?
    `

    const values = [first_name, last_name, email, age, gender, undergraduate, id]


    db.query(sqlQuery, values, (error)=>{
        if (error) {
            return res.send("DB Error: " + error)
        }
        return res.send("Successful")
    })
})

controller.delete(("/students/:id"),(req,res)=>{
    const {id} = req.params
    console.log(id)

    const sqlQuery = `
        DELETE FROM Students
        WHERE id = ?;
        `

    const values =[id]

    db.query(sqlQuery,values, (error)=>{

        if (error) {
            return res.send("DB Error: " + error)
        }
        return res.send("Successful")
    })
})

export default controller
 

