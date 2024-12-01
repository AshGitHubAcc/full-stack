
import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function Read() {

    const [student, setStudent] = useState({})

    const {id} = useParams()

    useEffect(()=>{

        fetch(`http://localhost:4000/students/${id}`)
        .then(res => res.json())
        .then((data) => {
            setStudent(data)
        })
        .catch(error => console.log(error))

    },[])


    return (

        <>
        <div className="flex justify-center items-center h-[100vh]">
            <ul>
                <li>Name: {`${student.first_name} ${student.last_name}`}</li>
                <li>Email: {student.email}</li>
                <li>Gender: {student.gender}</li>
                <li>Undegraduate: {student.undergraduate}</li>
            </ul>
        </div>
        </>
    )
}