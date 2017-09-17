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
  compon
  hashSearch(search){
  axios
    .get(`https://www.jasonbase.com/things/qVdP/`)
    .then((response) => {
      this.setState({data: response.data,
                    search: true});
                    
    })
    .catch((error) => {
      
    });
  }
  render() {
    const data = this.state.data;
    const hashSearch = this.hashSearch;
    return <div className="container">
        <Header onSearch={hashSearch} />
        <div className="columns">      
            <div className="column is-3">
              { this.state.search ?  <Tweets data={data} /> : null}              
            </div>

            <div className="column is-9">
              <Map data={data}/>
            </div>
        
        </div>
      </div>;
  }
}

export default App;
