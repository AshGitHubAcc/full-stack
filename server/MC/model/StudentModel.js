import db from '../../database.js'

export default class StudentModel {

    static async getAllStudents() {
        
        const sqlCommand = 'SELECT * FROM Students;'

        try {
            const data = await db.query(sqlCommand)
            return data[0]
        } catch (error) {
            throw new Error(`Error when quering data from database: ${error}`)
        }
    }

    static async deleteStudent(id) {

        const sqlCommand = `
            DELETE FROM Students
            WHERE id = ?;    
        `

        try {
            const data = await db.query(sqlCommand,[id])
            return data[0].affectedRows === 0 ? {studentFoundAndDeleted: false} : {studentFoundAndDeleted: true}

        } catch (error) {
            throw new Error(`Database error ${error}`)
        }

  
    }
}
