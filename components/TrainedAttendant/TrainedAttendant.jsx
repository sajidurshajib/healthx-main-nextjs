import React from 'react'
import { MainNav } from '../Nav'
import Nursing from './Nursing/Nursing'
import classes from './TrainedAttendant.module.css'

export default function TrainedAttendant() {
    return (
        <div>
            <MainNav />
            <Nursing />
        </div>
    )
}
