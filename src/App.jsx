import Home from "./pages/Home"
import About from "./pages/About"
import Progression from "./pages/Progression"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import BackendTest1 from "./pages/BackendTest1.jsx";

function App() {

  return(
    //uses <></> to include mulitple different things
    <>
    <BrowserRouter>
      <Routes>
        <Route path ='/Example' element={<BackendTest1/>}></Route>
        <Route path="/" element = {<Home />}></Route>
        <Route path="About" element = {<About />}></Route>
        <Route path="Progress" element = {<Progression />}></Route>
      </Routes>
    </BrowserRouter>
  
</>
  )
}

export default App
