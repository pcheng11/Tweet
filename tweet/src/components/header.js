import React, { Component } from "react";
import "../styles/styles.css";

class Header extends Component {
  constructor(){
    super();
    this.state = {
      term: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    
    this.props.onSearch(this.state.term);
  }
  handleChange(event){
    this.setState({term: event.target.value});
  }
  render() {
    return <div>
        <nav className="navbar  has-shadow">
          
         
          <div className="nav-right nav-menu">
            <span className="nav-item">
              <div className="field has-addons has-addons-centered">
                <form className="control" onSubmit={this.handleSubmit}>
                  <input type="text" className="input" placeholder="Hashtag..." value={this.state.term} onChange={this.handleChange} />
                </form>
                <p className="control">
                  <a onClick={this.handleSubmit} className="button is-primary">
                    Search
                  </a>
                </p>
              </div>
            </span>
          </div>
        </nav>
      </div>;
  }
}

export default Header;
