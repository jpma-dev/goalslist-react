import React from 'react';
import Goal from './components/Goal';
import './Form.css';

export default function Goals({goals}) {
    return (
        <div className="form-block col-sm-8">
            <h2 className="title">Goals</h2>
            <ul>
                {goals.map((goal, index) => <Goal key={index} goal={goal} />)}
            </ul>
        </div>
    )
}
