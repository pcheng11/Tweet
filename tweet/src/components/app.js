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
      data: [], 
      intervalId: null
    };
    this.hashSearch = this.hashSearch.bind(this);
    this.hashSearchTimer = this.hashSearchTimer.bind(this);
  }
  
  hashSearch(search){   
    var intervalId = setInterval(() => {    
    axios
    .get(`https://cors-anywhere.herokuapp.com/https://yikyakapi.herokuapp.com/current/${search}`)
    .then(response => {
      var newData = this.state.data.concat(response.data);
      this.setState({ data: newData, search: true });      
    })
    .catch(error => {})}, 1000)
    this.setState({ intervalId: intervalId });
  }
  hashSearchTimer(search){
    clearInterval(this.state.intervalId);
    this.hashSearch(search)
    
  }
  render() {
    const data = this.state.data;
    const hashSearch = this.hashSearchTimer;
    return <div className="container">
        <Header onSearch={hashSearch} />
        <div className="columns ">
          <div className="tweetSection column is-4">
            {this.state.search ? <Tweets data={data} /> : null}
          </div>
          <div className="mapSection column is-12">
            {this.state.search ? <Map data={data} /> : <Map data={null}/>}
          </div>
        </div>
      </div>;
  }
}

export default App;
