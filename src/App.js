import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Containers/mainHeader/headerComp'
import MiniHeader from './Containers/mainHeader/header2'
import AdContainer from './Containers/AdsComponents/AdComp1'
import ProductMini from './Containers/ProductMiniComp'
import ProductMiniContainer from './Containers/ProductMiniContainer'
import Temp from './Containers/AdsComponents/temp'
import Products from './Containers/ProductsPage/Products';
import NavigationHeader from './Containers/mainHeader/navigationHeader'
import QuickOrderComp from './Containers/ProductsPage/QuickOrderComp';

function App() {
  return (
    <div className="App1">
      <MiniHeader />
      <Header />
      <NavigationHeader />  
      <div className='App2'>
      <QuickOrderComp />
        
        
      </div>

    </div>
  );
}

export default App;
