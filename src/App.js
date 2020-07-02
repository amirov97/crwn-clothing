import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import {Route, Switch} from 'react-router'
import Header from "./components/header/header";
import AuthPage from "./pages/authentication/authentication";
import {auth} from "./firebase/firebase.utils";


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            currentUser : null
        }

    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth= auth.onAuthStateChanged(user =>{
            this.setState({currentUser:user})
            console.log(user)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/shop' component={ShopPage}/>
                    <Route exact path='/signin' component={AuthPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
