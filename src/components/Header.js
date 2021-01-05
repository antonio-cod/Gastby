import React from "react";
import { Link } from "gatsby";

import AdvLogo from "@assets/images/adv.svg";
import Container from "@components/Container";
// import Menuzin from "@assets/images/bars-solid.svg";

const Header = () =>{
  return(
    <header className="header">
      <Container >
         
        {/* <div className="adv">
            <AdvLogo className="nav"/>
        </div> */}
        {/* <div class="menu-section">
          <div class="menu-toggle">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
          </div> */}
             
                <ul>
               <li>
               <Link to="/">INÍCIO</Link>
               </li>

               <li>
               <Link to="/">QUEM SOMOS</Link>
               </li>

               <li>
               <Link to="/">ÁREA ATUAÇÃO</Link>
               </li>

               <li>
               <Link to="/">EQUIPE</Link>
               </li>

               <li>
               <Link to="/">NOTÍCIAS</Link>
               </li>

               <li>
               <Link to="/">CONTATO</Link>
               </li>

               </ul>
             
            {/* <div className="hamburguer">
            <img src="assets/images/bars-solid.svg" alt="Menu"/>
            </div> */}
            
        
          </Container>
     
      
      </header>
      
  );

};



export default Header;





































{/* const Header = () => { 
  const onClickContact = e => {
    e.preventDefault();
    document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <Container>
        <Link to="/" className="logo">
          <img src={LogoImg} />
        </Link>
        <ul>
          <li>
            <Link to="/escritorio/">O ESCRITÓRIO</Link>
          </li>

          <li>
            <Link to="/abnt/">CERTIFICAÇÃO</Link>
          </li>

          <li>
            <Link to="/equipe/">EQUIPE</Link>
          </li>

          <li>
            <Link to="/unidades/">UNIDADES</Link>
          </li>

          <li>
            <a href="#contato" onClick={onClickContact}>
              CONTATO
            </a>
          </li>

           //<li>
           // <Link to="/noticias/">Noticias</Link>
         // </li> 
        </ul>
      </Container>
    </header>
  );
};

export default Header;


*/}