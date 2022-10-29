import { useState, useEffect, useContext } from 'react'
import classes from './ProfileDetail.module.css'

const ProfileDetail = ({ qualifications }) => {
    return (
        <div className={classes.ProfileDetail}>
            {qualifications.map((qualification) => (
                <div className={classes.Basic}>
                    <div>
                        <h2>{qualification.degree}</h2>
                        <ul>
                            <li>{qualification.institute}</li>
                            <p>{qualification.speciality}</p>
                            <p>
                                {qualification.start_date.slice(0, 4)} -{' '}
                                {qualification.end_date !== null ? qualification.end_date.slice(0, 4) : 'Studying'}
                            </p>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ProfileDetail
