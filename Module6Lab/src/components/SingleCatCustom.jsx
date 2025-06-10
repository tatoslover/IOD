import React from 'react';

const SingleCatCustom = ({ cat, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${cat.name}?`)) {
      onDelete(cat.id);
    }
  };

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
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleCatCustom;