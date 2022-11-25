import React, {useState} from 'react';
import ViewSection from './component/ViewBugSection';
import BugModel from '../../../models/bugModel';
import {useDispatch} from 'react-redux';
import {markComplete} from '../../../controllers/Redux/bugSlice';
import EditPanel from '../editDelete/EditPanel';
import EditBug from './component/bugCreate/edit/BugForm';

import './BugView.css';

 const BugView = (props) => {

  const [displayEdit, setdisplayEdit] = useState(false)

    const dispatch = useDispatch();

    const bug = new BugModel(props.bug);

    function editClicked(){
      setdisplayEdit(!displayEdit)
    }

    function deleteClicked(){

    }

  return (
    <>
    <div className='bug-view'>
      <EditPanel editClicked={editClicked} deleteClicked={deleteClicked} />
      <button onClick={props.clicked} className='close-btn'>Close</button>
        <h1>{bug.name}</h1>
        <ViewSection title='Details' info={bug.detail} />
        <ViewSection title='Steps' info={bug.steps} />
        <ViewSection title='Priority' info={bug.priority} />
        <ViewSection title='Creator' info={bug.creator} />
        <ViewSection title='App Version' info={bug.version} />
        <ViewSection title='Time Created' info={bug.time} />
        <button onClick={()=>{dispatch(markComplete())}}>Mark Complete</button>
    </div>
        
        {displayEdit && <EditBug title="Edit Bug" bug={bug} close={editClicked} />}
    </>    
  )
}

export default BugView;
