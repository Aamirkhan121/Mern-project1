import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">About Us</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            maxime nulla dolorem vitae ipsum sapiente illo reprehenderit ipsam
            quia odit quod, voluptas beatae consequuntur voluptatem adipisci
            similique, eum, maiores vero distinctio dolorum repellendus?
            Incidunt culpa odit rerum rem molestias. Cumque fugit repudiandae,
            rerum ullam natus quod eaque deleniti saepe similique?
          </p>
          <Link to={"/"}>Explore Menu {" "} <span><HiOutlineArrowNarrowRight/></span></Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
