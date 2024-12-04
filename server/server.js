import express from 'express'
import cors from 'cors'
import StudentController from './MC/controller/studentController.js'

const app = express()
const PORT = 4000

app.use(cors())
app.use("/students", (new StudentController).controller)


app.listen(PORT, () => {
    console.log("Server running: http://localhost:" + PORT)
})