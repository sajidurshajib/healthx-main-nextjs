import React from 'react'
import Appointment from './Appointment/Appointment'
import Consultation from './Consultation/Consultation'
import HomeHealth from './HomeHealth/HomeHealth'
import TeleHealth from './TeleHealth/TeleHealth'

export default function Health() {
    return (
        <div>
            <TeleHealth />
            <Consultation />
            <Appointment />
            <HomeHealth />
        </div>
    )
}
