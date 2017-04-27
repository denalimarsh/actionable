import React from 'react';
import ReactDOM from 'react-dom';
import GoalList from './Goals';
import Actionable from './Actionable';
import './index.css';

ReactDOM.render(
  <GoalList />,
  document.getElementById('goals')
);

ReactDOM.render(
  <Actionable />,
  document.getElementById('actions')
);
