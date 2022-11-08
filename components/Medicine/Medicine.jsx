import '@fortawesome/free-solid-svg-icons'
import { faCartArrowDown, faList, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'
import Delivery from '../../assets/medicine/delivery.png'
import V1 from '../../assets/medicine/v1.png'
import V2 from '../../assets/medicine/v2.png'
import V3 from '../../assets/medicine/v3.png'
import V4 from '../../assets/medicine/v4.png'
import V5 from '../../assets/medicine/v5.png'
import Footer from '../Footer/Footer'
import Searchbar from '../Hero/Searchbar/Searchbar'
import Faq from './Faq/Faq'
import classes from './Medicine.module.css'
import MedicineLine from './MedicineLine/MedicineLine'

export default function Medicine() {
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

    const [medicineLines, setMedicineLines] = useState([])

    const removeItem = (index) => {
        setMedicineLines([...medicineLines.slice(0, index), ...medicineLines.slice(index + 1, medicineLines.length)])
    }

    console.log('m', medicineLines)

    let totalDisplay = 0
    medicineLines.forEach((item) => (totalDisplay = totalDisplay + item.total))

    return (
        <div className={classes.wrapper}>
            <div className={classes.gridBox}>
                <div>
                    <h1>Medicine Delivery</h1>
                    <p>
                        We deliver authentic and quality medicine and health & hygiene products at your doorstep keeping
                        accordance with standard safety protocol. Now you don’t have to move outside to purchase
                        medicine when you can have it at the comfort of your home.
                    </p>
                    <h2 className={classes.header}> Why Do You Need Our Medicine Delivery Service?</h2>
                    <p>
                        HealthX ensures the safety of your health and wealth by selling the best quality of each
                        medicine from all top pharmaceutical companies at the best price possible. Our service team will
                        help you buy medicines as per your prescription, and/or home deliver any over-the-counter
                        medicine you require to solve a minor ailment.
                    </p>

                    <div className={classes.search}>
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
                    <div className={classes.show}>
                        {searchHide && (
                            <div className={classes.medicineShow}>
                                {medicines &&
                                    medicines.map((info, i) => (
                                        <div className={classes.optSelect} key={i}>
                                            <div>
                                                <div>
                                                    <h3>
                                                        {info?.name} - ৳{info?.unit_price}
                                                    </h3>
                                                    {info?.generic} | {info?.form} | {info?.strength} <br />
                                                    <span>{info?.pharmaceuticals}</span>
                                                </div>
                                                <div>
                                                    <button
                                                        onClick={() => {
                                                            setSearchHide(false)
                                                            setCross(false)
                                                            setSearch('')
                                                            setMedicineLines((prev) => [...prev.concat(info)])
                                                        }}>
                                                        Add
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>

                    <div className={classes.medOrder}>
                        <h2>
                            <FontAwesomeIcon icon={faCartArrowDown} /> Medicine Cart
                        </h2>
                        <div className={classes.header}>
                            <span>Sl.</span>
                            <span>Medicine Name</span>
                            <span>Quantity</span>
                            <span>Strength</span>
                            <span>Form</span>
                            <span>Unit Price</span>
                            <span>Total</span>
                            <span>Action</span>
                        </div>

                        {medicineLines.length !== 0 ? (
                            medicineLines.map((med, i) => (
                                <div className={classes.body} key={i}>
                                    <MedicineLine
                                        medicineLines={medicineLines}
                                        setMedicineLines={setMedicineLines}
                                        removeItem={removeItem}
                                        index={i}
                                        med={med}
                                        key={i}
                                    />
                                </div>
                            ))
                        ) : (
                            <span className={classes.messege}>Cart is Empty!</span>
                        )}
                    </div>
                    <div className={classes.total}>
                        {/* <div>
                            <p>Minimum Order 500 TK!</p>
                            <p>Free Delivery Over 1000 TK Order</p>
                        </div> */}
                        <div>
                            <span>Total: </span>

                            <span>{isNaN(totalDisplay + 0) !== true ? `${totalDisplay.toFixed(2)}৳` : ''}</span>
                        </div>
                    </div>
                    <button>Order Now!</button>

                    {/* <h1 className={classes.order}>How to order?</h1>
                    <p>Call us at +8801322658481, +8801571016461</p> */}
                </div>
                <div>
                    <Image
                        className={classes.bannerImg}
                        src={Delivery}
                        layout="responsive"
                        sizes="(min-width: 75em) 33vw,
                        (min-width: 48em) 50vw,
                        100vw"
                        alt=""
                    />
                </div>
            </div>

            <div className={classes.whyHealth}>
                <h1>Why HEALTHx?</h1>
                <div>
                    <div>
                        <Image src={V1} height={48} width={48} className={classes.imgIcon} alt="" />
                        <p> Reliable and fast delivery</p>
                    </div>
                    <div>
                        <Image src={V2} height={48} width={48} className={classes.imgIcon} alt="" />
                        <p> Best price and exclusive offers</p>
                    </div>

                    <div>
                        <Image src={V3} height={50} width={50} className={classes.imgIcon} alt="" />
                        <p>All Time Availability</p>
                    </div>

                    <div>
                        <Image src={V4} height={44} width={44} className={classes.imgIcon} alt="" />
                        <p> Ensuring COVID-19 safety protocol</p>
                    </div>

                    <div>
                        <Image src={V5} height={40} width={40} className={classes.imgIcon} alt="" />
                        <p> E-prescription facility through My Health</p>
                    </div>
                </div>
            </div>

            <h2>Types of delivery service</h2>
            <div className={classes.service}>
                <div>
                    <h3> General Medicine Delivery Service</h3>
                    <p> We ensure all kinds of prescription medicine </p>
                </div>
                <div>
                    <h3> Special Medicine Delivery Service</h3>
                    <p> We deliver medicines especially dedicated for cancer & kidney patients</p>
                </div>
                <div>
                    <h3> Hospital Medicine delivery service </h3>
                    <p> We deliver medicines to hospital admitted patients</p>
                </div>
            </div>

            <div className={classes.faq}>
                <Faq />
            </div>
        </div>
    )
}
