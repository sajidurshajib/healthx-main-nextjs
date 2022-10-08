import { faLocation, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Pic from '../../../../assets/bg/telemedicine.png'
import Tele from '../../../../assets/hero/tele.png'
import DoctorSearch from './DoctorSearch/DoctorSearch'
import classes from './Telemedicine.module.css'

const Telemedicine = () => {
    return (
        <>
            {/* <DoctorSearch /> */}
            <div className={`${classes.Telemedicine} ${classes.container}`}>
                <div className={classes.grid}>
                    <div className={classes.Wrapper}>
                        <h2>Telemedicine Service</h2>
                        <p>Consult with Top Doctors Online, 24x7</p>
                        <div>
                            <Image src={Tele} width={480} height={450} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Telemedicine
