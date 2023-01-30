import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMap } from "@fortawesome/free-solid-svg-icons";

const Header = params => {
  const home = <FontAwesomeIcon icon={faHouse} className="mx-1" />;
  const sitios = <FontAwesomeIcon icon={faMap} className="mx-1" />;

  return (
    <header className="flex-[1_1_10vh] flex flex-row justify-between px-3 py-2 items-center bg-[#1a1a1a] border-b border-solid border-[#3a6635fa]">
      <div>
        <img src={Logo} alt="Logo de cayambe turismo" />
      </div>
      <nav className="navbar ">
        <ul className="flex flex-row items-center gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activeClassName text-lime-600	" : "text-slate-200")}>
              {home}Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sitios"
              className={({ isActive }) => (isActive ? "activeClassName text-lime-600	" : "text-slate-200")}>
              {sitios}Cómo llegar
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
