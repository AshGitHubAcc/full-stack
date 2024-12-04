// all endpoints related to students only
import express from 'express'
import StudentModel from '../model/studentModel.js'


export default class StudentController {

    controller

    constructor() {
        this.controller = express.Router()
        this.init()
    }


    init() {
        this.controller.get("/", this.getAllStudents)
        this.controller.get("/:id", this.getStudent)
        this.controller.delete("/:id", this.deleteStudent)
    }


    async getAllStudents(req,res) {
        try {
            const data = await StudentModel.getAllStudents()
            return res.status(200).json(data)
        }
        catch(error) {
            return res.status(500).json({message: `Server Error: ${error}`})
        }
    }

    async getStudent(req,res) {
        try {
            const data = await StudentModel.getStudent(req.params.id)
            return res.status(200).json(data)

        } catch (error) {
            return res.status(500).json({message: `Server Error: ${error}`})

        }
    }


    async deleteStudent(req,res) {

        try {
            const message = await StudentModel.deleteStudent(req.params.id)

            if (message.studentFoundAndDeleted) {
                return res.status(200).json({message: "Deleted Student"})
            }
            return res.status(500).json({message: "Student not found"})
        }
        catch(error) {
            return res.status(500).json({message: `Server Error: ${error}`})
        }
    }
}
