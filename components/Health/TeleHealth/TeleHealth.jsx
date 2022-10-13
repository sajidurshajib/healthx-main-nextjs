import Image from 'next/image'
import React from 'react'
import T1 from '../../../assets/health/t1.jpg'
import T2 from '../../../assets/health/t2.jpg'
import T3 from '../../../assets/health/t3.jpg'
import T4 from '../../../assets/health/t4.jpg'
import classes from './TeleHealth.module.css'

export default function TeleHealth() {
    return (
        <div className={classes.tele}>
            <p>
                <span>TELE HEALTH</span> – Consult with Top Doctors Instantly
            </p>
            <div className={classes.grid}>
                <div>
                    <div>
                        <Image src={T1} width={300} height={200} alt="" className={classes.img} />
                        <p>
                            24x7 Doctor <br /> Consultation
                        </p>
                    </div>
                    <span>Connect within 10 minutes</span>
                </div>
                <div>
                    <div>
                        <Image src={T2} width={300} height={200} alt="" />
                        <p>
                            Find Specialist Doctor <br /> Near You
                        </p>
                    </div>
                    <span>Pool of 1,000+ Specialists</span>
                </div>
                <div>
                    <div>
                        <Image src={T3} width={300} height={200} alt="" />
                        <p>
                            Book Online or offline <br /> Appointment
                        </p>
                    </div>
                    <span>Book online or offline appointment for consultations</span>
                </div>
                <div>
                    <div>
                        <Image src={T4} width={300} height={200} alt="" />
                        <p>
                            Get e-Prescription at <br /> ‘My Health Portal’
                        </p>
                    </div>
                    <span>Get e-prescription easily at My Health Portal</span>
                </div>
            </div>
        </div>
    )
}
