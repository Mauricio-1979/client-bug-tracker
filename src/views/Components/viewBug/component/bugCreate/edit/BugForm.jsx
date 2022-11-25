import React, {useState} from 'react';
import BugModel from '../../../../../../models/bugModel';

import './BugForm.css';

function BuForm(props) {

  const [bugObject, setbugObject] = useState(new BugModel(props.bug));

  function inputChange(e){
    setbugObject({
      ...bugObject,
      [e.target.name]:e.target.value
    })
  }

  return (
    
    <div className='bug-create'>
      {props.title == "Edit Bug" && <button className='close-btn' onClick={props.close}>
        Close
      </button>}
        <h1>{props.title}</h1>
        <form>
            <label>Name</label>
            <input 
              name='name' 
              placeholder='Bug Name' 
              required  
              onChange={inputChange}
              value={bugObject.name}
              />
            <label>details</label>
            <textarea name='details' 
              placeholder='Detailed description on the bug' 
              required 
              onChange={inputChange}
              value={bugObject.detail}
              />
            <label>Steps</label>
            <textarea name='steps' 
              placeholder='Stepe to create the debug' 
              required 
              onChange={inputChange}
              value={bugObject.steps}
            />
            <label>Priority</label>
            <select name='priority' 
              required 
              onChange={inputChange}
              value={bugObject.priority}
              >
                <option value='1'>Hight</option>
                <option value='2'>Mid</option>
                <option value='3'>Low</option>
            </select>
            <label>Assigned</label>
            <select name='assigned'
              onChange={inputChange}
              value={bugObject.assigned}
              >
                <option>Mauricio Bo</option>
            </select>
            <label>Application Version</label>
            <input name='version' 
              placeholder='Application Version' 
              onChange={inputChange}
              value={bugObject.version}
            />
            <button type='submit'>{props.title}</button>
        </form>
    </div>
    
  )
}

export default BuForm