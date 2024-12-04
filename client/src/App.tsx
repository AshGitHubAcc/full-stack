import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import Read from "./components/Read"
import Add from "./components/Add"
import Edit from "./components/Edit"

function App() {

  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/read/:id' element={<Read/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>



    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
