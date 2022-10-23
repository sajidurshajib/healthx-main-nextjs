import Image from 'next/image'
import React from 'react'
import H1 from '../../../assets/health/h1.png'
import H2 from '../../../assets/health/h2.jpg'
import H3 from '../../../assets/health/h31.jpg'
import H4 from '../../../assets/health/h41.jpg'
import classes from './HomeHealth.module.css'

export default function HomeHealth() {
    return (
        <div className={classes.health}>
            <p>
                <span> HOME HEALTH</span> – Get all Home Health Services in a Single Platform
            </p>
            <div className={classes.flex}>
                <div className={classes.grid}>
                    <div>
                        <Image src={H1} width={300} height={200} alt="" className={classes.img} />
                        <div>
                            <p>
                                Medicine & Health Accessories <br /> Delivery
                            </p>
                            <span>
                                Get Medicine Delivery at Home <br /> within 6 hours
                            </span>
                        </div>
                    </div>
                    <div>
                        <Image src={H2} width={300} height={200} alt="" className={classes.img} />
                        <div>
                            <p>
                                Pathology Tests at <br /> Home
                            </p>
                            <span>
                                Blood & Urine Test
                                <br />
                                at Home
                            </span>
                        </div>
                    </div>
                    <div>
                        <Image src={H3} width={300} height={200} alt="" className={classes.img} />
                        <div>
                            <p>
                                MBBS Doctor Visit at <br /> Home
                            </p>
                            <span>
                                Book MBBS Doctor Visit
                                <br />
                                at Home
                            </span>
                        </div>
                    </div>
                    <div>
                        <Image src={H4} width={300} height={200} alt="" className={classes.img} />
                        <div>
                            <p>
                                Nurse/ Attendant / Physiotherapy <br /> Service
                            </p>
                            <span>
                                Get Trusted & Quality Caregiving <br /> at Home
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
