import express from 'express'
import StudentsModel from '../Model/students.js'
const controller = express.Router()


controller.get("/students", async (req, res) => {
    
    try {
        const data = await StudentsModel.getAllStudents()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({serverMessage: 'Server Error'})
    }
})



controller.get("/students/:id", async (req,res)=>{


    try {
        const data = await StudentsModel.getSingleStudent(req.params.id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({serverMessage: 'Server Error'})
    }
})

export default controller


