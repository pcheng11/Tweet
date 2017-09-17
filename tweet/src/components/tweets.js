import React, { Component } from "react";
import Tweet from './tweet';
import "../styles/styles.css";

class Tweets extends Component {
  
 
  render() {
    var tweets = this.props.data.data.map((tweet,index) => {     
      return (<Tweet key={index} data={tweet} />)
    });
    console.log(tweets)
    return (
      <div>
          {tweets}   
      </div>
    );
  }
}

export default Tweets;
