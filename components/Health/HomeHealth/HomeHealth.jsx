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
                <span> HOME HEALTH</span> – Get all Home Health Services in a single platform
            </p>
            <div className={classes.flex}>
                <div className={classes.grid}>
                    <div>
                        <div>
                            <Image src={H1} width={300} height={200} alt="" className={classes.img} />
                            <p>
                                Medicine & Health Accessories <br /> Delivery
                            </p>
                        </div>
                        <span>Delivery at Home within 3 hours</span>
                    </div>
                    <div>
                        <div>
                            <Image src={H2} width={300} height={200} alt="" className={classes.img} />
                            <p>
                                Pathology Tests at <br /> Home
                            </p>
                        </div>
                        <span>Blood & Urine Sample Collection</span>
                    </div>
                    <div>
                        <div>
                            <Image src={H3} width={300} height={200} alt="" className={classes.img} />
                            <p>
                                MBBS Doctor Visit at <br /> Home
                            </p>
                        </div>
                        <span>Book MBBS Doctor appointment at home</span>
                    </div>
                    <div>
                        <div>
                            <Image src={H4} width={300} height={200} alt="" className={classes.img} />
                            <p>
                                Nurse/ Attendant / Physiotherapy <br /> Service
                            </p>
                        </div>
                        <span>Get trusted & quality caregiving at home</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
