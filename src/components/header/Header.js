import "./Header.css";
import Button from "../button/Button";
import Logo from "../logo/Logo"
import { useHistory } from "react-router-dom"


const Header = ({button,button2, text, icons}) => {
  const history = useHistory();
  return (
    <div className="header_container">
      <div className="logo_container">
        <Logo/>
      </div>
      <div>{icons}</div>
      <div className="buttons_container">
        <div className="text_container">
          <p>{text}</p>
        </div>
        <div>{button}</div>
        <div>{button2}</div>
        
       
      </div>
    </div>
  );

};

export default Header;