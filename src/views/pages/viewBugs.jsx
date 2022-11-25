import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getBugs } from '../../controllers/Redux/bugSlice';
import BugCard from '../Components/bugCard/BugCard';
import BugView from '../Components/viewBug/BugView';

function ViewBugs() {

    const [DISPLAY_BUG, setDISPLAY_BUG] = useState({
        name: "",
        isDisplayed: false,
    })

    console.log(DISPLAY_BUG)
    const dispatch = useDispatch();
    const {bugs} = useSelector(state => state);

    useEffect(() => {
        dispatch(getBugs());
    }, [bugs.length  < 1])

    function BugClicked(name){
        setDISPLAY_BUG({
            isDisplayed:!DISPLAY_BUG.isDisplayed, 
            name: name,
        })
    }

  return (
    <div className='page-container'>
        {bugs.map((bug, key) => (
            <BugCard key={key} bug={bug} clicked={BugClicked} />
        ))}
        {DISPLAY_BUG.isDisplayed && <BugView clicked={BugClicked} bug={bugs.filter((bug) =>   bug.name === DISPLAY_BUG.name)[0]} />}
    </div>
  )
}

export default ViewBugs;