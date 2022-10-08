import React from 'react'
import classes from './HealthRecord.module.css'

export default function HealthRecord() {
    return (
        <div className={`${classes.HealthRecord} ${classes.container}`}>
            <div className={classes.grid}>
                <div className={classes.Wrapper}>
                    <h2>Track Your Heath Record</h2>
                    <p>Health Record</p>
                </div>
            </div>
        </div>
    )
}
