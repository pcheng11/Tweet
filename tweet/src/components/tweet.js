import React, { Component } from "react";
import "../styles/styles.css";

class Tweet extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="box tweet">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src="http://bulma.io/images/placeholders/128x128.png"
                alt="Image"
              />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.data.name}</strong> <small>@{this.props.data.nickname}</small>{" "}
                <small>31m</small>
                <br />
                {this.props.data.Text}
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item">
                  <span className="icon is-small">
                    <i className="fa fa-reply" />
                  </span>
                </a>
                <a className="level-item">
                  <span className="icon is-small">
                    <i className="fa fa-retweet" />
                  </span>
                </a>
                <a className="level-item">
                  <span className="icon is-small">
                    <i className="fa fa-heart" />
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>
    );
  }
}

export default Tweet;
