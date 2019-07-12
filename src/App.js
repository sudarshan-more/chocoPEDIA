import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import signup from './components/Signup';
import Navbar from './components/Navbar';
import Footer from './Footer';
import login from './components/Login'
import { BrowserRouter,Route, Switch, Redirect} from "react-router-dom"



function App() {
  return (
    <div>
    <BrowserRouter>
    <Header />
    <Navbar />
    <Switch>
      <Route path ="/" exact component ={()=><h1>HOME</h1>} />
      <Route path ="/brand"exact component ={()=><h1>Brands</h1>} />
      <Route path="/chocolates" exact component={()=><h1>chocolates</h1>}/>
      <Route path="/signup" exact component={signup}/>
      <Route path="/login" exact component={login}/>
    </Switch>
    </BrowserRouter>
    <Footer />
    </div>
   
  );
}

export default App;
