import { faMapMarkedAlt, faStethoscope, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import classes from './SearchDoctor.module.css'

export default function SearchDoctor() {
    return (
        <div className={classes.searchDoctor}>
            <form className={classes.wrapperRight}>
                <div className={classes.searchBar}>
                    <span>
                        <FontAwesomeIcon icon={faMapMarkedAlt} height={10} width={15} />
                    </span>
                    <input type="text" placeholder="search doctor by location" />
                </div>
                <div className={classes.space}></div>
                <div className={classes.searchBar}>
                    <span>
                        <FontAwesomeIcon icon={faStethoscope} height={10} width={15} />
                    </span>
                    <input type="text" placeholder="search doctor by specialty" />
                </div>
                <div className={classes.space}></div>
                <div className={classes.searchBar}>
                    <span>
                        <FontAwesomeIcon icon={faUserDoctor} height={10} width={15} />
                    </span>
                    <input type="text" placeholder="search doctor by name" />
                </div>
            </form>
        </div>
    )
}
