import { faL } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Tele from '../../../../assets/hero/tele.png'
import Searchbar from '../../Searchbar/Searchbar'
import classes from './Telemedicine.module.css'

const Telemedicine = () => {
    const [doctors, setDoctors] = useState([])
    const [search, setSearch] = useState('')
    const [searchHide, setSearchHide] = useState(false)
    const [cross, setCross] = useState(false)

    const api = process.env.NEXT_PUBLIC_API_URL

    const searchHandler = (search) => {
        if (search.length > 0) {
            setSearchHide(true)
            setCross(true)
        }

        if (search.length < 1) {
            setSearchHide(false)
            setCross(false)
        }
        setSearch(search)
    }

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`${api}/doctors/search/?search=${search}&skip=0&limit=10`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'GET',
            })
            let data = await response.json()
            if (response.ok) {
                setDoctors(data)
            } else {
                console.log('data not fetching')
            }
        }
        try {
            fetchData()
        } catch {
            setDoctors([])
        }
    }, [search])

    return (
        <>
            {/* <DoctorSearch /> */}
            <div className={`${classes.Telemedicine} ${classes.container}`}>
                <div className={classes.grid}>
                    <div className={classes.Wrapper}>
                        <h2>
                            FIND THE BEST DOCTORS <br />& Book Online
                        </h2>
                        <p>FROM THE LARGEST DOCTOR PORTAL OF THE COUNTRY</p>
                        <div>
                            <Searchbar
                                placeholder={'Search doctors by specialty, area or name'}
                                value={search}
                                onChange={(e) => searchHandler(e.target.value)}
                                onClick={() => {
                                    setSearchHide(false)
                                    setSearch('')
                                    setCross(false)
                                    setDoctors([])
                                }}
                                cross={cross}
                            />
                        </div>
                        {searchHide && (
                            <div className={classes.doctorShow}>
                                {doctors &&
                                    doctors.map((info, i) => (
                                        <div className={classes.optSelect} key={i}>
                                            <div>
                                                <Link href={`/${info?.id}`}>
                                                    <a>
                                                        <div>
                                                            <h3>{info?.name}</h3>
                                                            {info?.specialities[0]?.speciality}
                                                        </div>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        )}
                        <button>Book Now!</button>
                        {/* <div>
                            <h5>
                                <FontAwesomeIcon icon={faKitMedical} /> Family Medicine
                            </h5>
                            <h5>
                                <FontAwesomeIcon icon={faBone} /> Orthopedics
                            </h5>
                            <h5>
                                <FontAwesomeIcon icon={faHeartbeat} /> Cardiology
                            </h5>
                            <h5>
                                <FontAwesomeIcon icon={faHandDots} /> Dermatology
                            </h5>
                        </div> */}
                        {/* <div>
                            <p>Popular Searches: </p>
                            <span>medines, vd, skin, kidney</span>
                        </div> */}
                    </div>
                    <div className={classes.search}>
                        {/* <h4>
                            <FontAwesomeIcon icon={faStethoscope} /> Search Doctors
                        </h4> */}
                        <div>
                            <Image src={Tele} width={480} height={450} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Telemedicine
