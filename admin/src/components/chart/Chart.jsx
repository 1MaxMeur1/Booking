import React from 'react'
import './chart.scss'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {name: "January", Total: 2700},
  {name: "February", Total: 900},
  {name: "March", Total: 2400},
  {name: "April", Total: 1600},
  {name: "May", Total: 200},
  {name: "June", Total: 1200},
]

const Chart = ({aspect, title}) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
        <ResponsiveContainer width="100%" aspect={aspect}>
          <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="Total" stroke="indigo" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart