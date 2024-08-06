import React from 'react';

const OurMenu = ({ dishes }) => {
  return (
    <section className="qualities">
        <div className="container">
      {dishes.map((dish) => (
        <div key={dish.id} className="card">
            <img height={140}  src={dish.image} alt="img" />
          <h3>{dish.name}</h3>
          <p className='description'>{dish.description}</p>
          <p>${dish.price}</p>
        </div>
      ))}
    </div>
    </section>
  );
};

export default OurMenu;


