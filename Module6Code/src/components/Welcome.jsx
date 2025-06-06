// src/components/Welcome.jsx

function Welcome(props) {
  return (
    <div className="Welcome componentBox">
      {props.name && <h3>Welcome {props.name}!</h3>}
      {props.children}
    </div>
  )
}

export default Welcome