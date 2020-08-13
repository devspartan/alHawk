import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Containers/mainHeader/headerComp'
import MiniHeader from './Containers/mainHeader/header2'
import AdContainer from './Containers/AdsComponents/AdComp1'


function App() {
  return (
    <div className="App1">
      <MiniHeader />
      <Header />
      <div className='App2'>
        <AdContainer />
      </div>

    </div>
  );
}

export default App;
