import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="h-[100vh] p-10">
        
        <div className="text-gray-300 font-bold pt-10 mb-2 ">Students List</div>
        <div className="flex justify-end mb-3">

            <div className="bg-green-700 rounded-[4px] px-2 " >
                <Link to="/create">Create +</Link>
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
            </TableHeader>

            <TableBody emptyContent={"No Data"}>
            </TableBody>
        </Table>
    

    </div>
  )
}