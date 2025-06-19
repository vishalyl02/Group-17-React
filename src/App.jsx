import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";


function App()
{
  return(
    <div>
<Navbar />
   
    <Routes>
  <Route path='/' element={<Home  name="Hello" age="25"/>} />
  <Route path='/services' element={<Services/>} />
  <Route path='/contact' element={<Contact  name={'Vishal'} age={23}/>} />
  <Route path='/login' element={<Login />} />
    </Routes>
    </div>
  )
}

export default App;