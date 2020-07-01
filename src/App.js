import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import {Route, Switch} from 'react-router'


function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/shop' component={ShopPage}/>
            </Switch>
        </div>
    );
}

export default App;
