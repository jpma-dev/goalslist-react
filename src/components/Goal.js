import React from 'react';
import './Form.css';

export default function Goal(goal) {
    return (
        <li>
            <div className="row">
                <div className="col-sm-8">
                    <h4 className="goal-title">{goal.name}</h4>
                </div>
                <div className="col-sm-4">
                    <h5 className="goal-numbers">{goal.saved}/{goal.cost}</h5>
                </div>
            </div>
        </li>
    )
}
