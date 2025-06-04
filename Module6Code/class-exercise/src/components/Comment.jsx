import UserInfo from "./UserInfo";
import FormattedDate from "./FormattedDate";

function Comment({ author, text, date }) {
  return (
    <div className="Comment componentBox">
      <UserInfo user={author} />
      <div className="Comment-text">{text}</div>
      <FormattedDate date={date} />
    </div>
  );
}

export default Comment;
