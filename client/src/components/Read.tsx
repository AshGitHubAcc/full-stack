import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom";

export default function Read({}) {

    const [person, setPerson] = useState({
        first_name: "--",
        last_name: "--",
        email: "--",
        major: "--",
        undergraduate: " --",
        gpa: "--"
    });
    const {id} = useParams()


    useEffect(()=>{
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:4000/students/${id}`)
    
                if (!response.ok) {
                    const data = await response.json()
                    throw new Error(data.message)
                }
                const data = await response.json() 
                setPerson(data)
                
            } catch (error) {
                throw new Error("Fetching Error: " + error)
            }
        }
        fetchData()
    },[])




    return (
        <div className="flex justify-center flex-col items-center h-[100vh]">
            <Link to="/" className="bg-blue-800 text-xl text-gray-200 px-4 py-1 rounded ml-[85%] mb-1 hover:bg-blue-900">Back</Link>
            <div className="bg-gray-600 shadow-md rounded-lg p-8 w-[30rem]">
                <h2 className="text-2xl font-bold text-center text-gray-300 mb-6">Student Details</h2>
                <ul className="space-y-4 text-gray-400 ml-16">
                    <li>
                        <span className="font-medium">First Name:</span> <strong>{person.first_name}</strong>
                    </li>
                    <li>
                        <span className="font-medium">Last Name:</span> <strong>{person.last_name}</strong>
                    </li>
                    <li>
                        <span className="font-medium">Major:</span> <strong>{person.major}</strong>
                    </li>
                    <li>
                        <span className="font-medium">Undergraduate:</span><strong>
                        {person.undergraduate === " --" ? person.undergraduate : (person.undergraduate ? " Yes" : " No")}</strong>
                    </li>
                    <li>
                        <span className="font-medium">GPA:</span> <strong>{person.gpa}</strong>
                    </li>
                    <li>
                        <span className="font-medium">Email:</span> <strong>{person.email}</strong>
                    </li>
                </ul>
            </div>
        </div>
    
    )
}