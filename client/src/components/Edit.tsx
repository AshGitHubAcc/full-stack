import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link, useNavigate } from "react-router-dom"

export default function Edit() {

    const nagivator = useNavigate()

    const [student, setStudent] = useState({
        first_name: '',
        last_name: '',
        email: '',
        age: '',
        gender: '',
        undergraduate: ''
    })

    const {id} = useParams()
    
    useEffect(()=>{

        fetch(`http://localhost:4000/students/${id}`)
        .then(res => res.json())
        .then(async (data)=>{
            setStudent(data)
        })
        .catch(error=>console.log("========================Fetch Error"))

    },[])

    function oninput(event : React.ChangeEvent<HTMLInputElement>, property : string) {
        console.log(event.target.value)
        setStudent((freshState) => (
            {...freshState, [property]: event.target.value})
        )
    }

    function handleSubmit(event) {

        event.preventDefault()

        fetch(`http://localhost:4000/students/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(student)
        })
        .then((res)=>{

            if (!res.ok) {
                throw new Error("Failed to update student");
            }
            return res.text()
        })
        .then((data)=>{
            console.log("Sucessful")
            nagivator("/")
        })
        .catch(error=>console.log("ERROR"+error))


    }




    return (
        <div className="flex flex-col justify-center items-center h-[100vh]">

            <div className="bg-gray-400 px-3 rounded-sm mb-1 ml-[420px]">
                <Link to="/">Back</Link>
            </div>

            <form className="bg-gray-700 p-10 flex flex-col rounded" onSubmit={handleSubmit}>

                <div className="flex justify-between w-[400px]">
                    <div className="flex flex-col">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" className="bg-gray-400 rounded-sm" value={student.first_name} onChange={(event)=> oninput(event, "first_name" )}></input>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" className="bg-gray-400 rounded-sm" value={student.last_name}  onChange={(event)=> oninput(event, "last_name")}></input>
                    </div>
                </div>

                <div className="flex my-5">
                    <div className="flex flex-col mr-0">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" className="bg-gray-400 rounded-sm w-[80%]" value={student.email}  onChange={(event)=> oninput(event, "email")}></input>
                    </div>
                    <div className="flex flex-col ml-14">
                        <label htmlFor="age">Age </label>
                        <input type="number" id="age" className="bg-gray-400 rounded-sm w-14"  value={student.age} onChange={(event)=> oninput(event,"age" )}></input>
                    </div>

                </div>

                <div className="flex flex-col ">
                    <div>
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" className="ml-5 mb-5" onChange={(event)=> oninput(event, "gender" )} value={student.gender}>
                            <option value="select">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>



                        </select>


                    </div>

                    <div>
                        <label htmlFor="undergraduate">Undergraduate</label>
                        <select id="undergraduate" className="ml-5" onChange={(event)=> oninput(event, "undergraduate")} value={student.undergraduate}>
                            <option value="select">Select</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>

                    </div>
                </div>

                <button type="submit" className="ml-[30%] p-1 bg-blue-500 w-[20%] h-[10%] flex-grow-0 mt-5 ">Submit</button>


            </form>

        </div>
    )
}

