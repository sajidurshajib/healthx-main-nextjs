import React from 'react'
import Footer from '../Footer/Footer'
import classes from './AboutUs.module.css'
import ContactUs from './ContactUs/ContactUs'
import Hero from './Hero/Hero'
import Mission from './Mission/Mission'
import Offer from './Offer/Offer'
import OurService from './OurService/OurService'
import Dream from './Team/Dream/Dream'
import Team from './Team/Team'

export default function AboutUs() {
    return (
        <div className={classes.wrapper}>
            <Hero />
            <Mission />
            <OurService />
            <Offer />
            <div className={classes.section}>
                <Team />
                <Dream />
                <ContactUs />
            </div>
            <Footer />
        </div>
    )
}
