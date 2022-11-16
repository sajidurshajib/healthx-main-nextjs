import React from 'react'
import classes from './Popup.module.css'

export default function Popup({ setIsOpen, doctor, index }) {
    return (
        <div className={classes.popup} key={index}>
            <div className={classes.overlay} onClick={() => setIsOpen(false)}></div>
            <div className={classes.container}>
                <div className={classes.close} onClick={() => setIsOpen(false)}>
                    &times;
                </div>

                <div>
                    <p>
                        For <span>{doctor?.User?.name}</span>'s Appoinment Booking <br /> Please Call at
                    </p>
                    <a href="tel:+8801322658481">+88 01322658481</a>
                </div>
            </div>
        </div>
    )
}
