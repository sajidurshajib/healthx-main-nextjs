import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import A1 from '../../../assets/health/a1.jpg'
import A2 from '../../../assets/health/a2.jpg'
import A3 from '../../../assets/health/a3.jpg'
import A4 from '../../../assets/health/a4.jpg'
import classes from './Appointment.module.css'

export default function Appointment() {
    return (
        <div className={classes.appointment}>
            <p>
                Book Appointment for <span> in-clinic consultation</span>
            </p>
            <div className={classes.grid}>
                <div>
                    <div>
                        <Image src={A1} width={300} height={200} alt="" className={classes.img} />
                    </div>
                    <p>
                        Book Specialist Doctor’s <br /> appointment
                    </p>
                    <Link href="/find-doctors">
                        <a>Book Now!</a>
                    </Link>
                </div>
                <div>
                    <div>
                        <Image src={A2} width={300} height={200} alt="" className={classes.img} />
                    </div>
                    <p>
                        Book Dental Doctor’s <br /> appointment
                    </p>
                    <Link href="/find-doctors">
                        <a>Book Now!</a>
                    </Link>
                </div>
                <div>
                    <div>
                        <Image src={A3} width={300} height={200} alt="" className={classes.img} />
                    </div>
                    <p>
                        Book Dietician / Nutritionist <br /> appointment
                    </p>
                    <Link href="/find-doctors">
                        <a>Book Now!</a>
                    </Link>
                </div>
                <div>
                    <div>
                        <Image src={A4} width={300} height={200} alt="" className={classes.img} />
                    </div>
                    <p>
                        Book Physiotherapist <br /> appointment
                    </p>
                    <Link href="/find-doctors">
                        <a>Book Now!</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
