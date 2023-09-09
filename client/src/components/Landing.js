import React from 'react';
import { Link } from 'react-router-dom'

const Landing =() =>{
    return(
        <div style ={{ textAlign: 'center'}}>
            <h1>WDIDW</h1>
            <p>Collect feedback from your users. </p>
            <h1>About</h1>
            <h1>Quick Start</h1>
            <h1>How I created it</h1>
            <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
        
    )
}

export default Landing;