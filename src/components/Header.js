import React from "react";
import { Link } from "gatsby";

import AdvLogo from "@assets/images/adv.svg";
import Container from "@components/Container";



const Header = () =>{
  return(
    
<header className="header">

      <nav>
      <Container >
          <section className="container nav">
         
        <div className="adv">
            <AdvLogo className="nav"/>
          
            </div>
              <div className="enlaces-header">
               <a>
               <Link to="/escritorio/">INÍCIO</Link>
               </a>
               <a href="#">QUEM SOMOS</a>
               <a href="#">ÁREAS DE ATUAÇÃO</a>
               <a href="#">EQUIPE</a>
               <a href="#">NOTÍCIAS</a>
               <a href="#">CONTATO</a>
            </div>
            <div className="hamburguer">
                 <i className="fas fa-bars"></i>
            </div>
            
          </section>
          </Container>
      </nav>
      
      </header>
      
  )

}
export default Header;

<script src="https://kit.fontawesome.com/35a0b6099f.js" crossorigin="anonymous"></script>




































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