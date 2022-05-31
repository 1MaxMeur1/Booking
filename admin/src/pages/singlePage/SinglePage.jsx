import React from 'react'
import './singlePage.scss'
import Sidebar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/NavBar'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'

const SinglePage = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/11763347/pexels-photo-11763347.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">jane@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Elton St. 234 Garden Yd. NewYork</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending(last 6 months)"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last transactions</h1>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default SinglePage