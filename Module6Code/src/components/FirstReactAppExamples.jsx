import { useState } from "react";
import React from "react"; // Required for React.createElement
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import DisplayText from "./DisplayText";
import Welcome from "./Welcome";
import ProfileCard from "./ProfileCard";
import PropsDisplayer from "./PropsDisplayer";
import FullName from "./FullName";
import FancyBox from "./FancyBox";
import Callout from "./Callout";

/* ============================
   Greeting component
   ============================ */
function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

/* ============================
   FirstReactAppExamples component
   ============================ */
function FirstReactAppExamples() {
  // React state hooks
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [showLogo, setShowLogo] = useState(true);

  // Sample data
  const fruits = ["Apple", "Banana", "Cherry"];
  const spiderman = {
    name: "Spiderman",
    alterEgo: "Peter Parker",
    catchPhrase: "With great power comes great responsibility",
  };

  // JSX element
  const jsxElement = <h1 className="greeting">Hello World</h1>;

  // React.createElement alternative to JSX
  const nojsxElement = React.createElement(
    "h1",
    { className: "greeting" },
    "Hello World",
  );

  // Plain JavaScript representation of a JSX-like element
  const jsElement = {
    type: "h1",
    props: {
      className: "greeting",
      children: "Hello World",
    },
  };

  // JSX with a wrapper div
  const spideyJSX = (
    <div style={{ border: "1px solid red", padding: "0.5rem" }}>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </div>
  );

  // Same content using React fragment
  const spideyJSXFragment = (
    <>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </>
  );

  return (
    <div className="FirstReactAppExamples componentBox">
      {/* App title */}
      <h1>My First React App Examples</h1>

      {/* Greeting message */}
      <Greeting name={name || "Stranger"} />

      {/* Name input field */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Counter and reset buttons */}
      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => setCount(count + 1)}>Count is {count}</button>
        <button onClick={() => setCount(0)} style={{ marginLeft: "1rem" }}>
          Reset
        </button>
      </div>

      {/* Show/hide logo toggle */}
      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => setShowLogo(!showLogo)}>
          {showLogo ? "Hide Logos" : "Show Logos"}
        </button>
      </div>

      {/* Conditionally rendered logos */}
      {showLogo && (
        <div className="logos">
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </div>
      )}

      {/* List rendering example */}
      <div style={{ marginTop: "1rem" }}>
        <h3>Favourite Fruits:</h3>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>

      {/* JSX with div vs fragment */}
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

      {/* JSX vs createElement vs raw JS */}
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

      {/* Reusable component example */}
      <DisplayText
        title="This is a reusable component"
        message="It was moved to its own file and imported into App.jsx!"
      />

      {/* Welcome component with children */}
      <Welcome name="students">
        <p>This is a child element passed to the Welcome component.</p>
      </Welcome>

      {/* Inline CSS styling example */}
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

      {/* Components with props */}
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

      {/* PropsDisplayer examples */}
      <div style={{ marginTop: "2rem" }}>
        <h3>Props Demo</h3>

        {/* No props */}
        <PropsDisplayer />

        {/* One prop */}
        <PropsDisplayer myProp="first prop" />

        {/* Multiple props of different types */}
        <PropsDisplayer
          prop1="first"
          prop2="second"
          prop3={3}
          prop4={{ nested: "object" }}
        />
      </div>

      {/* Advanced PropsDisplayer examples */}
      <div style={{ marginTop: "2rem" }}>
        <h3>PropsDisplayer Examples</h3>

        <PropsDisplayer name="Harry Styles" age={29} />
        <PropsDisplayer pets={["cat", "dog", "goldfish"]} />
        <PropsDisplayer reactLogo={reactLogo} buttonCount={count} />

        <p className="text-muted" style={{ fontStyle: "italic" }}>
          Almost any kind of data can be passed to a component as a prop.
        </p>
        <p className="text-muted" style={{ fontStyle: "italic" }}>
          Access props in your component using <code>props.name</code>,{" "}
          <code>props.age</code>, or <code>props.pets</code>.
        </p>
      </div>

      {/* More props usage examples */}
      <div style={{ marginTop: "2rem" }}>
        <h3>More Props Demo</h3>

        <FullName first="Ai" middle="Mountain" last="Shan" />

        <PropsDisplayer name="Maple" age={4} isDog={true} />
        <PropsDisplayer
          user={{ name: "Maple", role: "Dog" }}
          hobbies={["fetch", "swimming", "eating"]}
        />
      </div>

      <FancyBox>
        <p>This is inside a FancyBox!</p>
      </FancyBox>

      {/* Composed Callout component */}
      <Callout
        title="Nested React Component"
        message="Simple message with a fancy box applied via composition"
      >
        <FullName first="Elon" last="Musk" />
      </Callout>
    </div>
  );
}

export default FirstReactAppExamples;