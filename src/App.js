import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {username:"", password:"", userRole:""}
    this.captureUsername = this.captureUsername.bind(this);
    this.capturePassword = this.capturePassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  captureUsername(event){
    this.setState({username: event.target.value})
  }

  capturePassword(event){
    this.setState({password: event.target.value})
  }

  handleChange(event){
    this.setState({userRole: event.target.value})
  }

  render(){
    return (
      <div className="formContainer">
        <h3 className="loginHeader">LOGIN</h3>
        <div className="container">
          <div className="inputField">
            <label className="inputHeader">Username</label>
            <div>
              <input type="text" className="textField" value={this.state.username} onChange={this.captureUsername}/>
            </div>
          </div>
          <div className="inputField">
            <label className="inputHeader">Password</label>
            <div>
              <input type="password" className="textField" value={this.state.password}/>
            </div>
          </div>
          <div className="inputField">
            <label className="inputHeader">Login As: </label>
            <div className="choiceGroup">
              <input type="radio" id="farmer" name="userRole" value="Farmer" onChange={this.handleChange}/>
              <label for="farmer">Farmer</label><br/>
              <input type="radio" id="integrator" name="userRole" value="Integrator" onChange={this.handleChange}/>
              <label for="integrator">Integrator</label><br/>
              <input type="radio" id="admin" name="userRole" value="admin" onChange={this.handleChange}/>
              <label for="admin">Admin</label><br/>
              <input type="radio" id="clerical" name="userRole" value="clerical" onChange={this.handleChange}/>
              <label for="clerical">Clerical</label>
            </div>
          </div>
          <button className="loginButton">LOGIN</button>
        </div>
      </div>
    );
  }
}

export default App;
