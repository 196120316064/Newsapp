import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state={
    progress : 0
  }
  
  setprogress=(progress)=>{
    this.setState({
      progress:progress
    })
  }

  render() {
    return (
      <>
        <Router>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Navbar />
          <Switch>
            <Route exact path="/"><News setprogress={this.setprogress}  key="General"  country={"in"} category={"General"} /></Route>
            <Route exact path="/Business"><News setprogress={this.setprogress}  key="Business"  country={"in"} category={"Business"} /></Route>
            <Route exact path="/Entertainment"><News setprogress={this.setprogress}  key="Entertainment"  country={"in"} category={"Entertainment"} /></Route>
            <Route exact path="/General"><News setprogress={this.setprogress}  key="General"  country={"in"} category={"General"} /></Route>
            <Route exact path="/Health"><News setprogress={this.setprogress}  key="Health"  country={"in"} category={"Health"} /></Route>
            <Route exact path="/Science"><News setprogress={this.setprogress}  key="Science"  country={"in"} category={"Science"} /></Route>
            <Route exact path="/Sports"><News setprogress={this.setprogress}  key="sports"  country={"in"} category={"sports"} /></Route>
            <Route exact path="/Technology"><News setprogress={this.setprogress}  key="Technology"  country={"in"} category={"Technology"} /></Route>
          </Switch>
        </Router>
      </>
    )
  }
}