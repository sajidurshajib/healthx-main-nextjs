import Image from 'next/image'
import React from 'react'
import Health from '../../../../assets/hero/health3.png'
import Searchbar from '../../Searchbar/Searchbar'
import classes from './HealthRecord.module.css'

export default function HealthRecord() {
    return (
        <div className={`${classes.HealthRecord} ${classes.container}`}>
            <div className={classes.grid}>
                <div className={classes.Wrapper}>
                    <h2>
                        SAVE MEDICAL RECORDS <br /> TRACK HEALTH INDICATORS
                    </h2>
                    <p>Store Your Prescriptions & Medical Reports</p>
                    <div>{/* <Image src={Med} width={320} height={300} alt="" /> */}</div>
                    {/* <div>
                        <Searchbar placeholder={'Search health by name or date'} />
                    </div> */}
                    <button>Check Now!</button>
                </div>
                <div className={classes.search}>
                    <div>
                        <Image src={Health} width={480} height={380} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
