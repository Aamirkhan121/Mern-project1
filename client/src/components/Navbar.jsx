import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "../restApi.json";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate=useNavigate()
  return (
    <>
      <nav>
        <div className="logo" onClick={()=>navigate("/")}> <img src="/kgi-logo.png" alt="" /> </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => {
              return (
                <Link
                  to={element.link}
                  key={element.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {element.title}
                </Link>
              );
            })}
          </div>
          <button className="menuBtn" onClick={()=>navigate("/ourmenu")}>OUR MENU</button>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
