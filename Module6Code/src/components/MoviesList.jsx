// MoviesList.jsx - Component demonstrating array state management
import { useState } from "react";
import Movie from "./Movie";

// Sample movie data
const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    synopsis: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    synopsis: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests."
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    synopsis: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption."
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: 1994,
    synopsis: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold from the perspective of an Alabama man."
  }
];

function MoviesList() {
  const [currentMovies, setCurrentMovies] = useState(movies);

  const movieItems = currentMovies.map(movie => (
    <Movie 
      key={movie.id} 
      title={movie.title}
      year={movie.year} 
      synopsis={movie.synopsis}
    />
  ));

  const handleReverseMovies = () => {
    // 1. first clone the original, so we don't mutate it
    let newMovies = [...currentMovies];
    newMovies.reverse(); // 2. modify the clone
    setCurrentMovies(newMovies); // 3. set updated clone in state
  };

  const handleSortByYear = () => {
    let newMovies = [...currentMovies];
    newMovies.sort((a, b) => a.year - b.year);
    setCurrentMovies(newMovies);
  };

  const handleSortByTitle = () => {
    let newMovies = [...currentMovies];
    newMovies.sort((a, b) => a.title.localeCompare(b.title));
    setCurrentMovies(newMovies);
  };

  const handleResetOrder = () => {
    setCurrentMovies(movies);
  };

  return (
    <div className="MoviesList componentBox">
      <h2>Movies List</h2>
      
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <button onClick={handleReverseMovies}>
          Reverse List
        </button>
        <button onClick={handleSortByYear}>
          Sort by Year
        </button>
        <button onClick={handleSortByTitle}>
          Sort by Title
        </button>
        <button onClick={handleResetOrder}>
          Reset Order
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {movieItems}
      </ul>
    </div>
  );
}

export default MoviesList;