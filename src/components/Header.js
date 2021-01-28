import React, { useState } from "react";
import { Link } from "gatsby";

import AdvLogo from "@assets/images/adv.svg";
import Container from "@components/Container";
import Menu from"@components/Menu";

// import Menuzin from "@assets/images/bars-solid.svg";

const Header = () =>{
  const [show, setShow] = useState(false);
  function openMenu () {
    // menuToggle = () => {
      if (!show) {
        setShow(true);
      } else {
        setShow(false);
      }
      // document.body.style.overflow = show ? "hidden" : "initial"
     const menu = document.querySelector(".menu-section");

     show ? menu.classList.add("on") : menu.classList.remove("on");
      // menuSection.classList.toggle("on", show)
  // }
  }
  return(
    <header className="header">
      <Container >
         
        {/* <div className="adv">
            <AdvLogo className="nav"/>
        </div> */}
        <div className="menu">
      
         <div className="menu-section">
          <button type="button" className="menu-toggle" onClick = {()=> openMenu()}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            
          </button> 
          
             <nav>                
                <ul>
               <li>
               <Link to="/">INÍCIO</Link>
               </li>

               <li>
               <Link to="/">SOBRE</Link>
               </li>

               <li>
               <Link to="/">ATUAÇÃO</Link>
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
             </nav>
             </div>
            </div>
            
          </Container>
     
      
      </header>
      
  );

};

{/* <script src="Menu.js"></script> */}

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