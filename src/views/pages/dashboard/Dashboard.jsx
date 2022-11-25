import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import bugSlice, { getBugs } from '../../../controllers/Redux/bugSlice';
import Card from '../../Components/dashboard/Card';

function Dashboard() {

    const dispatch = useDispatch();
    const bugs = useSelector(state => state.bugs);

    const navegate = useNavigate();

    let hightCount = 0;
    let midCount = 0;
    let lowCount = 0;
    if(bugs !== undefined){
        hightCount = filterBugs(1);
        midCount = filterBugs(2);
        lowCount = filterBugs(3);
    }

    function filterBugs(priority){
        return bugs.filter((bug) => {return bug.priority == priority})
    }

    function redirect(){
        navegate('/viewbugs');
    }

    useEffect(() => {
        dispatch(getBugs);
    }, [bugs == undefined])

  return (
    <div className='page-container'>
        <Card Priority="1" count={hightCount.length} clicked={redirect} />
        <Card Priority="2" count={midCount.length} clicked={redirect} />
        <Card Priority="3" count={lowCount.length} clicked={redirect} />
    </div>

  )
}

export default Dashboard;