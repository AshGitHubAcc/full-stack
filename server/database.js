import mysql2 from 'mysql2'
import dotenv from 'dotenv'
dotenv.config();



const db = mysql2.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
}).promise()


db.connect((error)=> {
    if (error) {
        console.error("Error connecting to database: " + error)
    }
    else {
        console.log("Connected to Database")
    }
})

export default db