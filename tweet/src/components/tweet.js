import React, { Component } from "react";
import "../styles/styles.css";

class Tweet extends Component {
  

  render() {
    return <div className="box tweet">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.data.PROFILEPIC} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p className="title is-5">
                <strong>{this.props.data.NAME}</strong>

                <small> @{this.props.data.NICKNAME}</small>
              </p>
              <p>
                {this.props.data.TEXT}
              </p>
            </div>
          </div>
        </article>
      </div>;
  }
}

export default Tweet;
