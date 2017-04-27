import React, { Component } from 'react';
import './Goals.css';
import './Actionable.js';

const Title = () => {
  return (
    <div>
       <div className ="title">
          <h1>Goals</h1>
       </div>
    </div>
  );
}

const GoalInputBar = ({addGoal}) => {
  // Input Tracker
  let input;
  // Return JSX
  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        addGoal(input.value);
        input.value='';
      }}>
        +
      </button>
    </div>
  );
};

const Goal = ({goal, remove}) => {
  // Each Todo
  return (
    <li onClick={() =>
      {remove(goal.id)}}>
      {goal.text}
    </li>);
}

const GoalList = ({goals, remove}) => {
  // Map through the todos
  const goalNode = goals.map((goal) => {
    return (<Goal goal={goal} key={goal.id} remove={remove}/>)
  });
  return (
    <ul className="singleGoal">
      {goalNode}
    </ul>);
}


// Contaner Component (Ignore for now)
window.id = 0;
class GoalApp extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: [],
      selected: ''
    }
  }
  // Add todo handler
  addGoal(val){
    // Assemble data
    const goal = {text: val, id: window.id++}
    // Update data
    this.state.data.push(goal);
    // Update state
    this.setState({data: this.state.data});

    //NEED: set actionable props = state
  }

  handleRemove(id){
    // Filter all todos except the one to be removed
    const focusGoal = this.state.data.filter((goal) => {
      if(goal.id == id) return goal;
    });
    // Update state with filter
    this.state.selected = focusGoal[0].text;
    console.log(this.state.selected);
  //  this.setState({data: focusGoal});

  }


  render(){
    // Render JSX
    return (
      <div
        className="goalList"
      >
        <Title />

        <GoalInputBar addGoal={this.addGoal.bind(this)}/>
        <GoalList
          goals={this.state.data}
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}

export default GoalApp;
