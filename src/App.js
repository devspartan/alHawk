import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Containers/mainHeader/headerComp'
import MiniHeader from './Containers/mainHeader/header2'
import AdContainer from './Containers/AdsComponents/AdComp1'
import ProductMini from './Containers/ProductMiniComp'
import ProduactMiniContainer from './Containers/ProductMiniContainer'

function App() {
  return (
    <div className="App1">
      <MiniHeader />
      <Header />
      <div className='App2'>
        <AdContainer />
        <ProductMini />
      </div>

    </div>
  );
}

export default App;
