import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import City from './pages/City';
import RestaurantDetail from './pages/RestaurantDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/city/:city_id" component={City} />
          <Route path="/restaurant/:restaurant_id" component={RestaurantDetail} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
