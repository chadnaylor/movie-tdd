import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import React from 'react';
import Home from "./components/Home"

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    movies:[]
  }
  // componentDidMount() {
  //   fetch("http://localhost:3001/movies")
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ movies: data }));
  // }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home movies={["hello","Hi"]} />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
