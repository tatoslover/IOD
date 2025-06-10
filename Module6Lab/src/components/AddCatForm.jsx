import React, { useState } from 'react';

const AddCatForm = ({ onAddCat }) => {
  const [formData, setFormData] = useState({
    name: '',
    latinName: '',
    image: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name.trim() || !formData.latinName.trim() || !formData.image.trim()) {
      alert('Please fill in all fields');
      return;
    }

    // Call parent function to add the cat
    onAddCat(formData);
    
    // Reset form
    setFormData({
      name: '',
      latinName: '',
      image: ''
    });
  };

  return (
    <div className="add-cat-form-container">
      <h3>Add a New Big Cat</h3>
      <form onSubmit={handleSubmit} className="add-cat-form">
        <div className="form-group">
          <label htmlFor="name">Cat Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter cat name (e.g., Lion)"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="latinName">Latin Name:</label>
          <input
            type="text"
            id="latinName"
            name="latinName"
            value={formData.latinName}
            onChange={handleInputChange}
            placeholder="Enter latin name (e.g., Panthera leo)"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            placeholder="Enter image URL"
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">
          Add Cat
        </button>
      </form>
    </div>
  );
};

export default AddCatForm;