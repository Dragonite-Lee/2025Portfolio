// App.tsx
import React from 'react';
import './App.css';
import InfoHeader from './container/InfoHeader';
import Project from './container/Project';

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <InfoHeader />
      <Project />
    </div>
  );
};

export default App;
