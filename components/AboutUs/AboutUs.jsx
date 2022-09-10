import React from 'react'
import classes from './AboutUs.module.css'
import Approach from './Approach/Approach'
import DataPrivacy from './DataPrivacy/DataPrivacy'
import Hero from './Hero/Hero'
import Mission from './Mission/Mission'
import Offer from './Offer/Offer'
import Team from './Team/Team'

export default function AboutUs() {
    return (
        <div className={classes.wrapper}>
            <Hero />
            <Mission />
            <Offer />
            <Approach />
            <DataPrivacy /> *
        </div>
    )
}
