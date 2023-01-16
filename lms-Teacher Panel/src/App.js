import { React, useState } from 'react';
import './App.css'
import SideItem from './pages/SideItem';
import AddAssignment from './pages/AddAssignment';
import { Route, Routes } from 'react-router-dom'
import ViewAllAssignments from './pages/ViewAllAssignments';
import Dashboard from './pages/Dashboard';
import Button from '@mui/material/Button';
import ViewAllCourses from './pages/ViewAllCourses';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ViewAllQuizzes from './pages/ViewAllQuizzes'

function App() {
  const [toggleOpen, setToggleOpen] = useState(false);

  return (
    <div className="App">

      {/* Toggle Icon */}
      <div className={toggleOpen ? "sidebar open" : "sidebar"}>

        {/* Project Logo */}
        <div className="logo-details">
          <i className='bx bxl-c-plus-plus icon'></i>
          <div className="logo_name">LMS Teacher</div>
          <i className='bx bx-menu' id="btn" onClick={() => setToggleOpen(!toggleOpen)}></i>
        </div>

        {/* --> Unordered list started */}
        <ul className="nav-list">

          {/* --> Search Icon */}
          <li>
            <i className='bx bx-search' ></i>
            <input type="text" placeholder="Search..." />
            <span className="tooltip">Search</span>
          </li>

          {/* --> SideBar Items */}
          <SideItem iconClass="bx bx-grid-alt" nameeClass="links_name" namee="Dashboard" toolTipClass="tooltip" toolTip="Dashboard" path="/" />
          <SideItem iconClass="bx bx-user" nameeClass="links_name" namee="User" toolTipClass="tooltip" toolTip="Students" />
          <SideItem iconClass="bx bx-chat" nameeClass="links_name" namee="Assignments" toolTipClass="tooltip" toolTip="Assignments" path="/Assignments" />
          <SideItem iconClass="bx bx-pie-chart-alt-2" nameeClass="links_name" namee="Courses" toolTipClass="tooltip" toolTip="Courses" path='/Courses'/>
          <SideItem iconClass="bx bx-pen" nameeClass="links_name" namee="Order" toolTipClass="tooltip" toolTip="Quizzes"  path='/Quizzes'/>
          <SideItem iconClass="bx bx-heart" nameeClass="links_name" namee="Saved" toolTipClass="tooltip" toolTip="Saved" />
          <SideItem iconClass="bx bx-cog" nameeClass="links_name" namee="Setting" toolTipClass="tooltip" toolTip="Setting" />

          {/* --> Teacher Profile */}
          <li className="profile">
            <div className="profile-details">
              <div className="name_job">
                <div className="name">Ghulam Mohiuddin</div>
                <div className="job">Javascript</div>
              </div>
            </div>
            <i className='bx bx-log-out' id="log_out" onClick={() => console.log('Hello Mr. GMD')}></i>
          </li>

          {/* --> Unordered list ended */}
        </ul>

      </div>

      {/* Side Section */}
      <section className="home-section">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/Assignments' element={<ViewAllAssignments />} />
          <Route path='/Courses' element={<ViewAllCourses/>}/>
          <Route path='/Quizzes' element={<ViewAllQuizzes/>} />
        </Routes>
      </section>

    </div>
  );
}

export default App;
