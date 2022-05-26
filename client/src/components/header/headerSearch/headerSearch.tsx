import React from 'react'
import './headerSearch.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBed, faCalendarDays, faPerson} from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import { useNavigate } from "react-router-dom";
import {SearchContext} from '../../../context/searchContext'

const HeaderSearch: React.FC = () => {
    const [destination, setDestination] = React.useState<string>('')
    const [openDate, setOpenDate] = React.useState<boolean>(false)
    const [dates, setDates] = React.useState<Array<any>>([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }])
    const [openOptions, setOpenOptions] = React.useState<boolean>(false)
    const [options, setOptions] = React.useState<any>({
        adults: 1,
        children: 0,
        rooms: 1
    })

    const handleOption = (name: string, operation: string) => {
        setOptions((prev:any) => {
            return {
                ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] <= 0 ? 0 : options[name] - 1
            }
        })
    }

    const navigate = useNavigate(SearchContext)

    const {dispatch} = React.useContext(SearchContext)

    const handleSearch = () => {
        dispatch({type: "NEW_SEARCH", payload: {destination,dates,options}})
        navigate('/hotels', {state: {destination, dates, options}})
    }

  return (
    <div className='headerSearch'>
        <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className='headerIcon'/>
            <input value={destination} type="text" placeholder='Where are you going?' className='headerSearchInput'onChange={e=>setDestination(e.target.value)} />
        </div>
        <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
            <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
            {
                openDate ? 
                <DateRange className='date' minDate={new Date()} editableDateInputs={true} onChange={item => setDates([item.selection])} moveRangeOnFirstSelection={false} ranges={dates}/> 
                :
                ''
            }
        </div>
        <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
            <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>
                {`${options.adults} adult - ${options.children} children - ${options.rooms} rooms`}
            </span>
            {
                openOptions 
                ?
                <div className="options">
                <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                        <button className="OptionCounterButton" onClick={() => handleOption("adults", "d")}>-</button>
                        <span className="optionCounterNumber">{options.adults}</span>
                        <button className="OptionCounterButton" onClick={() => handleOption("adults", "i")}>+</button>
                    </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                        <button className="OptionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
                        <span className="optionCounterNumber">{options.children}</span>
                        <button className="OptionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                    </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Rooms</span>
                    <div className="optionCounter">
                        <button className="OptionCounterButton" onClick={() => handleOption("rooms", "d")}>-</button>
                        <span className="optionCounterNumber">{options.rooms}</span>
                        <button className="OptionCounterButton" onClick={() => handleOption("rooms", "i")}>+</button>
                    </div>
                </div>
            </div>
            :
            '' 
            }
        </div>
        <div className="headerSearchItem">
            <button className="headerSearchBtn" onClick={handleSearch}>Search</button>
        </div>
    </div>
  )
}

export default HeaderSearch