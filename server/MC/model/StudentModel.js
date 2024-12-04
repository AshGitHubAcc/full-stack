import db from '../../database.js'

export default class StudentModel {

    static async getAllStudents() {
        
        const sqlCommand = 'SELECT id, first_name, last_name, email, major, undergraduate FROM Students;'

        try {
            const data = await db.query(sqlCommand)
            return data[0]
        } catch (error) {
            throw new Error(`Database query error: ${error}`)
        }
    }

    static async getStudent(id) {

        const sqlCommand = `
            SELECT * FROM Students
            WHERE id = ?;
        `
        try {
            const data = await db.query(sqlCommand, [id])
            return data[0][0]
        } catch (error) {
            throw new Error(`Database query error: ${error}`)
        }
        
    }

    static async deleteStudent(id) {

        const sqlCommand = `
            DELETE FROM Students
            WHERE id = ?;    
        `

        try {
            const data = await db.query(sqlCommand,[id])
            return data[0].affectedRows === 0 ? {sucess: false} : {sucess: true}

        } catch (error) {
            throw new Error(`Database query error: ${error}`)
        }
    }

    static async addStudent(data) {

        const sqlCommand = `
            INSERT INTO Students (first_name, last_name, email, major, gpa, undergraduate)
            VALUES (?, ?, ?, ?, ?, ?);
        `
        const values = [
            data.first_name,
            data.last_name,
            data.email,
            data.major,
            data.gpa,
            data.undergraduate === "Yes" ? true : false
        ]

        try {
            await db.query(sqlCommand, values)
        } catch (error) {
            throw new Error(`Database query error: ${error}`)
        }
    }

    static async updateStudent(id, data) {
        console.log(data)

        const sqlCommand = `
            UPDATE Students
            SET first_name = ?,
                last_name = ?,
                email = ?,
                major = ?,
                gpa = ?,
                undergraduate = ?
            WHERE id = ?;
        `
        const values = [
            data.first_name,
            data.last_name,
            data.email,
            data.major,
            data.gpa,
            data.undergraduate === "Yes" ? true : false,
            id
        ]

        try {
            await db.query(sqlCommand, values)
        } catch (error) {
            throw new Error(`Database query error: ${error}`)
        }

    }
}