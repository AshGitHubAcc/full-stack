import db from "../../database.js"

export default class StudentsModel {

    static async getAllStudents() {

        const sqlQuery = "SELECT * FROM Students;"

        try {
            const data = await db.query(sqlQuery)
            return data[0]
        }
        catch(error) {
            throw new Error("Model Error --- Database Query Error\n" + error)
        }
    }
    
    static async getSingleStudent(id) {
        const sqlQuery = "SELECT * FROM Students WHERE id = ?"

        try {
            const data = await db.query(sqlQuery, [id])
            return data[0]

        } catch (error) {
            throw new Error("Model Error --- Database Query Error\n" + error)
        }
    }


    // static addStudent(studentData) {

    //     const sqlQuery = `
    //         INSERT INTO Students (first_name, last_name, email, age, gender, undergraduate)
    //         VALUES (?, ?, ?, ?, ?, ?);
    //     `
    //     const values = [
    //         studentData.first_name,
    //         studentData.last_name,
    //         studentData.email,
    //         parseInt(studentData.age),
    //         studentData.gender,
    //         studentData.undergraduate === "yes" ? true : false
    //     ];

    //     const queriedData = db.query(sqlQuery, values, (error, result)=> {

    //         if (error) {
    //             console.log("==================================Database Query Error==================================\n", error)
    //             return null
    //         }
    //         return "Sucessful"
    //     })
    //     return queriedData
    // }

    // static updateStudent(id, updateStudentData) {

    //     const sqlQuery = `
    //         UPDATE Students

    //         SET
    //             first_name = ?,
    //             last_name = ?,
    //             email = ?,
    //             age = ?,
    //             gender = ?,
    //             undergraduate = ?
    //         WHERE id = ?;
    //     `
    //     const values = [
    //         studentData.first_name,
    //         studentData.last_name,
    //         studentData.email,
    //         parseInt(studentData.age),
    //         studentData.gender,
    //         studentData.undergraduate === "yes" ? true : false,
    //         id
    //     ]

    //     const queriedData = db.query(sqlQuery, values, (error, result)=>{

    //         if (error) {
    //             console.log("==================================Database Query Error==================================\n", error)
    //             return null
    //         }
    //         return "Sucessful"
    //     })

    //     return queriedData
    // }

    // static deleteStudent(id) {

    //     const sqlQuery = `
    //         DELETE FROM Students
    //         WHERE id = ?;
    //     `

    //     const queriedData = db.query(sqlQuery, [id], (error,result)=>{

    //         if (error) {
    //             console.log("==================================Database Query Error==================================\n", error)
    //             return null
    //         }
    //         return "Sucessful"
    //     })
    //     return queriedData
    // }
}










// import db from '../../database.js';

// class StudentsModel {
//     // Create a student
//     static async createStudent(studentData) {
//         const sqlQuery = `
//             INSERT INTO Students (first_name, last_name, email, age, gender, undergraduate)
//             VALUES (?, ?, ?, ?, ?, ?);
//         `;
//         const values = [
//             studentData.first_name,
//             studentData.last_name,
//             studentData.email,
//             parseInt(studentData.age),
//             studentData.gender,
//             studentData.undergraduate
//         ];

//         try {
//             const result = await db.query(sqlQuery, values);
//             return result;
//         } catch (error) {
//             throw new Error("Server Error: " + error);
//         }
//     }

//     // Get all students
//     static async getAllStudents() {
//         const sqlQuery = "SELECT * FROM Students;";

//         try {
//             const result = await db.query(sqlQuery);
//             return result;
//         } catch (error) {
//             throw new Error("Server Error: " + error);
//         }
//     }

//     // Get student by ID
//     static async getStudentById(id) {
//         const sqlQuery = "SELECT * FROM Students WHERE id = ?;";

//         try {
//             const result = await db.query(sqlQuery, [id]);
//             return result;
//         } catch (error) {
//             throw new Error("Server Error: " + error);
//         }
//     }

//     // Update student details
//     static async updateStudent(id, studentData) {
//         const sqlQuery = `
//             UPDATE Students
//             SET first_name = ?, last_name = ?, email = ?, age = ?, gender = ?, undergraduate = ?
//             WHERE id = ?;
//         `;
//         const values = [
//             studentData.first_name,
//             studentData.last_name,
//             studentData.email,
//             parseInt(studentData.age),
//             studentData.gender,
//             studentData.undergraduate,
//             id
//         ];

//         try {
//             const result = await db.query(sqlQuery, values);
//             return result;
//         } catch (error) {
//             throw new Error("Server Error: " + error);
//         }
//     }

//     // Delete student by ID
//     static async deleteStudent(id) {
//         const sqlQuery = "DELETE FROM Students WHERE id = ?;";

//         try {
//             const result = await db.query(sqlQuery, [id]);
//             return result;
//         } catch (error) {
//             throw new Error("Server Error: " + error);
//         }
//     }
// }

// export default StudentsModel;
