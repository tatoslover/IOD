import React from 'react';

const SingleCat = ({ cat }) => {
  return (
    <div className="single-cat">
      <div className="cat-image-container">
        <img 
          src={cat.image} 
          alt={cat.name}
          className="cat-image"
        />
      </div>
      <div className="cat-info">
        <h3 className="cat-name">{cat.name}</h3>
        <p className="cat-latin-name">{cat.latinName}</p>
      </div>
    </div>
  );
};

export default SingleCat;