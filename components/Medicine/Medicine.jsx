import '@fortawesome/free-solid-svg-icons'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import { useState, useEffect, useContext } from 'react'
import Delivery from '../../assets/medicine/delivery.png'
import V1 from '../../assets/medicine/v1.png'
import V2 from '../../assets/medicine/v2.png'
import V3 from '../../assets/medicine/v3.png'
import V4 from '../../assets/medicine/v4.png'
import V5 from '../../assets/medicine/v5.png'
import { Auth, UserInfo } from '../../context/allContext'
import { dateTime } from '../../utils/date'
import Searchbar from '../Hero/Searchbar/Searchbar'
import Login from '../Login/Login'
import Faq from './Faq/Faq'
import classes from './Medicine.module.css'
import MedicineLine from './MedicineLine/MedicineLine'
import Popup from './Popup/Popup'

export default function Medicine() {
    const [medicines, setMedicines] = useState([])
    const [search, setSearch] = useState('')
    const [searchHide, setSearchHide] = useState(false)
    const [cross, setCross] = useState(false)

    const [medicineLines, setMedicineLines] = useState([])
    const [popup, setPopup] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const api = process.env.NEXT_PUBLIC_API_URL
    const { stateAuth } = useContext(Auth)
    const token = stateAuth?.token
    const { stateUser } = useContext(UserInfo)
    const userDetail = stateUser?.info

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

    // delete cart item
    const removeItem = (index) => {
        setMedicineLines([...medicineLines.slice(0, index), ...medicineLines.slice(index + 1, medicineLines.length)])
    }

    let totalDisplay = 0
    medicineLines.forEach((item) => (item.total !== null ? (totalDisplay = totalDisplay + item.total) : totalDisplay))

    const refreshPage = () => {
        window.location.reload()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const details = [
            {
                service_name: 'medicine_order',
                patient_id: userDetail?.id,
                order_placement: dateTime,
                order_completion: null,
                remarks: 'Order from main website please call for details',
                current_address: 'Dhaka',

                order_value: totalDisplay + 60,
                order_status: 'pending',
                discount_percent: 8,
                payable_amount: totalDisplay - totalDisplay * 0.08 + 60,
                payment_by_customer: 0,
                payment_pending: totalDisplay - totalDisplay * 0.08 + 60,
                last_payment_date: null,
                payment_method: 'cash on delivery',
                payment_status: 'pending',

                service_provider_type: 'pharmacy',
                service_provider_id: 1,
                service_provider_fee: 0,
                service_provider_fee_paid: 0,
                service_provider_fee_pending: 0,
                service_provider_fee_last_update: null,
                service_provider_fee_status: '',

                referral_type: null,
                referral_id: 1,
                referral_provider_fee: 0,
                referral_provider_fee_paid: 0,
                referral_provider_fee_pending: 0,
                referral_provider_fee_last_update: 0,
                referral_provider_fee_status: null,
            },
            medicineLines,
        ]

        let postFetch = await fetch(`${api}/patients/service/medicine`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(details),
        })

        if (postFetch.ok) {
            setMedicineLines([])
            setIsOpen(true)
        } else {
            alert('Something went wrong!, Fill the quantity properly!')
        }
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.gridBox}>
                <div>
                    <h1>Medicine Delivery</h1>
                    <div className={classes.display}>
                        <div>
                            <p>8% Discount</p>
                            <span> On Every Medicine Order</span>
                        </div>
                        <div>
                            <p>Free Delivery</p>
                            <span> Over 1500 Taka Order</span>
                        </div>
                        <div>
                            <p>Quick Delivery</p>
                            <span>Within 6 Hours In Dhaka City</span>
                        </div>
                    </div>
                    <p>
                        We deliver authentic and quality medicine and health & hygiene products at your doorstep keeping
                        accordance with standard safety protocol.
                    </p>
                    {/* <h2 className={classes.header}>Why Do You Need Our Medicine Delivery Service?</h2>
                    <p>
                        HealthX ensures the safety of your health and wealth by selling the best quality of each
                        medicine from all top pharmaceutical companies at the best price possible. Our service team will
                        help you buy medicines as per your prescription, and/or home deliver any over-the-counter
                        medicine you require to solve a minor ailment.
                    </p> */}

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
                            <span>
                                Add Quantity <span className={classes.star}>*</span>
                            </span>
                            <span>Pharmaceuticals</span>
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
                    <div className={classes.buttonAdd}>
                        <div className={classes.extra}>
                            <p>* Note: Medicine Prices, Discount and Delivery Charges May Vary!</p>
                            <p>* For Insulin, Discount will be 3%</p>
                        </div>
                        {medicineLines.length !== 0 ? <span>To add more, search from top again!</span> : ''}
                    </div>
                    <div className={classes.total}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Subtotal: </td>
                                    <td>{isNaN(totalDisplay + 0) !== true ? `${totalDisplay.toFixed(2)}৳` : ''}</td>
                                </tr>
                                <tr>
                                    <td>After 8% Discount: </td>
                                    <td>
                                        {isNaN(totalDisplay + 0) !== true
                                            ? `${(totalDisplay - totalDisplay * 0.08).toFixed(2)}৳`
                                            : ''}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Delivery Fee <span>(Inside Dhaka): </span>
                                    </td>
                                    <td>{medicineLines.length !== 0 ? '60.00৳' : '0.00৳'}</td>
                                    {/* <br />
                                <p>(inside dhaka)</p> */}
                                </tr>
                                <tr>
                                    <td>Total: </td>
                                    {medicineLines.length !== 0 ? (
                                        <td>
                                            {isNaN(totalDisplay + 0) !== true
                                                ? `${(totalDisplay - totalDisplay * 0.08 + 60).toFixed(2)}৳`
                                                : ''}
                                        </td>
                                    ) : (
                                        <td>0.00৳</td>
                                    )}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {stateAuth?.auth !== true ? (
                        <button onClick={() => setPopup(true)}>Order Now!</button>
                    ) : (
                        <button onClick={(e) => handleSubmit(e)}>Place Order</button>
                    )}

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
            {popup && <Login setPopup={setPopup} />}
            {isOpen && <Popup setIsOpen={setIsOpen} />}
        </div>
    )
}
