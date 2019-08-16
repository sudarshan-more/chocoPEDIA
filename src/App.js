import React from 'react';
import './App.css';
import Header from './Header';
import Signup from './components/Signup';
import NavBar from './components/NavBar';
import Footer from './Footer';
import Login from './components/Login';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Chocolates from './components/Chocolates';
import Brands from './components/Brands';
import BrandDetails from './components/BrandDetails';
import Home from './components/Home';
import Search from './components/Search';
import ChocolatesItemDetails from './components/ChocolatesItemdetail';

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/brands" exact component={Brands} />
					<Route path="/home" exact component={Home} />
					<Route
						path="/brands/:id"
						exact
						render={(props) => {
							return <BrandDetails {...props} />;
						}}
					/>
					<Route path="/chocolates/:id" exact component={ChocolatesItemDetails} />
					<Route path="/chocolates" exact component={Chocolates} />
					<Route path="/login" exact component={Login} />
					<Route path="/signup" exact component={Signup} />
					<Route path="/search/:searchval?" exact component={Search} />
				</Switch>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
