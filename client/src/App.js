import React from 'react';
import './App.css';
import Feed from './components/feed/Feed';
import SideBar from './components/sideBar/SideBar';
import TopBar from './components/topBar/TopBar';

function App() {
  return (
    <div className="container">
      <SideBar />
      <div className="home">
        <TopBar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
