import React from 'react'
import './featuredProperties.css'
import useFetch from '../../hooks/useFetch'
import Loader from '../Loader/Loader'

const FeaturedProperties: React.FC = () => {

    const {data, loading, error} = useFetch('/hotels?featured=true&limit=3')
    
  return (
    <div className='fp'>
        {
            loading 
            ? 
            <Loader />
            :
            data.map((item,i) => (
                <div key={item._id} className="fpItem">
                    <img className="fpImg" src={item.photos[0]} alt="img" />
                    <span className="fpName">{item?.name}</span>
                    <span className="fpCity">{item?.city}</span>
                    <span className="fpPrice">${item?.cheapestPrice}</span>
                    {item.rating && <div className="fpRating">
                        <button>{item.rating}</button>
                        <span>Excellent!</span>
                    </div>}
                </div>
            ))
        }
    </div>
  )
}

export default FeaturedProperties