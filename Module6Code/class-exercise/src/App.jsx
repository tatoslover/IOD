// App.jsx

import Comment from "./components/Comment";
import "./App.css";

// Data object representing the author
const author = {
  name: "Kendrick Lamar",
  avatarUrl: "https://i.redd.it/ypc0fpvf53ae1.jpeg",
};

// Text and date of the comment
const commentText = '"bing bop boom boom boom bop bam"';
const commentDate = new Date();

function App() {
  return (
    <div className="App">
      {/* App header */}
      <header className="App-header">
        <h1>🎤 Music Fan Comments</h1>
        <p>Exploring component composition in React</p>
      </header>

      {/* Main comment section */}
      <main>
        <Comment author={author} text={commentText} date={commentDate} />
      </main>

      {/* Footer */}
      <footer className="App-footer">
        <small>Made with React</small>
      </footer>
    </div>
  );
}

export default App;
