import Image from 'next/image'
import Link from 'next/link'
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
                <span>Tele Health</span> – Consult with Top Doctors Instantly
            </p>
            <div className={classes.grid}>
                <div>
                    <div>
                        <Image src={T1} width={300} height={200} alt="" />
                        <Link href="/find-doctors">
                            <a>
                                24x7 Doctor <br /> Consultation
                            </a>
                        </Link>
                    </div>
                    <span>Connect with Doctors within 15 minutes 24x7</span>
                </div>
                <div>
                    <div>
                        <Image src={T2} width={300} height={200} alt="" />
                        <Link href="/find-doctors">
                            <a>
                                Find Specialist Doctor <br /> Near You
                            </a>
                        </Link>
                    </div>
                    <span>
                        Pool of 1,000+ from 30+ <br /> Specialists
                    </span>
                </div>
                <div>
                    <div>
                        <Image src={T3} width={300} height={200} alt="" />
                        <Link href="/find-doctors">
                            <a>
                                Book Online or offline <br /> Appointment
                            </a>
                        </Link>
                    </div>
                    <span>Book online or offline appointment for consultations</span>
                </div>
                <div>
                    <div>
                        <Image src={T4} width={300} height={200} alt="" />
                        <Link href="/find-doctors">
                            <a>
                                Get e-Prescription at <br /> ‘My Health Portal’
                            </a>
                        </Link>
                    </div>
                    <span>Get e-prescription easily at My Health Portal</span>
                </div>
            </div>
        </div>
    )
}
