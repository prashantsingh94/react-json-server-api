import { Link } from "react-router-dom";
import useCustomScreen from "../hooks/useCustomScreen";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from "react";
import { faLaptop, faMobileAlt, faTabletAlt, faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons'
import themeContext from "../context/themeContext";
//import { FaLaptop } from "react-icons/fa"; // This is from react-icon style

const Header = ({toggleTheme}) => {
  //console.log(useCustomScreen())
  const {width} = useCustomScreen();
  const theme = useContext(themeContext);
  return (
    <header className="header-section">
      <span className="site-logo"><Link to="/">BookStoreApp</Link></span>
      <section className="site-header-right">
       {width < 768 ? <FontAwesomeIcon icon={faMobileAlt} />
       : width < 992 ? <FontAwesomeIcon icon={faTabletAlt} /> :
       <FontAwesomeIcon icon={faLaptop} />
       }


       <nav className="nav-bar">
        <ul>
        <li><Link to="/about" >About</Link></li>
        <li><Link to="/author">Author</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <span style={{cursor: "pointer"}} onClick={toggleTheme}>
          {(theme === 'light') ? <FontAwesomeIcon icon={faMoon} />
           : <FontAwesomeIcon  icon={faLightbulb} /> }
        </span>

      </section>
    </header>
  )
}

export default Header