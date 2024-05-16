import Home from "./pages/Home"
import About from "./pages/About"
import Progression from "./pages/Progression"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return(
    //uses <></> to include mulitple different things
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />}></Route>
        <Route path="About" element = {<About />}></Route>
        <Route path="Progress" element = {<Progression />}></Route>
      </Routes>
    </BrowserRouter>
  
</>
  )
}

export default App
