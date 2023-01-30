import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
const hotel = <FontAwesomeIcon icon={faLocationPin} className="mx-1" />;

const Images = ({ dato, setCurrentItem }) => {
  let nameParse = dato.name.replaceAll(" ", "_").toLowerCase();
  let ur = "http://localhost:7979/images/image/" + nameParse;

  useEffect(() => {
    setCurrentItem(dato);
    const hr = document.getElementsByClassName("option");
    hr[0].className = "option active !bg-cover	!bg-center";
  }, []);

  const isActive = e => {
    setCurrentItem(dato);
    const hr = document.getElementsByClassName("option");
    for (let index = 0; index < hr.length; index++) {
      hr[index].className = "option";
    }
    e.target.className = "option active !bg-cover	!bg-center	";
  };

  return (
    <div className="option " style={{ background: "url(" + ur + ")" }} onClick={isActive}>
      <div className="shadow"></div>
      <div className="label">
        <div className="icon">{hotel}</div>
        <div className="info">
          <div className="main">{dato.name}</div>
          <div className="sub">{dato.description}</div>
        </div>
      </div>
    </div>
  );
};
export default Images;
