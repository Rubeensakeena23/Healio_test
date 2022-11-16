import React from "react";
import Chatbot from "../components/Chatbot";
import './Healio.css'

function Healio(){
    return <div style={{backgroundColor: 'white'}}>
        <h1 style={{color: 'black', textAlign: 'center'}}><b>Healio</b></h1>
        <Chatbot />
    </div>;
}

export default Healio