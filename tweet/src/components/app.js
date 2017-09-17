import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import Tweets from './tweets';
import Map from './map';
import '../styles/styles.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: false,
      intervalId: null,
      data: null
    };
    this.hashSearch = this.hashSearch.bind(this);
  }
  hashSearch(search){
    var Twitter = require("twitter");
    var client = new Twitter({
      consumer_key: "brZpMHFtzq9IzAZmKOx8WQT28",
      consumer_secret: "O5t8LTLzhLeTuqzpDofLELPCuSe1iKEcCFN34b2265wcbYlcg",
      access_token_key: "2389849267-0b7vQ3s08M0UA8YTXzG8Bsgyl2sVn0kkuOGIJxK",
      access_token_secret: "GzsoPxwxwxvdaoNbkYDfyy7vKJTA3KZA1MCxDqKqn47oO"
    });
    var proxy = "https://cors-anywhere.herokuapp.com/";
    client.get("https://api.twitter.com/1.1/search/tweets.json?q=%40twitterapi", function(error, tweets, response) {
      if (error) throw error;
      console.log(tweets); // The favorites.
      console.log(response); // Raw response object.
    });
  // axios
  //   .get(`https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json${search}`)
  //   .then(response => {
  //     this.setState({ data: response.data, search: true });
  //     console.log("app", this.state.data);
  //   })
  //   .catch(error => {});
  }
  render() {
    const data = this.state.data;
    const hashSearch = this.hashSearch;
    return <div className="container">
        <Header onSearch={hashSearch} />
        <div className="columns ">      
            <div className="tweetSection column is-4">
              { this.state.search ?  <Tweets data={data} /> : null}              
            </div>

            <div className="mapSection column is-12">
              <Map data={data}/>
            </div>
        
        </div>
      </div>;
  }
}

export default App;
