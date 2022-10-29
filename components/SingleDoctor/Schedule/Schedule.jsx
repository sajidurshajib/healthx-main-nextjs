import { useState, useEffect } from 'react'
import classes from './Schedule.module.css'

export default function Schedule({ api, schedules }) {
    const date = new Date()
    const today = date.toString()

    return (
        <div className={classes.wrapper}>
            <div className={classes.slot}>
                <div className={classes.slotHead}>
                    {today.slice(4, 10)}, {today.slice(11, 15)} (Online)
                </div>
                <div className={classes.slotBody}>
                    <div className={classes.slotButtons}>
                        {schedules.map((slot, i) =>
                            slot.online === true ? (
                                <div className={classes.slotButton} key={i}>
                                    <button>
                                        {slot.time.split(':')[1].length === 2 ? slot.time : `${slot.time}0`}{' '}
                                        {slot.am_pm}
                                    </button>
                                </div>
                            ) : (
                                ''
                            )
                        )}
                    </div>
                </div>
            </div>

            <div className={classes.slot}>
                <div className={classes.slotHead}>
                    {today.slice(4, 10)}, {today.slice(11, 15)} (Offline)
                </div>
                <div className={classes.slotBody}>
                    <div className={classes.slotButtons}>
                        {schedules.map((slot, i) =>
                            slot.online === false ? (
                                <div className={classes.slotButton} key={i}>
                                    <button>
                                        {slot.time.split(':')[1].length === 2 ? slot.time : `${slot.time}0`}{' '}
                                        {slot.am_pm}
                                    </button>
                                </div>
                            ) : (
                                ''
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
