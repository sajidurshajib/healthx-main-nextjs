import { useEffect, useState, useContext } from 'react'
// import { Auth } from '../../../allContext'
import ChamberState from './ChamberState/ChamberState'
import classes from './Chambers.module.css'

const Chambers = ({ api }) => {
    const [chambers, setChambers] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`http://127.0.0.1:8000/api/v1/doctors/chamberdoctor-chambers/2`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'GET',
            })
            let data = await response.json()
            if (response.ok) {
                setChambers(data)
                console.log('chm', data)
            } else {
                console.log('data not fetching')
            }
        }

        try {
            fetchData()
        } catch {
            setChambers([])
        }
    }, [api])

    return (
        <div className={classes.ChamberPage}>
            <div className={classes.Chambers}>
                <div className={classes.head}>
                    <p>Sl.</p>
                    <p>Chamber Name</p>
                    <p>District</p>
                    <p>Detail Address</p>
                    <p>Consultation Fee</p>
                    <p>Status</p>
                </div>
                {chambers.map((chamber, i) => {
                    return (
                        <div className={classes.body} key={i}>
                            <p>{i + 1}</p>
                            <p>{chamber.name}</p>
                            <p>{chamber.district}</p>
                            <p>{chamber.detail_address}</p>
                            <p>৳{chamber.chamber_fee}</p>
                            <p>
                                {chamber.is_active === true ? (
                                    <span className={classes.spanActive}>Active</span>
                                ) : (
                                    <span className={classes.spanOff}>Off</span>
                                )}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Chambers
