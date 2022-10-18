import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import classes from './DoctorSearch.module.css'

const DoctorSearch = () => {
    const [doctors, setDoctors] = useState([])
    const [search, setSearch] = useState('')
    const [searchHide, setSearchHide] = useState(false)

    const api = process.env.NEXT_PUBLIC_API_URL

    const searchHandler = (search) => {
        if (search.length > 0) {
            setSearchHide(true)
        }

        if (search.length < 1) {
            setSearchHide(false)
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
        <div className={classes.searchDoctor}>
            <form className={classes.wrapperRight}>
                <div className={classes.searchBar}>
                    <span>
                        <FontAwesomeIcon icon={faSearch} height={10} width={15} />
                    </span>
                    <input
                        type="text"
                        placeholder="search by name, location, speciality"
                        value={search}
                        onChange={(e) => searchHandler(e.target.value)}
                    />
                </div>
            </form>
            {console.log(doctors)}
            {searchHide && (
                <div className={classes.optAllDoc}>
                    {doctors &&
                        doctors.map((info, i) => (
                            <div className={classes.optSelect} key={i}>
                                <div>
                                    <Link href={`/${info?.id}`}>
                                        <a>
                                            <option>
                                                {info?.name} | {info?.specialities[0]?.speciality}
                                            </option>
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
export default DoctorSearch
