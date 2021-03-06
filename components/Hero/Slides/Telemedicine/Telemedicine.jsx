import { faLocation, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import DoctorSearch from './DoctorSearch/DoctorSearch'
import classes from './Telemedicine.module.css'

const Telemedicine = () => {
    return (
        <>
            <DoctorSearch />
            <div className={`${classes.Telemedicine} ${classes.container}`}>
                <div className={classes.Wrapper}>
                    <h2>Telemedicine Service</h2>
                    <p>Consult with Top Doctors Online, 24x7</p>
                </div>
            </div>
        </>
    )
}

export default Telemedicine
