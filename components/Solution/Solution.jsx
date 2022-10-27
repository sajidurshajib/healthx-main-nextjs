import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import d1 from '../../assets/solution/d1.png'
import d2 from '../../assets/solution/d2.png'
import d3 from '../../assets/solution/d3.png'
import d4 from '../../assets/solution/d4.png'
import e3 from '../../assets/solution/e3.png'
import e4 from '../../assets/solution/e4.png'
import p1 from '../../assets/solution/p1.png'
import p2 from '../../assets/solution/p2.png'
import p3 from '../../assets/solution/p3.png'
import p4 from '../../assets/solution/p4.png'
import classes from './Solution.module.css'

export default function Solution() {
    // const [selected, setSelected] = useState('listItem1')

    const handleChange = (e) => {
        console.log(e.target.value)
        setSelected(e.target.value)
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                OUR SOLUTIONS <span>– for all Your Healthcare Need</span>
            </div>
            <div className={classes.innerWrap}>
                <div className={classes.container}>
                    <ul>
                        <li>
                            {/* <input
                                type="checkbox"
                                id="listItem1"
                                value="listItem1"
                                checked={selected === 'listItem1'}
                                onChange={handleChange}
                            />
                            <label htmlFor="listItem1" className={classes.labelMain}>
                                My Health
                                <span className={selected === 'listItem1' ? classes.span2 : classes.span}>
                                    &#10149;
                                </span>
                            </label> */}
                            <ul>
                                <div className={classes.innerContainer}>
                                    <div className={classes.collab}>
                                        <div className={classes.collabContent}>
                                            <span>MY HEALTH PORTAL</span>
                                            <p>
                                                One Stop Digital Healthcare Solution <br /> for Personal Health Record &
                                                Healthcare Service Order.
                                            </p>
                                            <Link href="https://user.healthxbd.com/" target="__blank">
                                                <a>Register</a>
                                            </Link>
                                        </div>
                                        <div className={classes.collabGrid}>
                                            <div>
                                                <span>
                                                    <Image src={p1} width={50} height={50} alt="" />
                                                </span>
                                                <p>Find Doctors</p>
                                            </div>
                                            <div>
                                                <span>
                                                    <Image src={p2} width={50} height={50} alt="" />
                                                </span>
                                                <p>Medicine Delivery</p>
                                            </div>
                                            <div>
                                                <span>
                                                    <Image src={p3} width={50} height={50} alt="" />
                                                </span>
                                                <p>Nursing Service</p>
                                            </div>
                                            <div>
                                                <span>
                                                    <Image src={p4} width={50} height={50} alt="" />
                                                </span>
                                                <p>24x7 Consultation</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </li>

                        <li>
                            {/* <input
                                type="checkbox"
                                id="listItem2"
                                value="listItem2"
                                checked={selected === 'listItem2'}
                                onChange={handleChange}
                            />

                            <label htmlFor="listItem2" className={classes.labelMain}>
                                Smart Doctor
                                <span className={selected === 'listItem2' ? classes.span2 : classes.span}>
                                    &#10149;
                                </span>
                            </label> */}
                            <ul>
                                <div className={classes.innerContainer}>
                                    <div className={classes.collab}>
                                        <div className={classes.collabGrid}>
                                            <div>
                                                <span>
                                                    <Image src={d1} width={50} height={50} alt="" />
                                                </span>
                                                <p>E Prescription</p>
                                            </div>
                                            <div>
                                                <span>
                                                    <Image src={d2} width={50} height={50} alt="" />
                                                </span>
                                                <p>Patient Records</p>
                                            </div>
                                            <div>
                                                <span>
                                                    <Image src={d3} width={50} height={50} alt="" />
                                                </span>
                                                <p>Flexible Scheduling</p>
                                            </div>
                                            <div>
                                                <span>
                                                    <Image src={d4} width={50} height={50} alt="" />
                                                </span>
                                                <p>Data Analytics</p>
                                            </div>
                                        </div>
                                        <div className={classes.collabContent}>
                                            <span>SMART DOCTOR SOLUTION</span>
                                            <p>
                                                Smart Doctor solution offers Doctor's Digital Profile, Digital
                                                promotion, Patient appointment, online & offline prescription, Patient
                                                history, medical record, health data analytics, clinical & medical
                                                education etc.
                                            </p>
                                            <Link href="https://doc.healthxbd.com/" target="__blank">
                                                <a>Get Started</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </li>

                        <li>
                            {/* <input
                                type="checkbox"
                                id="listItem3"
                                value="listItem3"
                                checked={selected === 'listItem3'}
                                onChange={handleChange}
                            />
                            <label htmlFor="listItem3" className={classes.labelMain}>
                                Smart Pharmacy
                                <span className={selected === 'listItem3' ? classes.span2 : classes.span}>
                                    &#10149;
                                </span>
                            </label> */}
                            <ul>
                                <div className={classes.innerContainer}>
                                    <div className={classes.collab}>
                                        <div className={classes.collabContent}>
                                            <span>SMART PHARMACY</span>
                                            <p>
                                                The smart pharmacy will provides you accurate medication dispensing,
                                                reduced waiting times, absence of medication errors, and increased
                                                number of drugs dispensed daily with dashboards.
                                            </p>
                                            <Link href="https://pharmacy.healthxbd.com/" target="__blank">
                                                <a>Get Started</a>
                                            </Link>
                                        </div>
                                        <div className={classes.collabGrid}>
                                            <div>
                                                <span>
                                                    <Image src={d4} width={50} height={50} alt="" />
                                                </span>
                                                <p>Friendly Dashboards</p>
                                            </div>
                                            <div>
                                                <span>
                                                    <Image src={d2} width={50} height={50} alt="" />
                                                </span>
                                                <p>Stock Management</p>
                                            </div>
                                            <div>
                                                <span>
                                                    <Image src={e3} width={50} height={50} alt="" />
                                                </span>
                                                <p>Easy Customizable</p>
                                            </div>
                                            <div>
                                                <span>
                                                    <Image src={e4} width={50} height={50} alt="" />
                                                </span>
                                                <p>Buying & Selling Report</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
