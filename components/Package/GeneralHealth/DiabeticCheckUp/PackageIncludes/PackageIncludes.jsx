import React from 'react'
import classes from './PackageIncludes.module.css'

export default function PackageIncludes() {
    return (
        <div>
            <div className={classes.packageIncludes}>
                <h3> Package Includes </h3>
                <div>
                    <ul>
                        <li>
                            {' '}
                            <p>Unlimited Doctor Consultation with Healthx GP Doctor for 1 Month. </p>
                        </li>
                        <li>
                            <p>Free access to HEALTHx My health portal to preserve the test reports.</p>
                        </li>
                        <li>
                            <p>Counselling for better clarification of the reports and prescription.</p>
                        </li>
                        <li>
                            <p>8% cashback on medicine purchase.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
