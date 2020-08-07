import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import './App.css';

import Header from './components/header-component/header.component'
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'




class App extends React.Component {
  constructor(){
      super();

      this.state={
        currentUser: null
      }
  }

  unsubscribeFromAuth= null

  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged( async userAuth =>{
         
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }else{
        this.setState({currentUser: null});
      }
    })
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    var greeting=''
    if(this.state.currentUser){
       greeting= `Hello ${this.state.currentUser.displayName}, Welcome to our shop!`
    }else{
       greeting=null
    }

    return (
      <div className="App">
          <Header currentUser={this.state.currentUser} />
          <h3 className="ml-4 my-5">{greeting}</h3>
          <Switch>
              <Route exact path='/' component={Homepage}/>
              <Route path='/shop'   component={ShopPage} />
              <Route path='/signin' component={SignInAndSignUpPage} />
          </Switch>
      </div>
    );
  }  
}
export default App;
