import React, { Component } from "react";
import Tweet from './tweet';
import "../styles/styles.css";

class Tweets extends Component {
  render() {
    console.log("tweets", this.props.data);
    // var tweets = this.props.data.map((tweet,index) => {     
    //   return (<Tweet key={index} data={tweet} />)
    // });
    return (
      <div className="tweets"> 
        <Tweet key={1} data={this.props.data} />}
        <Tweet key={2} data={this.props.data} />}
        <Tweet key={3} data={this.props.data} />}
        <Tweet key={4} data={this.props.data} />}
      </div>
    );
  }
}

export default Tweets;
