import React from 'react'
import './newPage.scss'
import Sidebar from '../../components/sidebar/SideBar'
import NavBar from '../../components/navbar/NavBar'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'

const NewPage = ({inputs, title}) => {
  const [file, setFile] = React.useState("")
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <NavBar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={
              file
              ? URL.createObjectURL(file)
              : "https://cdn-icons-png.flaticon.com/128/7010/7010068.png"
            } alt="" />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
                <label htmlFor='file'>Image:<DriveFolderUploadOutlinedIcon className='icon'/></label>
                <input onChange={e=>setFile(e.target.files[0])} type="file" id='file' style={{"display": "none"}}/>
              </div>
              {
                inputs.map(input => (
                  <div key={input.id} className="formInput">
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                ))
              }
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPage