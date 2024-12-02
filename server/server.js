import express from 'express'
import cors from 'cors'
import studentController from './ModelAndController/Controller/students.js';

const app = express();
const PORT = 4000
app.use(cors())
app.use(express.json())

// Endpoints Middleware
app.use("/", studentController)



app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT)
});