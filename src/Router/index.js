import { Routes, Route} from "react-router-dom";
import  Home  from "../pages/home/index";
import Detail from "../pages/detail";

const Router = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path="/product/:id" element={<Detail />} />
        </Routes>
    )
}

export default Router;