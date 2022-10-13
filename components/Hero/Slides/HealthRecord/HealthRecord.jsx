import React from 'react'
import classes from './HealthRecord.module.css'

export default function HealthRecord() {
    return (
        <div className={`${classes.HealthRecord} ${classes.container}`}>
            <div className={classes.grid}>
                <div className={classes.Wrapper}>
                    <h2>SAVE YOUR PRESCRIPTIONS & TRACK YOUR OWN HEALTH RECORD</h2>
                    <p>20+ Health Indicators</p>
                </div>
            </div>
        </div>
    )
}
