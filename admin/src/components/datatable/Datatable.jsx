import React from 'react'
import './datatable.scss'
import { DataGrid} from '@mui/x-data-grid';
import {userColumns, userRows} from '../../datatablesource'
import {Link} from 'react-router-dom'

const Datatable = ({type}) => {
  const [data, setData] = React.useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const actionColumn = [{
    field: "action", 
    headerName: "Action", 
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to='/users/1' style={{textDecoration: "none"}}>
            <div className="viewButton">View</div>
          </Link>
          <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
        </div>
      )
    }
  }]
  return (
    <div className="datatable">
      <div className="datatableTitle">
        <span>
          {
            type === "users" ? "Users" : "Products"
          }
        </span>
        <Link to={`${type === "users" ? '/users/new' : '/products/new'}`} className='link'>Add new</Link>
      </div>
        <DataGrid
        className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable