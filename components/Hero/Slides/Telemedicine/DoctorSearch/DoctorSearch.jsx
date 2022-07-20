import { faLocation, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import specialities from '../../../../../spc.json'
import classes from './DoctorSearch.module.css'

export const getStaticProps = async () => {
    const api = 'http://127.0.0.1:8000/api/v1'
    const fetchData = async () => {
        const response = await fetch(`${api}/doctors/search/?district=dha&speciality=ent&name=ab&skip=0&limit=10`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
        })
        const data = await response.json()

        return {
            props: {
                data,
            },
        }
    }
}

const DoctorSearch = ({ data }) => {
    const all = data
    console.log(all)
    const [locationSearch, setLocationSearch] = useState('dhaka')
    const [locationSearchResult, setLocationSearchResult] = useState('')
    const [location, setLocation] = useState([])
    const [locationHide, setLocationHide] = useState(false)

    const locationHandler = (locationSearch) => {
        let match = []
        if (locationSearch.length > 1) {
            match = location.filter((location) =>
                location.DoctorChamber.district.toLowerCase().includes(locationSearch)
            )
            setLocationHide(true)
        }
        setLocationSearch(locationSearch)
        setLocationSearchResult(match)
    }

    const [specialitySearch, setSpecialitySearch] = useState('ent')
    const [specialitySearchResult, setSpecialitySearchResult] = useState([])
    const [speciality, setSpeciality] = useState([])
    const [specialityHide, setSpecialityHide] = useState(false)

    const specialityHandler = (specialitySearch) => {
        let match = []
        if (specialitySearch.length > 1) {
            match = speciality.filter((speciality) =>
                speciality.DoctorSpeciality.speciality.toLowerCase().includes(specialitySearch)
            )
            setSpecialityHide(true)
        }
        setSpecialitySearch(specialitySearch)
        setSpecialitySearchResult(match)
    }

    const [nameSearch, setNameSearch] = useState('ab')
    const [nameSearchResult, setNameSearchResult] = useState('')
    const [name, setName] = useState([])
    const [nameHide, setNameHide] = useState(false)

    // const nameHandler = (nameSearch) => {
    //     let match = []
    //     if (nameSearch.length > 0) {
    //         match = name.filter((name) => User.name.toLowerCase().includes(nameSearch))
    //         setNameHide(true)
    //     }
    //     setNameSearch(nameSearch)
    //     setNameSearchResult(match)
    // }

    // console.log(locationSearch)
    // console.log(specialitySearch)
    // console.log(nameSearch)

    // const fetchDoctor = async () => {
    //     try {
    //         const searchResult = await fetch(
    //             `${api}/doctors/search/?district=${location}&speciality=${speciality}&name=${name}&skip=0&limit=10`,
    //             {
    //                 method: 'GET',
    //                 headers: {
    //                     Accept: 'application/json',
    //                 },
    //             }
    //         )
    //         const doc = await searchResult.json()
    //         console.log(doc)
    //     } catch {}
    // }
    return (
        <div className={classes.searchDoctor}>
            <form className={classes.wrapperRight}>
                <div className={classes.searchBar}>
                    <span>
                        <FontAwesomeIcon icon={faLocation} height={10} width={15} />
                    </span>
                    <input type="text" placeholder="location" value={locationSearch} onChange={(e) => e.target.value} />
                </div>
                <div className={classes.searchBar}>
                    <span>
                        <FontAwesomeIcon icon={faSearch} height={10} width={15} />
                    </span>
                    <input
                        type="text"
                        placeholder="speciality"
                        value={specialitySearch}
                        onChange={(e) => specialityHandler(e.target.value)}
                    />
                </div>
                <div className={classes.searchBar}>
                    <span>
                        <FontAwesomeIcon icon={faSearch} height={10} width={15} />
                    </span>
                    <input
                        type="text"
                        placeholder="name"
                        value={nameSearch}
                        onChange={(e) => nameHandler(e.target.value)}
                    />
                </div>
                {/* <div className={classes.Search}>
                    <button>Search</button>
                </div> */}
            </form>
            {/* {data.map((info, i) => {
                return <div key={i}>{info.User.name}</div>
            })} */}
        </div>
    )
}
export default DoctorSearch
