import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Home() {

    const [people, setPeople] = useState([])
    const [deleted, setDeleted] = useState(false)


    async function onDelete(id: number) {
        
        const response = await fetch(`http://localhost:4000/students/${id}`,{
            method:'DELETE'
        })
        if (response.ok) {
            setDeleted(!deleted)
        }
    }


    useEffect(()=>{
        async function fetchData() {

            const response = await fetch("http://localhost:4000/students")
            const data = await response.json()
            setPeople(data)
        }
        fetchData()

    },[deleted])

    return (
        <div className="flex flex-col justify-center items-center w-[1000px] mt-20">
            <div>
                <h1 className="text-4xl font-bold text-gray-400 mb-20">
                    Campus List
                </h1>
            </div>

            <div className="w-full flex justify-end my-2">
                <Link className="bg-blue-800 text-xl text-gray-200 px-4 py-2 rounded hover:bg-blue-900" to="/">Add +</Link>
            </div>

            <div className="flex justify-center overflow-auto max-h-[340px] rounded-lg w-[100%]">
                <table className="relative w-[1000px]">
                    <thead>
                        <tr>
                            <th className="sticky top-0 px-6 py-3 text-gray-300 bg-gray-500">Name</th>
                            <th className="sticky top-0 px-6 py-3 text-gray-300 bg-gray-500">Email</th>

                            <th className="sticky top-0 px-6 py-3 text-gray-300 bg-gray-500 ">Major</th>
                            <th className="sticky top-0 px-6 py-3 text-gray-300 bg-gray-500 ">Undergraduate</th>

                            <th className="sticky top-0 px-6 py-3 text-gray-300 bg-gray-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-600">
                        {
                            people.map((ele: any, index) => (
                                <tr className="hover:bg-gray-700" key={index}>
                                    <td className="px-6 py-4 text-center text-gray-300">{ele.first_name + " " + ele.last_name}</td>
                                    <td className="px-6 py-4 text-center text-gray-300 border-l border-gray-500">{ele.email}</td>
                                    <td className="px-6 py-4 text-center text-gray-300 border-l border-r border-gray-500">{ele.major}</td>
                                    <td className="px-6 py-4 text-center text-gray-300 border-l border-r border-gray-500">{ele.undergraduate === 1? "Yes" : "No"}</td>

                                    <td className="flex justify-around px-6 py-4">
                                        <Link to={`/read/${ele.id}`} className="text-gray-300 bg-gray-500 px-3 py-2  rounded-md hover:bg-gray-600" >Read</Link>
                                        <button className="text-gray-300 bg-gray-500 px-3 py-2 mx-2 rounded-md hover:bg-gray-600">Edit</button>
                                        <button onClick={()=>onDelete(ele.id)} className="text-gray-300 bg-gray-500 px-3 py-2  rounded-md hover:bg-gray-600">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
