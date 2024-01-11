import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'

const Guestuser = (props) => {
  return (
    <div align="center">
      <Topbar xxx={props.checkLogout}/>
       <Sidebar/>
      <h2>Guestuser</h2>
    </div>
  )
}

export default Guestuser
