import React from 'react'
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
            id: 1321421,
            product: "ASUS ROG Strix",
            img: 'https://items.s1.citilink.ru/1509145_v01_b.jpg',
            customer: "Harold Carol",
            date: '1 March',
            amount: 2,
            method: "Online",
            status: "Pending"
        },
        {
            id: 241234,
            product: "Xbox 360",
            img: 'https://static.eldorado.ru/photos/71/710/706/73/new_71070673_l_945.jpeg/resize/380x240/',
            customer: "Stewie Semon",
            date: '24 April',
            amount: 1,
            method: "Offline",
            status: "Success"
        },
        {
            id: 341234,
            product: "Playstaion 5",
            img: 'https://static.eldorado.ru/photos/71/715/541/92/new_71554192_l_1600344576.jpeg/resize/380x240/',
            customer: "Vasiliy Beritskiy",
            date: '27 April',
            amount: 4,
            method: "Online",
            status: "Failure"
        },
        {
            id: 441234,
            product: "Playstaion 4",
            img: 'https://static.eldorado.ru/photos/mv/Big/40070231bb.jpg/resize/380x240/',
            customer: "Zora Devin",
            date: '23 April',
            amount: 1,
            method: "Online",
            status: "Success"
        },
        {
            id: 541234,
            product: "Ps Vita",
            img: 'https://static.eldorado.ru/photos/71/710/780/70/new_71078070_l_274.jpeg/resize/380x240/',
            customer: "Kovalchuk Heax",
            date: '30 April',
            amount: 1,
            method: "Offline",
            status: "Success"
        },
    ]
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className='tableCell'>
                {row.id}
              </TableCell>
              <TableCell className='tableCell'>
                  <div className="cellWrapper">
                      <img src={row.img} alt="" className="image" />
                      {row.product}
                  </div>
              </TableCell >
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>
                  <div className="method">
                      {row.method}
                      <div className={`circle ${row.method}`}></div>
                  </div>
              </TableCell>
              <TableCell className='tableCell'>
                  <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List