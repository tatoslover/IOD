import { useState } from 'react';
import AddTVShowForm from './AddTVShowForm';

function TVShowsList() {
  // Initial TV shows data
  const [currentTVShows, setCurrentTVShows] = useState([
    {
      id: 1,
      title: "Breaking Bad",
      year: "2008",
      synopsis: "A high school chemistry teacher turned methamphetamine manufacturer."
    },
    {
      id: 2,
      title: "Stranger Things",
      year: "2016",
      synopsis: "Kids in a small town encounter supernatural forces and secret government experiments."
    },
    {
      id: 3,
      title: "The Office",
      year: "2005",
      synopsis: "A mockumentary sitcom about office employees working at a paper company."
    }
  ]);

  // Function to handle adding a new TV show
  const handleAddTVShow = (newTVShow) => {
    newTVShow.id = currentTVShows.length + 1; // unreliable but succinct
    setCurrentTVShows([...currentTVShows, newTVShow]);
  };

  // Function to remove a TV show
  const handleRemoveTVShow = (id) => {
    setCurrentTVShows(currentTVShows.filter(show => show.id !== id));
  };

  return (
    <div className="TVShowsList componentBox">
      <h2>TV Shows Collection</h2>
      <p>Add your favorite TV shows to the list below!</p>
      
      {/* Form for adding new TV shows */}
      <AddTVShowForm onAddTVShow={handleAddTVShow} />
      
      <div className="shows-grid">
        {currentTVShows.map((show) => (
          <div key={show.id} className="show-card">
            <h3>{show.title}</h3>
            <p className="show-year">Released: {show.year}</p>
            <p className="show-synopsis">{show.synopsis}</p>
            <button 
              onClick={() => handleRemoveTVShow(show.id)}
              className="remove-button"
            >
              Remove Show
            </button>
          </div>
        ))}
      </div>
      
      <div className="shows-count">
        <p>Total TV Shows: {currentTVShows.length}</p>
      </div>
    </div>
  );
}

export default TVShowsList;