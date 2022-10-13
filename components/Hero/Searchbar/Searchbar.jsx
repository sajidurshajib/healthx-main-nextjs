import React from 'react'
import classes from './Searchbar.module.css'

export default function Searchbar(props) {
    return (
        <div className={classes.searchbar}>
            <input type="text" placeholder={props.placeholder} />
        </div>
    )
}
