import React from 'react'
import './featured.scss'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpOutlinedIcon from  '@mui/icons-material/KeyboardArrowUpOutlined'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total revenue</h1>
            <MoreVertIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <div className="circle">
                    <CircularProgressbar 
                    value={66} 
                    text={`${66}%`}
                    strokeWidth={2}
                    styles={buildStyles({
                        strokeLinecap: 'butt',
                        textSize: '20px',
                        pathTransitionDuration: 1.5,
                        pathColor: `indigo`,
                        textColor: 'gray',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#f88',
                      })} />
                </div>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">$420</p>
            <p className="desc">Previous transactions processing. Last payments may not be included.</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize='small'/>
                        <div className="resultAmount">$2.1k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last week</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize='small'/>
                        <div className="resultAmount">$6.7k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last month</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured