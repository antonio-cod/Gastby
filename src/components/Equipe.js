import React from "react";
import Container from "./Container";

const Equipe = () => {
    return(
        
        <div className="equipe">
           <div className="equipe-ground">
           <h2>EQUIPE</h2>
           <div className="equipe-card"> 
           
            <div class="equipe-informacao">
                <h3>Dr. HERRIQUE DE SOUZA MENDONÇA</h3>
                <p>OAB/MT 23.410</p>
            </div>
            
            <div className="equipe-informacao">
                <h3>Dr. LETICIA LANCELOTTI FÁVERO</h3>
                <p>OAB/MT 25.904</p>
            </div>
            
            <div className="equipe-informacao">
                <h3>Dr. RAFAEL SOARES DOS REIS GRILO</h3>
                <p>OAB/MT 23.399</p>
                <a>Sócio/Diretor</a>
            </div>

            <div className="equipe-informacao">
                <h3>Dr. FLÁVIO DE AZEVEDO SILVA</h3>
                <p>OAB/MT 26.444</p>
                <a>Sócio/Diretor</a>
            </div>
            </div>
            </div>
            </div>

    )
} 

export default Equipe;