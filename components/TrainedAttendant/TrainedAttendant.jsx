import React from 'react'
import Footer from '../Footer/Footer'
import { MainNav } from '../Nav'
import Nursing from './Nursing/Nursing'
import classes from './TrainedAttendant.module.css'

export default function TrainedAttendant() {
    return (
        <div>
            <MainNav />
            <Nursing />
            <Footer />
        </div>
    )
}
