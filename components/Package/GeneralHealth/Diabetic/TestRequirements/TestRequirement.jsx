import React from 'react'
import classes from './TestRequirement.module.css'

export default function TestRequirement() {
    return (
        <div className={classes.container}>
            <div className={classes.testRequirements}>
                <span>Test Requirements: </span>
                <div>
                    <ul>
                        <li>
                            <p> Do not eat or drink anything other than water for 8-12 hours before the test.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
