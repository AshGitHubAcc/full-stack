import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export default function Home() {

    const [data, setData] = useState([])


    useEffect(() => {
        fetch("http://localhost:4000/students")
        .then((res)=>{
            if (!res.ok) {
                throw new Error("HTTP Error, Status: " + res.status)
            }
            return res.json()
        })
        .then((data)=>{
            setData(data)
        })
        .catch(error=>console.log("Fetch Error: " + error))
    }, [])


    function onDelete(id) {


        fetch(`http://localhost:4000/students/${id}`,{
            method: "DELETE"
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to delete the student.")
            }
            window.location.reload()
        })
        .catch(error => console.error("Error:", error))

    }


  return (
    <div className="h-[100vh] p-5">
        
        <div className="text-gray-300 font-bold pt-10 mb-2 ">Students List</div>
        <div className="flex justify-end mb-3">

            <div className="bg-green-700 rounded-[4px] px-2 " >
                <Link to="/create">Add Student +</Link>
            </div>
        </div>

        <Table aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>Id</TableColumn>
                <TableColumn>First Name</TableColumn>
                <TableColumn>Last Name</TableColumn>
                <TableColumn>Email</TableColumn>
                <TableColumn>Age</TableColumn>
                <TableColumn>Gender</TableColumn>
                <TableColumn>Undergraduate</TableColumn>
                <TableColumn>Actions</TableColumn>

            </TableHeader>

            <TableBody emptyContent={"No Data"}>
                {

                    data.map((ele,index)=> {
                        return (
                            <TableRow key={index}>
                                <TableCell>{ele.id}</TableCell>
                                <TableCell>{ele.first_name}</TableCell>
                                <TableCell>{ele.last_name}</TableCell>
                                <TableCell>{ele.email}</TableCell>
                                <TableCell>{ele.age}</TableCell>
                                <TableCell>{ele.gender}</TableCell>
                                <TableCell>{ele.undergraduate}</TableCell>
                                <TableCell className="flex ">
                                    <div className="bg-blue-600 rounded-sm p-1">
                                        <Link to={`/read/${ele.id}`}>Read</Link>
                                    </div>
                                    <div className="mx-3 bg-blue-600 rounded-sm p-1">
                                        <Link to={`/edit/${ele.id}`}>Edit</Link>
                                    </div>
                                    <div onClick={()=>onDelete(ele.id)} className="bg-blue-600 rounded-sm p-1">Delete</div>
                                </TableCell>


                            </TableRow>
                        )
                    })
                }
            </TableBody>

        </Table>
    

    </div>
  )
}

