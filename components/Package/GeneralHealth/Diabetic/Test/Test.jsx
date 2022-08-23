import React from 'react'
import classes from './Test.module.css'

export default function Test() {
    return (
        <div className={classes.Test}>
            <h3> What are the tests</h3>
            <ul className={classes.gridThree}>
                <li className={classes.table}>
                    <h1 className={classes.tableHeader}>Premium Package</h1>

                    <ol className={classes.tableOptions}>
                        <li>CBC </li>
                        <li>HbA1C</li>
                        <li>Fasting Blood Sugar</li>
                        <li>Urine R/E </li>
                        <li> Creatinine </li>
                        <li>Fasting Lipid Profile</li>
                    </ol>

                    <button className={classes.tableStart}>Order Now</button>
                </li>
                <li className={classes.table}>
                    <h1 className={classes.tableHeader}>Gold Package</h1>

                    <ul className={classes.tableOptions}>
                        <li>HbA1C </li>
                        <li>Fasting Blood Sugar</li>
                        <li> S.Creatinine </li>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </ul>

                    <button className={classes.tableStart}>Order Now</button>
                </li>
                <li className={classes.table}>
                    <h1 className={classes.tableHeader}>Silver Package</h1>

                    <ul className={classes.tableOptions}>
                        <li>HbA1C</li>
                        <li>FBS & 2HBAF</li>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </ul>

                    <button className={classes.tableStart}>Order Now</button>
                </li>
            </ul>
        </div>
    )
}
