// src/components/DisplayText.jsx
function DisplayText({ title, message }) {
  return (
    <div className="DisplayText componentBox">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  )
}

export default DisplayText