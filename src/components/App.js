import React, {Component} from 'react';
import Form from './Form';
import Goals from './Goals';
import './App.css';

export default class App extends Component {

  state = {
    goals: []
  }

  addGoal = goal => {
    const goals = [...this.state.goals, goal];
    this.setState({goals});
  }

  render() {
    const goals = this.state.goals;
    return (
      <div className="container">
        <div className="row">
          <Form addGoal={this.addGoal} />
          <Goals goals={goals} />
        </div>
      </div>
    )
  }
}
