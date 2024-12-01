import mysql2 from 'mysql2'


const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "asdvd123fqw12",
    database: "fullstack"

})


db.connect((error)=> {
    if (error) {
        console.error("Error connecting to database: " + error)
    }
    else {
        console.log("Connected to Database")
    }
})

export default db