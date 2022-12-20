import React from "react";
import './style.css';
import { useLocation, useParams } from "react-router-dom";
import Card from "../../components/card";
import NavBar from "../../components/NavBar";

const Detail = () => {
    const { id } = useParams() || {};
    const { state } = useLocation() || {};

    console.log('state: ', state);
    console.log("id: ", state.id);
    console.log("id probar (sale mal): ", id);

    return(
        <div>
            <NavBar />
            <Card product={state} key={state?.name} onSelect={() => {}} />
        </div>
    )
}

export default Detail;