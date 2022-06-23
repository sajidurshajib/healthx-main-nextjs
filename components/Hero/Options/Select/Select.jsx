import classes from './Select.module.css'
import { useState, useEffect } from 'react'


const Select = (props) => {

    let blue = false
    if(props.number === props.id){
        blue = true
    }        


    return (
        <div className={blue === true ? classes.SelectBlue: classes.Select} onClick={()=>props.setId(props.number)} >
            <div className={classes.SelectWrapper}>
                {props.children}
            </div>
        </div>)
}

export default Select