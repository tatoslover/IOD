import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import BigCats from './components/BigCats';
import BigCatsExtended from './components/BigCatsExtended';
import BigCatsCustom from './components/BigCatsCustom';
import Emoji from './components/Emoji';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Module 6 Lab</h1>
      </header>
      
      <section>
        <h2>Exercise 1 - Greetings</h2>
        
        {/* Basic Greeting without name prop */}
        <Greeting />
        
        {/* Greeting with name prop */}
        <Greeting name="John" />
        
        {/* Greeting with name prop and children */}
        <Greeting name="Sarah">
          Welcome to our React application!
        </Greeting>
        
        {/* Greeting with only children (no name) */}
        <Greeting>
          This is a greeting message via children props.
        </Greeting>
        
        {/* Another example with name and children */}
        <Greeting name="Alex">
          Hope you're having a great day learning React!
        </Greeting>
      </section>
      
      <section>
        <h2>Exercise 2 - Big Cats</h2>
        <BigCats />
      </section>
      
      <section>
        <h2>Exercise 3 - Emoji Mood Switcher</h2>
        <Emoji />
      </section>
      
      <section>
        <h2>Exercise 4 - Big Cats Extended</h2>
        <BigCatsExtended />
      </section>
      
      <section>
        <h2>Exercise 5 - Big Cats Custom</h2>
        <BigCatsCustom />
      </section>
      
      <section>
        <h2>Exercise 6 - Calculator</h2>
        <Calculator />
      </section>
    </div>
  );
}

export default App;