import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Docs from './Components/Docs'
import Doc from './Components/Doc'

import './App.css'


const REACT_APP_ARTICLE_CLIENT_ID = 'oUnnduheD1B2Y2bAoIUH8pXnuYqp23it';
// REACT_APP_ARTICLE_CLIENT_SECRET='0GTRFEU2ltB7O7b7';

class App extends Component {


  state = {
    stories: [],
    loading: false
  };

  // componentDidMount (){
  //   this.handleGetRequest();
  // }

  handleGetRequest = async (e) => {

    this.setState({ loading: true })
    e.preventDefault();
    const searchTerm = e.target.elements.find.value;

    const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${REACT_APP_ARTICLE_CLIENT_ID}`);

    this.setState({ stories: res.data.response.docs, loading: false })

    console.log(this.state.stories);

  }

  // clearData=(e)=>{
  //   this.setState({stories:[], loading: false});
  // }


  render() {

    return (
      <Router>

        <nav className="navbar bg-dark">

          <h1>New York Times Data</h1>

        </nav>

        <Switch>
          <Route exact path='/' render={props => (
            <Fragment>
              <div className="container py-2">

                <form className="form py-2" onSubmit={this.handleGetRequest}>
                  <input
                    type="text"
                    placeholder="Search for terms"
                    name="find"
                  />
                  <button className="btn btn-block btn-dark my-1">Submit</button>
                  {/* <button className="btn btn-block" 
                              onClick={this.clearData}>Clear</button>    */}
                </form>

              </div>
              <Docs loading={this.state.loading} stories={this.state.stories} />
            </Fragment>
          )} />
          <Route exact path='/Doc' render={props => (
            <Doc {...props} />
          )} />
        </Switch>


      </Router>
    )

  }

}






export default App