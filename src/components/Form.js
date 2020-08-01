import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {

    state = {
        name: "",
        cost: 0,
        saved: 0,
        percentage: 0
    }

    nameHandler = e => {
        const name = e.target.value;
        this.setState({name});
    }

    costHandler = e => {
        const cost = e.target.value;
        this.setState({cost});
    }

    savedHandler = e => {
        const saved = e.target.value;
        this.setState({saved});
    }

    percentageHandler = () => {
        const percentage = (this.state.saved / this.state.cost) * 100;
        this.setState({percentage});
    }

    save = () => {
        this.props.addGoal(this.state);
        document.getElementById('txtName').value = '';
        document.getElementById('txtCost').value = '';
        document.getElementById('txtSavings').value = '';
    }

    render() {
        return (
            <div className="form-block col-sm-4">
                <h2 className="title">Goal info</h2>
                <form id="info">
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col">
                                <label for="txtName">Name</label>
                                <input type="text" id="txtName" className="form-control" placeholder="Name of the saving goal" onChange={this.nameHandler} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col">
                                <label for="txtCost">Cost</label>
                                <input type="number" id="txtCost" className="form-control" placeholder="Cost to achieve the goal" onChange={this.costHandler} />
                            </div>
                            <div className="col">
                                <label for="txtSavings">Savings</label>
                                <input type="number" id="txtSavings" className="form-control" placeholder="Actual savings amount" onChange={this.savedHandler} />
                            </div>
                        </div>
                    </div>
                    <button type="button" id="add" className="btn btn-block btn-primary" onClick={this.save}>Add to list</button>
                </form>
            </div>
        )
    }
}
