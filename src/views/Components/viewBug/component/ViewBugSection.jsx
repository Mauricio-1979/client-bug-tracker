import React from 'react';
import './ViewBugSection.css';

const ViewBugSection = (props) => {
  return (
    <div className='view-section'>
        <h2>{props.title}</h2>
        <p>{props.info}</p>
    </div>
  )
}

export default ViewBugSection;
