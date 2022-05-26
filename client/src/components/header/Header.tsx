import React from 'react'
import './header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBed ,faPlane, faCar, faTaxi, faCouch} from '@fortawesome/free-solid-svg-icons'
import HeaderSearch from './headerSearch/headerSearch'
import {AuthContext} from '../../context/authContext'

interface Props {
    type?: string
}

const Header: React.FC<Props> = ({type}: Props) => {

    const {user} = React.useContext(AuthContext)

    return (
        <div className='header'>
            <div className={type === "list" ? "headerContainer listMode" : 'headerContainer'}>
                <div className="headerList">
                    <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faCouch} />
                    <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                    </div>
                </div>
                {
                type !== "list" && <>
                <h1 className="headerTitle">
                A lifetime of discounts? It's genius!
                </h1>
                <p className="headerDesc">
                    Get rewarded for your travels - unlock instant savings of 10% or more with a free TrashBooking account.
                </p>
                {!user && <button className="headerBtn">Sign in / Register</button>}
                <HeaderSearch />
                </>  
                }
            </div>
        </div>
    )
}

export default Header