import React from 'react'
import classes from './AboutUs.module.css'
import Approach from './Approach/Approach'
import ContactUs from './ContactUs/ContactUs'
import DataPrivacy from './DataPrivacy/DataPrivacy'
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
            {/* <Approach /> */}
            {/* <DataPrivacy /> * */}
            <Team />

            <Dream />

            <ContactUs />
        </div>
    )
}
