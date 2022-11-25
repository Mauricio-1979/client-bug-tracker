import React from 'react';
import {useSelector} from 'react-redux';
import Login from './views/pages/login/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sidebar from './views/sidebar/Sidebar';
import ViewBugPage from './views/pages/viewBugs';
import BugForm from './views/Components/viewBug/component/bugCreate/edit/BugForm';
import Dashboard from './views/pages/dashboard/Dashboard';

function App() {
  const {auth} = useSelector(state => state);
  return (
    <Router>
      {!auth.LoggedIn ? <Login/> : 
      <>
      <Sidebar/>
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route path='/viewbugs' element={<ViewBugPage/> } />
        <Route path='/create' element={<div className='page-container'><BugForm title="Create Bug" /> </div> } />  
        
      </Routes>
      </>}
      {/* <Routes>
      <Route path='/' element={!auth.LoggedIn ? <Login/> : 
    <>
    <Sidebar />
    <ViewBugPage /></>} />
    
    </Routes> */}
    </Router>
    
  );
}

export default App;
