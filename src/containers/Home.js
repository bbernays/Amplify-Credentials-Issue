import React, { Component } from "react";
import { invokeApig } from "../libs/awsLib";
import { button } from "react-bootstrap";

import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.grabData=this.grabData.bind(this)
    this.state = {
      message: "No Response from Server",
    };
  }
  async componentDidMount(){
    this.grabData()
  }
  async grabData(){
    this.setState(
      {
        'message': "No Response from Server"
      });
    try {
      const test = await invokeApig({
        path: "/hello",
        method: "GET"
      })
      this.setState(
        {
          'message': test.body.message
        });
    } catch (e) {
      this.setState({
        'message':'Issue grabbing data from server'
      })
    }
  }
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>FF-Amplify Issue</h1>
          <h2>Message from Server: {this.state.message}</h2>
          <button onClick={()=>this.grabData()}>Update Data</button>
        </div>
      </div>
    );
  }
}
