import { faMapMarkedAlt, faStethoscope, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Doc from '../../../assets/doctor/doc.png'
import classes from './SearchDoctor.module.css'

export default function SearchDoctor() {
    const [doctors, setDoctors] = useState([])
    const [search, setSearch] = useState('')

    const [hide, setHide] = useState(false)
    const [cross, setCross] = useState(false)
    const api = process.env.NEXT_PUBLIC_API_URL

    const searchHandler = (search) => {
        if (search.length > 0) {
            setHide(true)
            setCross(true)
        }

        if (search.length < 1) {
            setHide(false)
            setCross(false)
        }
        setSearch(search)
    }

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`${api}/doctors/search/?search=${search}&skip=0&limit=5`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'GET',
            })
            let data = await response.json()
            if (response.ok) {
                setDoctors(data)
                console.log('dd2', data)
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
        <div className={classes.searchDoctor}>
            <form className={classes.wrapperRight}>
                <div className={classes.searchBar}>
                    <span>
                        <FontAwesomeIcon icon={faStethoscope} height={10} width={15} />
                    </span>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => searchHandler(e.target.value)}
                        placeholder="Search doctor by speciality, location or name"
                    />
                    {search.length > 0 && cross && (
                        <div
                            className={classes.cross}
                            onClick={() => {
                                setHide(false)
                                setDoctors([])
                                setSearch('')
                            }}>
                            x
                        </div>
                    )}
                </div>
                {/* <div className={classes.space}></div>
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
                </div> */}
            </form>

            {hide && (
                <div className={classes.doctorShow}>
                    {doctors &&
                        doctors.map((info, i) => (
                            <div className={classes.optSelect} key={i}>
                                <div>
                                    <div>
                                        <Image src={Doc} width={80} height={80} />
                                    </div>
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
        </div>
    )
}
