import React from 'react'
import classes from './WhyImportant.module.css'

export default function WhyImportant() {
    return (
        <div>
            <div className={classes.whyImportant}>
                <h3>Why It is Important </h3>
                <div>
                    <ul>
                        <li>
                            {' '}
                            <p>To know your health better</p>
                        </li>
                        <li>
                            <p>
                                By tracking your blood sugar levels, you can see exactly where you stand and how your
                                diet and lifestyle may be affecting your health.{' '}
                            </p>
                        </li>
                        <li>
                            <p>
                                Early detection of diabetes will help you to adapt healthy changes in the lifestyle
                                followed by earlier treatments for disease management.{' '}
                            </p>
                        </li>
                        <li>
                            <p>
                                {' '}
                                To study the extent of organ damage (liver, kidney, heart) if any, due to high blood
                                glucose levels.
                            </p>
                        </li>
                        <li>
                            <p>
                                Regular monitoring helps in dose adjustments of various medications. Helps to evaluate
                                health risks and lifestyle changes{' '}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
