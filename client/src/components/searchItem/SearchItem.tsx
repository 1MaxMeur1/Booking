import React from 'react'
import './searchItem.css'
import {Link} from 'react-router-dom'

const SearchItem: React.FC<any> = ({item}) => {
  return (
    <div className="searchItem">
        <img src={item.photos[0]} 
        alt=""
        className='siImg' />
        <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            <span className="siDistance">{item.desc}</span>
            <span className="siTaxiOp">Free Airport Taxi</span>
            <span className="siSubtitle">Studio Apartment with Air conditioning</span>
            <span className="siFeatures">Entire studio - 1 bathroom - 21m² - 1 full bed</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            { item.rating && <div className="siRating">
                <span>Excellent</span>
                <button>{item.rating}</button>
            </div>}
            <div className="siDetailTexts">
            <span className="siPrice">${item.cheapestPrice}</span>
            <div className="siTaxOp">Includes taxes and fees</div>
            <Link to={`/hotels/${item._id}`}>
                <button className='siCheckButton'>See availability</button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default SearchItem