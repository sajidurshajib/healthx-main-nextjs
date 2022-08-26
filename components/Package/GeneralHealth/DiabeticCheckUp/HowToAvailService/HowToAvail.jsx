import React from 'react'
import classes from './HowToAvail.module.css'

export default function HowToAvail() {
    return (
        <div>
            <div className={classes.availTheServices}>
                <h3> How to avail the Services </h3>
                <div>
                    <ul>
                        <li>
                            {' '}
                            <p>Select Package </p>
                        </li>
                        <li>
                            <p>Book Preferred Time for the sample collection from Home </p>
                        </li>
                        <li>
                            <p>Complete the payment</p>
                        </li>
                        <li>
                            <p>Phlebotomist to arrive at home on due time </p>
                        </li>
                        <li>
                            <p>
                                Report to send at home at 12-48 hours. Online report will also be saved at My Health
                                Portal at Healthx{' '}
                            </p>
                        </li>
                        <li>
                            <p>
                                Customer service management of HEALTHx will contact after completion of the order
                                submission{' '}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
