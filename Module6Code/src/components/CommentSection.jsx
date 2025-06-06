// CommentSection.jsx - Component demonstrating React component composition
import Comment from "./Comment";
import kendrickAvatar from "../assets/avatars/kl.jpeg";
import taylorAvatar from "../assets/avatars/ts.jpeg";
import edAvatar from "../assets/avatars/es.jpeg";

// Sample data for comments
const commentsData = [
  {
    id: 1,
    author: {
      name: "Kendrick Lamar",
      avatarUrl: kendrickAvatar,
    },
    text: `"bing bop boom boom boom bop bam"`,
    date: new Date("2024-01-15T10:30:00"),
  },
  {
    id: 2,
    author: {
      name: "Taylor Swift",
      avatarUrl: taylorAvatar,
    },
    text: `"I don't like sea urchins. You could lose your hand, you could lose your foot. You could lose your hand getting it off your foot!"`,
    date: new Date("2024-01-14T14:45:00"),
  },
  {
    id: 3,
    author: {
      name: "Ed Sheeran",
      avatarUrl: edAvatar,
    },
    text: `“Sometimes I think my guitar is plotting to replace me. It’s definitely got a better hair day.”`,
    date: new Date("2024-01-13T09:20:00"),
  },
];

function CommentSection() {
  return (
    <div className="CommentSection componentBox">
      <div className="CommentSection-header">
        <h2>🎤 Music Fan Comments</h2>
        <p>Exploring component composition in React</p>
      </div>

      <div className="CommentSection-content">
        {commentsData.map((comment) => (
          <Comment
            key={comment.id}
            author={comment.author}
            text={comment.text}
            date={comment.date}
          />
        ))}
      </div>

      <div className="CommentSection-footer">
        <small>
          Demonstrating component composition with Avatar, UserInfo, and
          FormattedDate
        </small>
      </div>
    </div>
  );
}

export default CommentSection;
