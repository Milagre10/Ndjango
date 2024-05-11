
import React from "react";
import './Home.css'
import Card from "../../components/Card/Card";

function Home(){
    let Cards = [];
    for(let i =0; i<4; i++){
        Cards.push(<Card key={i}/>)
    }

    return(
        <>
            <div className="header">
                <h2>Encontre a casa que procuras</h2>
            </div>
            <div className="wrapper">
                {Cards}
            </div>
        </>
    )
}
export default Home;