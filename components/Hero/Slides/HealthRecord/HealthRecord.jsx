import React from 'react'
import Searchbar from '../../Searchbar/Searchbar'
import classes from './HealthRecord.module.css'

export default function HealthRecord() {
    return (
        <div className={`${classes.HealthRecord} ${classes.container}`}>
            <div className={classes.grid}>
                <div className={classes.Wrapper}>
                    <h2>
                        SAVE YOUR PRESCRIPTIONS <br /> TRACK YOUR OWN <br /> HEALTH RECORD
                    </h2>
                    <p>20+ Health Indicators</p>
                    <div>{/* <Image src={Med} width={320} height={300} alt="" /> */}</div>
                    {/* <div>
                        <Searchbar placeholder={'Search health by name or date'} />
                    </div> */}
                    <button>Check Now!</button>
                </div>
            </div>
        </div>
    )
}
