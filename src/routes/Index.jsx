import { Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Menu from "../pages/Menu"


const RoutesIndex = () => {
    return (
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/variables' element={<Menu/>} />
 
      </Routes>
  
    )
  }
  export default RoutesIndex