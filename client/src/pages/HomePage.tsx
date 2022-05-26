import React from 'react'
import './homepage.css'
import NavBar from '../components/navbar/NavBar'
import Header from '../components/header/Header'
import Featured from '../components/featured/Featured'
import PropertyList from '../components/propertyList/PropertyList'
import FeaturedProperties from '../components/featuredProperties/FeaturedProperties'
import MailList from '../components/mailList/MailList'
import Footer from '../components/footer/Footer'


const HomePage: React.FC = () => {

  return (
    <>
      <NavBar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </>
  )
}

export default HomePage