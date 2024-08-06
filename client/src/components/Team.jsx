import React from "react";
import {data} from "../restApi.json"

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Our Master Chef team comprises skilled culinary artisans dedicated
            to crafting exquisite dishes with precision and passion. With a
            wealth of expertise and a commitment to innovation, they
            consistently elevate dining experiences to new heights. Together,
            they create culinary masterpieces that delight and inspire.
          </p>
        </div>
        <div className="team_container">
            {
                data[0].team.map(element=>{
                    return(
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.name} />
                            <h3>{element.name}</h3>
                            <p>{element.designation}</p>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  );
};

export default Team;
