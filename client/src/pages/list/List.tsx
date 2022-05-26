import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Header from '../../components/header/Header'
import './list.css'
import {useLocation} from 'react-router-dom'
import {format} from 'date-fns'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import SearchItem from '../../components/searchItem/SearchItem'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader/Loader'
import {SearchContext} from '../../context/searchContext'

interface Options {
  adults: number,
  children: number,
  rooms: number
}

interface OptionDate {
  endDate: Date,
  key: string,
  startDate: Date

}

interface State {
  date: OptionDate,
  destination: string,
  options: Options
}

interface Location {
  hash: string,
  key: string,
  pathname: string,
  search: string,
  state?: State
}

const List: React.FC = () => {
  const location = useLocation()
  const [destination, setDestination]= React.useState<Location>(location.state.destination || "Frankfurt")
  const [dates, setDates] = React.useState<Location>(location.state.dates)
  const [options, setOptions] = React.useState<Location>(location.state.options)
  const [openDate, setOpenDate] = React.useState<boolean>(false)
  const [min, setMin] = React.useState<number>(0)
  const [max, setMax] = React.useState<number>(99999)

  const {data, loading, error, reFetch} = useFetch(`/hotels?city=${destination}&min=${min}&max=${max}`)

  const handleMinPrice = (n) => {
    (n < 0) ? setMin(1) : setMin(n) 
  }

  const handleMaxPrice = (n) => {
    (n < 0) ? setMax(10) : setMax(n) 
  }


  const {dispatch} = React.useContext(SearchContext)

  const handleSearch = () => {
    dispatch({type: "NEW_SEARCH", payload: {destination,dates,options}})
    reFetch(`/hotels?city=${destination}&min=${min}&max=${max}`)
  }

  return (
    <div>
      <NavBar />
      <Header type='list'/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input onChange={e=>setDestination(e.target.value)} value={destination} type="text" placeholder='some' />
            </div>
            <div className="lsItem">
              <label>Check-in-Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
              {
                openDate && <DateRange 
                onChange={item=>setDates([item.selection])}
                minDate={new Date()}
                ranges={dates}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                className='date'/>
              }
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">Min price($) <small>per night</small></span>
                <input value={min} onChange={e => handleMinPrice(e.target.value)} type="number" min={0} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Max price($) <small>per night</small></span>
                <input value={max} onChange={e => handleMaxPrice(e.target.value)} type="number" min={0} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.adults}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input type="number" min={0} className="lsOptionInput" placeholder={options.children}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Rooms</span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.rooms}/>
              </div>
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="listResult">
            {
              loading
              ?
              <Loader />
              :
              data.length === 0 
              ?
              <div>There is no match... Change the destination point or max price!</div>
              :
              data.map(item => (
                <SearchItem item={item} key={item._id}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default List