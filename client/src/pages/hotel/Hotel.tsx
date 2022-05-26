import React from 'react'
import './Hotel.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot, faCircleXmark, faCircleArrowLeft, faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import NavBar from '../../components/navbar/NavBar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import {useLocation} from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader/Loader'
import {SearchContext} from '../../context/searchContext'
import {AuthContext} from '../../context/authContext'
import {useNavigate} from 'react-router-dom'
import Reserve from '../../components/reserve/Reserve'

const MILLISECONDS_PER_DAY: number = 1000 * 60 * 60 * 24

const Hotel: React.FC = () => {

  const location = useLocation()
  const id = location.pathname.split('/')[2]

  const {data, loading} = useFetch(`/hotels/find/${id}`)
  const {dates, options} = React.useContext(SearchContext)
  const {user} = React.useContext(AuthContext)

  function dayDifference(date1: Date,date2: Date) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime())
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY)

    return diffDays
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate)

  const [slideNumber, setSlideNumber] = React.useState<number>(0)
  const [open, setOpen] = React.useState<boolean>(false)
  const [openModal, setOpenModal] = React.useState<boolean>(false)
  const navigate = useNavigate()

  const handleOpen = (i:number) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction:string) => {
    let newSlideNumber
    if(direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
    }
    setSlideNumber(newSlideNumber)
  }

  const handleClick = () => {
    if(user) {
      setOpenModal(true)
    } else {
      navigate('/login')
    }
  }

  return (
    <div className='hotel'>
      <NavBar />
      <Header type='list'/>
      {
        loading 
        ?
        <Loader />
        :
        <div className={open ? "hotelContainer open": "hotelContainer"}>
          {
            open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove('l')}/>
            <div className="sliderWrapper">
              <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove('r')}/>
          </div>
          }
          <div className="hotelWrapper">
          <button className="bookNow" onClick={handleClick}>Reserve or Book Now!</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>{data.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location - {data.distance} from center
          </span>
          <span className="hotelPriceWithLight">
            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {data.photos?.map((photo, i) => (
              <div key={i} className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo} alt="img" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{data.title}</h1>
              <p className="hotelDesc">
                {data.desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for {days} days!</h1>
              <span>
                Located in the real heart of Krakov, this property has an excellent location
                score of 9.8!
              </span>
              <h2>
                <b>${days * data.cheapestPrice * options.rooms}</b> ({days} days)
              </h2>
              <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
        </div>
      }
      {
        openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>
      }
    </div>
  )
}

export default Hotel