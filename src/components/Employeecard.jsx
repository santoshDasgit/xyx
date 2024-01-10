import React from 'react';

const Employeecard = (props) => {
    return (
       <div className='p-empcard'>
         <div className='emp-card'>
            <div className="pic">
                <img src={props.img} alt="" />
            </div>
            <div className="details">
                <h4>{props.name}</h4>
                <p> {props.exp} Years Experiences</p>
                <p> {props.background} Background </p>
            </div>
        </div>
       </div>
    );
}

export default Employeecard;
