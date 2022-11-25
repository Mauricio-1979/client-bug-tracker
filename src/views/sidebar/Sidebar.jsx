import React from 'react'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import { signOut} from '../../controllers/Redux/authSlice'
import './Sedebar.css';

function Sidebar() {
    const dispatch = useDispatch();

    const {auth} = useSelector(state => state);

    function SignOut(){
        dispatch(signOut());
    }

  return (
    <div className='sidebar'>
        <Link className='nav-link' to="/">
            <h1 className='brand'>Bug-Tracker</h1>
            <ul>
                <li><Link to="/" className='nav-link'>Dashboard</Link></li>
                <li><Link to="/viewbugs" className='nav-link'>View Bugs</Link></li>
                {auth.admin && <li><Link to="/create" className='nav-link'>Create Bug</Link></li>}
            </ul>
            <button className='nav-li8nk logout' onClick={SignOut}>Logaut</button>
        </Link>
    </div>
  )
}

export default Sidebar;