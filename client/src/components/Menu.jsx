import React from "react";
import {data} from "../restApi.json"

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>
            Indulge in our most popular dish, the creamy butter chicken, known
            for its rich, velvety sauce and tender chicken pieces. Infused with
            aromatic spices and a hint of sweetness, it's a crowd favorite that
            promises a burst of flavor in every bite. Served with warm, fluffy
            naan, it’s a meal that’s simply irresistible.
          </p>
        </div>
        <div className="dishes_container">
            {
                data[0].dishes.map(element=>{
                    return(
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.title} />
                            <h3>{element.title}</h3>
                            <button>{element.category}</button>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  );
};

export default Menu;
