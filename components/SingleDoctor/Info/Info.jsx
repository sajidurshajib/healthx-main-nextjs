import React from 'react'
import classes from './Info.module.css'

export default function Info({ doctor, schedules }) {
    const start = schedules[0]
    const end = schedules.slice(-1)[0]

    return (
        <div className={classes.infoWrapper}>
            <div className={classes.box}>
                <div>
                    <div className={classes.info}>
                        <div>
                            <p>Consultation Fee</p>
                            <p>
                                ৳{doctor?.doctor?.online_fees}
                                <span>(inc. VAT)</span>
                            </p>
                        </div>
                        {/* <div>
                            <p>Total Consultation</p>
                            <p>10</p>
                        </div> */}
                    </div>
                    <div className={classes.info}>
                        {/* <div>
                            <p>Follow-Up Fee</p>
                            <p>
                                ৳<span>(inc. VAT)</span> <span>(within 10 days)</span>
                            </p>
                        </div> */}

                        <div>
                            <p>Consultation Time</p>
                            {schedules.length > 0 ? (
                                <p>
                                    {start.time.split(':')[1].length === 2 ? start.time : `${start.time}0`}{' '}
                                    {start.am_pm} - {end.time.split(':')[1].length === 2 ? end.time : `${end.time}0`}{' '}
                                    {end.am_pm}
                                </p>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.box}>
                <p>{/* Availability: <span>Sat, Sun, Mon, Tue, Wed, Thu, Fri</span> */}</p>
            </div>
        </div>
    )
}
