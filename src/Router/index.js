import { Routes, Route} from "react-router-dom";
import  Home  from "../pages/home/index";
import Detail from "../pages/detail";
import LogIn from "../pages/log-in";
import Register from "../pages/register";
import Carrito from "../pages/carrito";

const Router = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path="/product/:id" element={<Detail />} />
            <Route exact path='/log-in' element={<LogIn />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/carrito' element={<Carrito />} />
        </Routes>
    )
}

export default Router;