import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Create() {

    const nagivate = useNavigate()

    const [inputValues, setInputValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        age: '',
        undergraduate: '',
        gender: ''
    })




    function oninput(event : React.ChangeEvent<HTMLInputElement>, property : string) {
        setInputValues((freshState) => (
            {...freshState, [property]: event.target.value})
        )
    }


    async function handleSubmit(event : React.ChangeEvent) {

        event.preventDefault()

        fetch("http://localhost:4000/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputValues)
        })
        .then((res)=>{

            console.log(res)
            if (!res.ok) {
                throw new Error("HTTP Error: " + res.status)
            }
            return res.text()
        })
        .then((data)=> {
            console.log(data)
            nagivate('/')
        })
        .catch(error => console.error("Fetching Error: " + error))


        setInputValues({
            first_name: "",
            last_name: "",
            email: "",
            age: '',
            undergraduate: '',
            gender: ''
        });
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
                        <input type="text" id="first-name" className="bg-gray-400 rounded-sm" value={inputValues.first_name} onChange={(event)=> oninput(event, "first_name" )}></input>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" className="bg-gray-400 rounded-sm" value={inputValues.last_name}  onChange={(event)=> oninput(event, "last_name")}></input>
                    </div>
                </div>

                <div className="flex my-5">
                    <div className="flex flex-col mr-0">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" className="bg-gray-400 rounded-sm w-[80%]" value={inputValues.email}  onChange={(event)=> oninput(event, "email")}></input>
                    </div>
                    <div className="flex flex-col ml-14">
                        <label htmlFor="age">Age </label>
                        <input type="number" id="age" className="bg-gray-400 rounded-sm w-14"  value={inputValues.age} onChange={(event)=> oninput(event,"age" )}></input>
                    </div>

                </div>

                <div className="flex flex-col ">
                    <div>
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" className="ml-5 mb-5" onChange={(event)=> oninput(event, "gender" )} value={inputValues.gender}>
                            <option value="select">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>



                        </select>


                    </div>

                    <div>
                        <label htmlFor="undergraduate">Undergraduate</label>
                        <select id="undergraduate" className="ml-5" onChange={(event)=> oninput(event, "undergraduate")} value={inputValues.undergraduate}>
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
