import React, { Component } from "react";
import "../styles/styles.css";

class Tweet extends Component {
  

  render() {
    console.log("tweet" + this.props.data);
    return (
      <div className="box tweet">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src="" alt="Image" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Name</strong>
                <small> @Nickname</small>
                <small> Date</small>
                <br />
                <br />
                {this.props.data.TEXT}
              </p>
            </div>
            
          </div>
        </article>
      </div>
    );
  }
}

export default Tweet;
