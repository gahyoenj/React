import { useState,Fragment } from 'react';

// import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
// import CoreConcept from './components/CoreConcept.jsx';
// import TabButton from './components/TabButton.jsx';
// import { EXAMPLES } from './data.js';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
 
  return (
    <>
    {/* 이렇게 empty 태그하면 fragment 대안 */}
      <Header></Header>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
