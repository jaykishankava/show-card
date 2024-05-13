import React, { Component } from "react"
import "./data.css"

class Datarecord extends Component {
  constructor(props){
    super(props);
    this.record =props.data;
  }
  render() {
    return (
      <div className="container">
        {this.record.map((val) => {
          return (
            <div key={val.grid} className="card-wrapper">
              <div className="card">
                <h2>Grid : - {val.grid}</h2>
                <h3>Name :- {val.name}</h3>
                <p>Email :- {val.email}</p>
                <p>Course:- {val.course}</p>
                <span>City:- {val.city}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Datarecord;
