import React from 'react'
import './propertyList.css'
import useFetch from '../../hooks/useFetch'
import Loader from '../Loader/Loader'

const PropertyList: React.FC = () => {

    const {data, loading, error} = useFetch('/hotels/countByType')

    const images = [
        "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/9700003.jpg?k=fe4eef13e50280170f4f7fd954772f195bbb503e5ace1ccd73256e61192d5038&o=&hp=1",
        "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/348755373.jpg?k=792b7a2572de21f636e5cad603597745125a304131652282f7ab2a095e2b690a&o=&hp=1",
        "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/185474305.jpg?k=efeab3d73d5044fe8e99366074cc6a5c31edf7872fab5dd27061657bf4273e7d&o=&hp=1",
        "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/344881660.jpg?k=c141cb0cf6b609db58337db0882fc28ab5c9e340e4392c0c6ca4c56515f1e636&o=&hp=1",
        "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/254101993.jpg?k=6ab232675af78165edd4454177885df290ad32d3518eea1ff4ff83d8f1796444&o=&hp=1",
    ]

  return (
      <>
        {
            loading
            ?
            <Loader />
            :
            <div className="pList">
                {images.map((item, i) => (
                    <div key={i} className="pListItem">
                        <img src={item} alt="img" />
                        <div className="pListTitles">
                            <h1>{data[i]?.type}</h1>
                            <h2>{data[i]?.count} {data[i]?.type}</h2>
                        </div>
                    </div>
                ))}
            </div>
        }
      </>
  )
}

export default PropertyList