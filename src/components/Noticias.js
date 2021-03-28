import React from "react";
import imageNot from "@assets/images/1.jpg";
import Container from "./Container";


const Noticias = () => {
    return(   
        
        <div className="noticias">
           
          <div className="informacao">
          <h2>ÚLTIMAS NOTÍCIAS JURÍDICAS</h2>
          <div className="cards">
                
            <div className="card">     
               <img src={imageNot} alt="FOTO"></img>
            <div className="content">   
                <h3>Twitter diz que vai recorrer de decisão do STF que 
                    bloqueou conta de bolsonaristas: 'Desproporcional sob 
                    a ótica do regime de liberdade de expressão'.</h3>  
                    <p className="title-t text--medium">O Twitter afirmou em nota nesta quinta-feira (30) que irá 
                    recorrer da decisão do Supremo Tribunal Federal (STF) que 
                    bloqueou contas de bolsonaristas na rede social. "Embora não 
                    caiba ao Twitter defender a legalidade do conteúdo postado ou
                    a conduta das pessoas impactadas pela referida ordem,
                    a empresa considera a determinação ou a conduta das pessoas
                    impactadas pela referida ordem, a empresa considera.</p> 
                    <div className="info">
                     <a  href="#">SAIBA MAIS</a>
                     </div>
            </div>     
            </div>       
                          
            <div className="card">     
                <img src={imageNot} alt="FOTO"></img>
            <div className="content">
                <h3>Ministro cobra informações de bancos oficiais e Secom sobre investimento em redes sociais.</h3>
                <p className="title-t text--medium">O ministro Alexandre de Moraes, do Supremo Tribunal Federal (STF), 
                    determinou que três bancos públicos e a Secretaria Especial de Comunicação 
                    Social (Secom) do governo Bolsonaro prestem informações sobre investimentos
                    feitos em redes socais. A decisão é um desdobramento do inquérito das fake
                    news, que apura ataques e ameaças a integrantes do STF e a disseminação de
                    informações falsas. A TV Globo 
                    apurou que a ordem do ministro envolve Banco Nacional do Desenvolvimento.</p>
                    <div className="info">
                   <a href="#">SAIBA MAIS</a>
                </div> 
            </div>
            </div>         
       
            <div className="card">
            <img src={imageNot} alt="FOTO"></img>
            <div className="content">
                <h3>Moraes determina bloqueio de contas de bolsonaristas
                     em redes sociais no exterior.</h3>
                     <p className="title-t text--medium">1 de 1 Alexandre de Moraes, ministro do 
                     STF — Foto: Rosinei Coutinho/SCO/STF O ministro Alexandre de Moraes, do Supremo
                     Tribunal Federal (STF), determino o bloqueio de contas de 16 apoiadores do presidente 
                     Jair Bolsonaro em redes sociais também no exterior. Moraes considerou que houve cumprimento
                     parcial da decisão, o que acarreta imposição de multa. Segundo o ministro,
                     a exclusão das contas deve ocorrer independentemente do acesso a essas.</p>
                 <div className="info">
                    <a href="#">SAIBA MAIS</a>
                </div> 
            </div>       
            </div>
            
            </div>
            </div>
            
            </div>
    )
} 

export default Noticias;