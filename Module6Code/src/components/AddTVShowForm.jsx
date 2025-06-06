import { useState } from 'react';

function AddTVShowForm({ onAddTVShow }) {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [synopsis, setSynopsis] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Only add if all fields are filled
    if (title.trim() && year.trim() && synopsis.trim()) {
      onAddTVShow({ title, year, synopsis });
      // Clear form after submission
      setTitle('');
      setYear('');
      setSynopsis('');
    }
  };

  return (
    <div className="AddTVShowForm componentBox">
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>TV Show Title:
            <input 
              name="title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Enter TV show title"
            />
          </label>
        </div>
        <div className="formRow">
          <label>Year Released:
            <input 
              name="year" 
              type="number" 
              value={year} 
              onChange={(e) => setYear(e.target.value)} 
              placeholder="Enter release year"
            />
          </label>
        </div>
        <div className="formRow">
          <label>Synopsis:
            <textarea 
              name="synopsis" 
              value={synopsis} 
              onChange={(e) => setSynopsis(e.target.value)} 
              placeholder="Enter synopsis"
              rows="3"
            />
          </label>
        </div>
        <div className="formRow">
          <button type="submit">Add TV Show</button>
        </div>
      </form>
    </div>
  );
}

export default AddTVShowForm;