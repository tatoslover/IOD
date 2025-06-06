// Movie.jsx - Component to display individual movie data
import React from "react";

function Movie({ title, year, synopsis }) {
  return (
    <li style={{ 
      marginBottom: '1rem', 
      padding: '1rem', 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      backgroundColor: '#f8f9fa'
    }}>
      <h4 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>
        {title} ({year})
      </h4>
      <p style={{ margin: 0, color: '#666', lineHeight: '1.4' }}>
        {synopsis}
      </p>
    </li>
  );
}

export default Movie;