import React, { Component } from 'react';
import './Actionable.css';
var goalApp = require('./Goals.js');

const Title = () => {
  return (
    <div>
       <div className = "title">
          <h1>goal name</h1>
       </div>
    </div>
  );
}

const ActionableInputBar = ({addAction}) => {
  // Input Tracker
  let input;
  // Return JSX
  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        addAction(input.value);
        input.value = '';
      }}>
        +
      </button>
    </div>
  );
};

const Action = ({action, remove}) => {
  // Each Todo
  return (<li onClick={() =>
      {remove(action.id)}}>
      {action.text}</li>);

}

const ActionList = ({actions, remove}) => {
  // Map through the todos
  const actionNode = actions.map((action) => {
    return (<Action action={action} key={action.id} remove={remove}/>)
  });
  return (<ul>{actionNode}</ul>);
}

// Contaner Component (Ignore for now)
window.id = 0;
class ActionableList extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    console.log(props.dataItem);
    // Set initial state
    this.state = {
      goalTitle: 'sample title',
      data: []
    }
    console.log("goal APP " + goalApp.props);

    console.log("goal title is " + this.state.goalTitle);

  }

  // Add todo handler
  addAction(val){
    // Assemble data
    const action = {text: val, id: window.id++}
    // Update data
    this.state.data.push(action);
    // Update state
    this.setState({data: this.state.data});
  }
  // Handle remove
  handleRemove(id){
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((action) => {
      if(action.id !== id) return action;
    });
    // Update state with filter
    this.setState({data: remainder});
  }

  render(){
    // Render JSX
    return (
      <div>
        <div
          className="actionableList"
        >
          <Title />
          <ActionableInputBar addAction={this.addAction.bind(this)}/>
          <ActionList
            actions={this.state.data}
            remove={this.handleRemove.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default ActionableList;
