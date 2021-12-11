import React from 'react';
import './App.css';
import SideBar from './components/sideBar/SideBar';
import TopBar from './components/topBar/TopBar';

function App() {
  return (
    <div className="container">
      <SideBar />
      <div className="home">
        <TopBar />
      </div>
    </div>
  );
}

export default App;
