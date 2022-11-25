import React from 'react';
import './BugCard.css';
import PriorityController from '../../../controllers/PriorityController';

function BugCard(props) {

    const {name, priority, version} = props.bug;
    const {level, color} = PriorityController(priority);
    
    function Clicked(){
        props.clicked(name);
    }

  return (
    <div className='bug-card' onClick={Clicked} style={{color:color}}>
        <h2 className='name'>{name}</h2>
        <h2 className='priority'>{level}</h2>
        <h2 className='version'>{version}</h2>
        
    </div>
  )
}

export default BugCard