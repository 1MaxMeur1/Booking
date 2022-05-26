import React from 'react'
import './featured.css'
import useFetch from '../../hooks/useFetch'
import Loader from '../Loader/Loader'

const Featured:React.FC = () => {

    const {data,loading,error} = useFetch('/hotels/countByCity?cities=Berlin,Frankfurt,ZORRO')

  return (
    <>
        {
            loading 
            ? 
            <Loader />
            : 
            <div className='featured'>
                <div className="featuredItem">
                <img className='featuredImg' src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/32087410.jpg?k=d563da65276ebb6b5ba39b2728afd5a7e185493cc9024cf5753928598333ffb2&o=&hp=1" alt="image" />
                <div className="featuredTitles">
                    <h1>Berlin</h1>
                    <h2>{data[0]} properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className='featuredImg' src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/32087410.jpg?k=d563da65276ebb6b5ba39b2728afd5a7e185493cc9024cf5753928598333ffb2&o=&hp=1" alt="image" />
                <div className="featuredTitles">
                    <h1>Frankfurt</h1>
                    <h2>{data[1]} properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className='featuredImg' src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/32087410.jpg?k=d563da65276ebb6b5ba39b2728afd5a7e185493cc9024cf5753928598333ffb2&o=&hp=1" alt="image" />
                <div className="featuredTitles">
                    <h1>Zorro</h1>
                    <h2>{data[2]} properties</h2>
                </div>
                </div>
            </div>
        }
    </>
  )
}

export default Featured