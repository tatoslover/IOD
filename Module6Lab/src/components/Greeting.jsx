import React from 'react';

const Greeting = ({ name, children }) => {
  return (
    <div className="greeting">
      <h1>Hello {name || 'World'}!</h1>
      {children && <div className="greeting-children">{children}</div>}
    </div>
  );
};

export default Greeting;