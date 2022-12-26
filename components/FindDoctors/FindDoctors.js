import { useState, useEffect, useContext } from 'react'
import DoctorList from './DoctorList/DoctorList'
import classes from './FindDoctors.module.css'
import SearchDoctor from './SearchDoctor/SearchDoctor'

const FindDoctors = () => {
    const [doctors, setDoctors] = useState([])
    const [search, setSearch] = useState('')

    const [limit, setLimit] = useState(10)

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

    const limitUp = () => {
        setLimit((prev) => prev + 10)
    }

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`${api}/admin/doctors/active?skip=0&limit=${limit}`, {
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
    }, [search, limit])

    return (
        <div className={classes.findDoctors}>
            {/* <div className={classes.filter}>
                <p>Filter Doctor</p>
                <div className={classes.filterContainer}>
                    <div className={classes.price}>
                        <p>Filter by price</p>
                        <div>
                            <label className={classes.containerPrice}>
                                ৳50
                                <input type="range" min={50} max={2000} />
                                ৳2000
                            </label>
                        </div>
                    </div>

                    <div className={classes.box}>
                        <p>Filter by specialty</p>
                        <div>
                            <select>
                                <option value=""></option>
                                <option value="">Family Medicine</option>
                                <option value="">Medicine</option>
                            </select>
                            <label className={classes.container}>
                                <input type="checkbox" />
                                <span className={classes.checkmark}></span>
                                Family Medicine
                            </label>
                            <label className={classes.container}>
                                <input type="checkbox" />
                                <span className={classes.checkmark}></span>
                                Medicine
                            </label>
                        </div>
                    </div>

                    <div className={classes.box}>
                        <p>Filter by gender</p>
                        <div>
                            <label className={classes.container}>
                                <input type="checkbox" />
                                <span className={classes.checkmark}></span>
                                Female Doctors
                            </label>
                            <label className={classes.container}>
                                <input type="checkbox" />
                                <span className={classes.checkmark}></span>
                                Male Doctors
                            </label>
                        </div>
                    </div>

                    <div className={classes.box}>
                        <p>Sort by</p>
                        <div>
                            <label className={classes.containerSort}>
                                <input type="radio" id="gender" name="gender" value="male" />
                                <span>Popularity</span>
                            </label>
                            <label className={classes.containerSort}>
                                <input type="radio" id="gender" name="gender" value="male" />
                                <span>Rating</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className={classes.listContainer}>
                <SearchDoctor />
                <h2>Doctor List</h2>
                <DoctorList api={api} doctors={doctors} />
                <button className={classes.loadButton} onClick={(e) => limitUp(e)}>
                    Load More...
                </button>
            </div>
        </div>
    )
}

export default FindDoctors
