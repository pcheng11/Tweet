import React, { Component } from "react";
import Tweet from './tweet';
import "../styles/styles.css";

class Tweets extends Component {
  constructor() {
    super();
    
  }
 
  render() {
    const data = this.props.data;
    return (
      <div>
        {console.log(this.props.data)}
        <Tweet data={data} />
      </div>
    );
  }
}

export default Tweets;
