import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react'
// import { useParams } from 'react-router-dom'
// import { Auth } from '../../allContext'
import { toMonthNameLong } from '../../utils/date'
import Chambers from './Chambers/Chambers'
import Header from './Header/Header'
import Info from './Info/Info'
import ProfessionalInfo from './ProfessionalInfo/ProfessionalInfo'
import ProfileDetail from './ProfileDetail/ProfileDetail'
import Schedule from './Schedule/Schedule'
import classes from './SingleDoctor.module.css'

export default function SingleDoctor({ id }) {
    const [menu, setMenu] = useState(1)
    const [doctor, setDoctor] = useState([])
    const [picture, setPicture] = useState({})

    const api = process.env.NEXT_PUBLIC_API_URL

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`${api}/doctors/detail/${id}`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'GET',
            })
            let data = await response.json()
            if (response.ok) {
                setDoctor(data)
            } else {
                console.log('data not fetching')
            }
        }

        const fetchPicture = async () => {
            let response = await fetch(`${api}/profile-pic/${id}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            let data = await response.json()
            if (response.ok) {
                setPicture(data.image_string)
            } else {
                setPicture({ image_string: null })
            }
        }

        try {
            fetchData()
            fetchPicture()
        } catch {
            setDoctor([])
            fetchPicture({ image_string: null })
        }
    }, [id])

    return (
        <div className={classes.wrapper}>
            <Header api={api} doctor={doctor} picture={picture} />
            <div className={classes.infoWrapper}>
                <div className={classes.info}>
                    <div>
                        <p>BMDC Number</p>
                        <span>{doctor?.doctor?.bmdc}</span>
                    </div>
                    <div>
                        <p>Total Experience</p>
                        <span>{doctor?.doctor?.exp_year !== null ? doctor?.doctor?.exp_year : 1}+ Years</span>
                    </div>
                    {/* <div>
                        <p>Total Consultations</p>
                        <span>{id}</span>
                    </div>
                    <div>
                        <p>Ratings (1)</p>
                        <span>
                            5.0 <FontAwesomeIcon icon={faStar} style={{ color: 'orange', fontSize: '14px' }} />
                        </span>
                    </div> */}
                    <div>
                        <p>Joined Date</p>
                        <span>
                            {toMonthNameLong(doctor?.user?.created_at.slice(5, 7))}{' '}
                            {doctor?.user?.created_at.slice(0, 4)}
                        </span>
                    </div>
                </div>
            </div>

            <div className={classes.detailsWrapper}>
                <div>
                    <div className={classes.nav}>
                        <span
                            className={menu === 1 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(1)}>
                            Appointment & Schedule
                        </span>
                        <span
                            className={menu === 2 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(2)}>
                            Info
                        </span>

                        <span
                            className={menu === 3 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(3)}>
                            Qualification
                        </span>

                        <span
                            className={menu === 4 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(4)}>
                            Professional Info
                        </span>

                        <span
                            className={menu === 5 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(5)}>
                            Special Achievement
                        </span>

                        <span
                            className={menu === 6 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(6)}>
                            Chambers
                        </span>
                        <span
                            className={menu === 7 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(7)}>
                            Reviews
                        </span>
                    </div>
                    <div>
                        {menu === 1 ? <Schedule /> : null}
                        {menu === 2 ? <Info doctor={doctor} /> : null}
                        {menu === 3 ? <ProfileDetail /> : null}
                        {menu === 4 ? <ProfessionalInfo /> : null}
                        {menu === 6 ? <Chambers /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
