import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'

const Employeedetails = (props) => {
  return (
    <div align="center">
       <Topbar xxx={props.checkLogout}/>
       <Sidebar/>
      <h2>employee details</h2>
    </div>
  )
}

export default Employeedetails
