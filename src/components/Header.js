import React, { useState } from "react";
import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import AdvLogo from "@assets/images/adv.svg";
// import Container from "@components/Container";
// import Menu from"@components/Menu";
    
function Header (){
    const [click, setClick] = useState(false);  
    const handleClick = () => setClick(!click);  
    const closeMobileMenu = () => setClick(false);
      
  return(  
    <header className="header">         
     <>   
        <nav className="navbar">  
               {/* <div className="local-logo">
               <AdvLogo  className="navbar-logo"/>        
               </div>   */}          
                                 
        {/*bkp-menu  */}      
           <div className="menu-icon" onClick={handleClick} >    
            
             {click ? <FaTimes/> : <FaBars/>}                       
          </div> 
       
        <ul className={click ? 'nav-menu active' : 'nav-menu close'}>
        <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}
                >
                    INICIO    
                </Link>
            </li> 
            <li className='nav-item'>
                <Link to='/saude' className='nav-links' onClick={closeMobileMenu}  
                >
                    QUEM SOMOS  
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/areas_atuacoes' className='nav-links' onClick={closeMobileMenu}>
                  ÁREAS DE ATUAÇÃO   
                </Link>     
            </li>   
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  NOTÍCIAS     
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  EQUIPE
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}
                >
                    CONTATO
                </Link>
            </li>
           </ul>
      
           </nav>
        </>
      </header>
     );
  }

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