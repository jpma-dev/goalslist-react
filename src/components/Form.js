import React, { Component } from 'react'

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
        $('#name, #cost, #saved').val('');
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
