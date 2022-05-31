import React from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/SideBar'
import NavBar from '../../components/navbar/NavBar'
import DataTable from '../../components/datatable/Datatable'

const Users = ({type}) => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <NavBar />
        <DataTable type={type} />
      </div>
    </div>
  )
}

export default Users