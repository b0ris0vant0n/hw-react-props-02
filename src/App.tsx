import React from 'react';
import Listing from './Listing';
import items from './etsy.json';

const App: React.FC = () => {
  return (
    <div className="App">
      <Listing items={items} />
    </div>
  );
}

export default App;
