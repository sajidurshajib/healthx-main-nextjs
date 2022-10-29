import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Med from '../../../../assets/hero/med.png'
import Searchbar from '../../Searchbar/Searchbar'
import classes from './MedicineOrder.module.css'

const MedicineOrder = () => {
    const [medicines, setMedicines] = useState([])
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
            let response = await fetch(`${api}/medicines/?search_medicine=${search}&skip=0&limit=10`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'GET',
            })
            let data = await response.json()
            if (response.ok) {
                setMedicines(data)
                console.log('med', data)
            } else {
                console.log('data not fetching')
            }
        }
        try {
            fetchData()
        } catch {
            setMedicines([])
        }
    }, [search])

    return (
        <div className={`${classes.MedicineOrder} ${classes.container}`}>
            <div className={classes.grid}>
                <div className={classes.Wrapper}>
                    <h2>
                        ORDER MEDICINE <br /> GET 10% CASHBACK
                    </h2>
                    <p>Medicine Delivered from 500+ Govt. approved Model Pharmacy</p>
                    <div>
                        <Searchbar
                            placeholder={'Search medicines by name, generic or price'}
                            value={search}
                            onChange={(e) => searchHandler(e.target.value)}
                            onClick={() => {
                                setSearchHide(false)
                                setSearch('')
                                setCross(false)
                                setMedicines([])
                            }}
                            cross={cross}
                        />
                    </div>
                    {searchHide && (
                        <div className={classes.medicineShow}>
                            {medicines &&
                                medicines.map((info, i) => (
                                    <div className={classes.optSelect} key={i}>
                                        <div>
                                            {/* <Link href={`/${info?.id}`}> */}
                                            {/* <a> */}
                                            <div>
                                                <h3>
                                                    {info?.name} - ৳{info?.unit_price}
                                                </h3>
                                                {info?.generic} | {info?.form} | {info?.strength} <br />
                                                <span>{info?.pharmaceuticals}</span>
                                            </div>
                                            {/* </a> */}
                                            {/* </Link> */}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    )}

                    <Link href="medicine-delivery">
                        <a>
                            <button>Order Now!</button>
                        </a>
                    </Link>
                    {/* <h4>
                        <FontAwesomeIcon icon={faCartArrowDown} /> Search Medicines
                    </h4> */}
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
                        <span>napa extra, ace plus, pantonix</span>
                    </div> */}
                </div>
                <div className={classes.search}>
                    <div>
                        <Image src={Med} width={480} height={380} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedicineOrder
