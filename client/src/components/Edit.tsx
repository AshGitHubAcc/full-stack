import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Edit() {
    const nagivate = useNavigate()
    const [inputError, setInputError] = useState("")
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        major: "",
        undergraduate: "select",
        gpa: ""
    });

    const {id} = useParams()


    useEffect(()=>{
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:4000/students/${id}`)                
    
                if (!response.ok) {
                    return setInputError("SERVER ERROR: Unable to get student data")
                }
                const data = await response.json()
                setValues(data)
            } catch (error) {
                setInputError(error)
            }
    
        }
        fetchData()
    }, []) 


    async function onSubmit(event) {
        event.preventDefault()

        function validateInputs() {
        
            if (
                values.first_name === '' ||
                values.last_name === '' ||
                values.email === '' ||
                values.major === '' ||
                values.undergraduate === '' ||
                values.gpa === ''
            ) {
                return "All fields must be filled"
            }
            else if (values.email.indexOf("@northeastern.edu") === -1) {
                return "Email must include @northeastern.edu"
            }
            else if (parseFloat(values.gpa) <= 0 || parseFloat(values.gpa) > 4) {
                return "Gpa cannot be negative or greater than 4"
            }
            return "valid"
        }

        const valid = validateInputs()
        if (valid != "valid") {
            return setInputError(valid)
        }
        setInputError("");

        try {
            const response = await fetch(`http://localhost:4000/students/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
    
            if (!response.ok) {
                setInputError("SERVER ERROR: Unable to update student")
            }
            else {
                nagivate("/")
            }
            
        } catch (error) {
            setInputError(error)
        }
        
    }




    function onChange(event, type) {
        console.log(type,"==========", event.target.value)
        setValues({...values, [type]: event.target.value})
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div >
                <Link to="/" className="text-gray-300 hover:bg-blue-900  bg-blue-800 px-4 py-2 rounded-md self-start ml-[475px]">
                    Back
                </Link>
            </div>

            <form className="bg-gray-600 p-10 flex flex-col gap-4 rounded-lg shadow-lg mt-3" onSubmit={onSubmit}>

                <div className="flex justify-center text-red-500 font-bold underline">{inputError}</div>

                <div className="flex justify-center items-center">
                    <div className="flex flex-col mr-10">
                        <label className="text-gray-300 font-medium">First Name</label>
                        <input
                            type="text" value={values.first_name} onChange={(event)=>{onChange(event, "first_name")}}
                            className="bg-gray-700 text-gray-200 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"/>

                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-300 font-medium">Last Name</label>
                        <input
                            type="text" value={values.last_name} onChange={(event)=>{onChange(event, "last_name")}}
                            className="bg-gray-700 text-gray-200 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"/>

                    </div>

                </div>

                <div className="flex flex-col">
                    <label className="text-gray-300 font-medium">Email</label>
                    <input
                        type="text" value={values.email} onChange={(event)=>{onChange(event, "email")}}
                        className="bg-gray-700 text-gray-200 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />

                </div>


                <div className="flex">
                    <div className="flex flex-col">

                        <label className="text-gray-300 font-medium">Major</label>
                        <input
                            type="" value={values.major} onChange={(event)=>{onChange(event, "major")}}
                            className="w-[150px] bg-gray-700 text-gray-200 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                    </div>

                    <div className="flex flex-col mx-10">
                        <label className="text-gray-300 font-medium">Undergraduate</label>
                        <select value={values.undergraduate} onChange={(event)=> {onChange(event, "undergraduate")}}
                            className="w-[150px] bg-gray-700 text-gray-200 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            <option value="select" disabled className="text-gray-400">
                                Select...
                            </option>
                            <option value="Yes" className="text-gray-200">Yes</option>
                            <option value="No" className="text-gray-200">No</option>
                        </select>
                    </div>


                    <div className="flex flex-col">
                        <label className="text-gray-300 font-medium">GPA</label>
                        <input
                            type="number" step="0.01" value={values.gpa} onChange={(event)=>{onChange(event, "gpa")}}
                            className="w-[80px] bg-gray-700 text-gray-200 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                    </div>
                </div>

                <div className="flex justify-center mt-10 ">
                    <button type="submit" className="bg-green-500 px-10 py-1 rounded-md hover:bg-green-700">Submit</button>
                </div>


            </form>
        </div>
    );
}

