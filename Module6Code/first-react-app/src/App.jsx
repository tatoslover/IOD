import { useState } from "react";
import React from "react"; // needed for React.createElement
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import DisplayText from "./components/DisplayText";
import Welcome from "./components/Welcome";
import ProfileCard from "./components/ProfileCard";
import PropsDisplayer from "./components/PropsDisplayer";
import FullName from "./components/FullName";

function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [showLogo, setShowLogo] = useState(true);

  const fruits = ["Apple", "Banana", "Cherry"];

  const spiderman = {
    name: "Spiderman",
    alterEgo: "Peter Parker",
    catchPhrase: "With great power comes great responsibility",
  };

  // Standard JSX
  const jsxElement = <h1 className="greeting">Hello World</h1>;

  // Bypassing JSX using React.createElement
  const nojsxElement = React.createElement(
    "h1",
    { className: "greeting" },
    "Hello World",
  );

  // Pure JS representation (for illustration only, not renderable)
  const jsElement = {
    type: "h1",
    props: {
      className: "greeting",
      children: "Hello World",
    },
  };

  const spideyJSX = (
    <div style={{ border: "1px solid red", padding: "0.5rem" }}>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </div>
  );

  const spideyJSXFragment = (
    <>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </>
  );

  return (
    <>
      <h1>My First React App</h1>

      {/* Greet user */}
      <Greeting name={name || "Stranger"} />

      {/* User input */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Count controls */}
      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => setCount(count + 1)}>Count is {count}</button>
        <button onClick={() => setCount(0)} style={{ marginLeft: "1rem" }}>
          Reset
        </button>
      </div>

      {/* Toggle logos */}
      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => setShowLogo(!showLogo)}>
          {showLogo ? "Hide Logos" : "Show Logos"}
        </button>
      </div>

      {/* Conditional rendering of native elements */}
      {showLogo && (
        <div className="logos">
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </div>
      )}

      {/* List rendering */}
      <div style={{ marginTop: "1rem" }}>
        <h3>Favourite Fruits:</h3>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>

      {/* JSX vs Fragment example */}
      <div style={{ marginTop: "2rem" }}>
        <h3>Spidey JSX (with div):</h3>
        {spideyJSX}
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Spidey JSX (with fragment):</h3>
        <div style={{ border: "1px solid green", padding: "0.5rem" }}>
          {spideyJSXFragment}
        </div>
      </div>

      {/* JSX vs createElement vs object */}
      <div style={{ marginTop: "2rem" }}>
        <h3>JSX vs React.createElement</h3>
        <div>{jsxElement}</div>
        <div>{nojsxElement}</div>
        <pre>
          <code>
            {"const jsElement = " + JSON.stringify(jsElement, null, 2)}
          </code>
        </pre>
      </div>

      {/* Reusable component */}
      <DisplayText
        title="This is a reusable component"
        message="It was moved to its own file and imported into App.jsx!"
      />

      {/* Welcome component example */}
      <Welcome name="students">
        <p>This is a child element passed to the Welcome component.</p>
      </Welcome>

      <div style={{ marginTop: "2rem" }}>
        <h3>Inline Styling Example</h3>

        <div
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "darkblue", margin: 0 }}>
            Styled with Inline CSS
          </h3>
          <p>This uses a JS object for styling.</p>
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Components and Props Example</h3>

        <ProfileCard
          name="Peter Parker"
          role="Photographer / Superhero"
          bio="Loves web development. Literally."
        />

        <ProfileCard
          name="Bruce Wayne"
          role="CEO of Wayne Enterprises"
          bio="Solves bugs at night. Wears a cape."
        />
      </div>

      <div className="App">
        <h1>Props Demo</h1>

        {/* No props */}
        <PropsDisplayer />

        {/* One string prop */}
        <PropsDisplayer myProp="first prop" />

        {/* Multiple props with different types */}
        <PropsDisplayer
          prop1="first"
          prop2="second"
          prop3={3}
          prop4={{ nested: "object" }}
        />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>PropsDisplayer Examples</h3>

        {/* String and numeric props */}
        <PropsDisplayer name="Harry Styles" age={29} />

        {/* Array prop */}
        <PropsDisplayer pets={["cat", "dog", "goldfish"]} />

        {/* Variable props */}
        <PropsDisplayer reactLogo={reactLogo} buttonCount={count} />

        {/* This one is commented out because PropsDisplayer doesn't handle React elements (yet) */}
        {/*
          <PropsDisplayer component={<ExampleComponent />} />
        */}

        <p className="text-muted" style={{ fontStyle: "italic" }}>
          Almost any kind of data can be passed to a component as a prop. You
          can pass strings, numbers, arrays, objects, and even components (as
          long as the component is equipped to render them).
        </p>
        <p className="text-muted" style={{ fontStyle: "italic" }}>
          Access props in your component using <code>props.name</code>,{" "}
          <code>props.age</code>, or <code>props.pets</code>.
        </p>
      </div>

      <div className="App">
        <h1>Props Demo</h1>

        {/* Composed FullName component */}
        <FullName first="Ai" middle="Mountain" last="Shan" />

        {/* PropsDisplayer examples */}
        <PropsDisplayer name="Maple" age={4} isDog={true} />
        <PropsDisplayer
          user={{ name: "Maple", role: "Dog" }}
          hobbies={["fetch", "swimming", "eating"]}
        />
      </div>
    </>
  );
}

export default App;
