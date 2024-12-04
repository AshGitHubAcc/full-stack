import mysql2 from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}).promise()

async function connectDB() {
    try {
        await db.connect()
        console.log("Database connected");
    } catch (error) {
        console.error("Database failed to connect: " + error.message);
    }
}

connectDB()
export default db

// CREATE TABLE Students (

//     id INT AUTO_INCREMENT PRIMARY KEY,
//     first_name VARCHAR(50) NOT NULL,  
//     last_name VARCHAR(50) NOT NULL,   
//     email VARCHAR(100) UNIQUE, 
//     major VARCHAR(50),        
//     gpa DECIMAL(3, 2) DEFAULT 0.0

// );