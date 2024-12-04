import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import Read from "./components/Read"

function App() {

  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/read/:id' element={<Read/>}/>

    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
