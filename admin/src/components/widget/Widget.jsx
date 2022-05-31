import React from 'react'
import './widget.scss'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonIcon from '@mui/icons-material/Person';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {Link} from 'react-router-dom'

const Widget = ({type}) => {
    let data
    const amount = 100
    const diff = 24

    switch(type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonIcon className='icon indigo'/>
            }
            break
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "See all orders",
                icon: <ShoppingCartIcon className='icon aqua'/>
            }
            break
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: <WaterfallChartIcon className='icon green'/>
            }
            break
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <FilterAltIcon className='icon orange'/>
            }
            break
        default:
            break
    }


  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"}{amount}</span>
            <Link to='/users' style={{textDecoration: "none", color: "gray"}}><span className="link">{data.link}</span></Link>
        </div>
        <div className="right">
            <div className="percentage positive">
                <ArrowDropUpIcon/>
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget