import React from 'react';
// import './App.css';
// import Header from './Containers/mainHeader/headerComp'
// import MiniHeader from './Containers/mainHeader/header2'
// import AdContainer from './Containers/AdsComponents/AdComp1'
// import ProductMini from './Containers/ProductsPage/ProductMiniComp'
// import ProductMiniContainer from './Containers/ProductsPage/ProductMiniContainer'
// import Temp from './Containers/AdsComponents/temp'
// import Products from './Containers/ProductsPage/Products';
// import NavigationHeader from './Containers/mainHeader/navigationHeader'
// import QuickOrderComp from './Containers/ProductsPage/QuickOrderComp';
// import Temp2 from './Containers/temp2';

import './BC/BCCSS.css'
import Home from './BC/Home';
import Rooms from './BC/Rooms';
import SingleRoom from './BC/SingleRoom'
import ErrorPage from './BC/ErrorPage';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Navbar from './BC/Navbar';

function App() {
  return (
    <div>
  
    <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms' component={Rooms} />
        <Route exact path='/rooms/:ad' component={SingleRoom} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
