import React from 'react'
import classes from './WhyUs.module.css'

export default function WhyUs() {
    return (
        <div>
            <div className={classes.whyUs}>
                <h3> Why us </h3>
                <div>
                    <ul>
                        <li>
                            {' '}
                            <p>Affordable cost</p>
                        </li>
                        <li>
                            <p>Certified Lab Partner and you can select your preferred lab partner </p>
                        </li>
                        <li>
                            <p>At-home sample collection </p>
                        </li>
                        <li>
                            <p>No need to travel or stand in a long queue</p>
                        </li>
                        <li>
                            <p>Storage of lab report at My Health Portal</p>
                        </li>
                        <li>
                            <p>Unlimited Doctor Consultation with Healthx GP Doctor for 1 Month</p>
                        </li>
                        <li>
                            <p>Dedicated customer support</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
