import React from 'react'
import { Featured } from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Footer from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import { PropertyList } from '../../components/propertyList/PropertyList'
import './Home.css'

export const Home = () => {
  return (
    <div className="home">
        <Navbar />
        <Header />
        <div className="container">
          <Featured />
          <h1 className="home-title container">Browse by property type</h1>
          <PropertyList />
          <h1 className="home-title container">Homes guests love</h1>
          <FeaturedProperties />
        </div>
          <MailList />
          <Footer />
    </div>
  )
}
