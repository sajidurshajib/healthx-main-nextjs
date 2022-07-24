import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import service from '../../assets/service/service.png'
import classes from './ServiceBox.module.css'

export default function SeriveBox() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>Our Health Plans</div>
            <div className={classes.service}>
                <div className={classes.box}>
                    <div className={classes.wrap}>
                        <p className={classes.number}>01</p>
                        <div className={classes.icon}>
                            <Image src={service} height={140} width={140} alt="" />
                        </div>
                        <Link href="plan">
                            <a>
                                <p className={classes.title}>Basic Health Package</p>
                            </a>
                        </Link>
                        <span>
                            Basic health package is designed to ensure the daily fitness of healthy Life Style by
                            monitoring the vital parameters of Diabetes, Blood Pressure & Weight. It will increase the
                            daily activity as well as notify individuals whether need to talk with the Doctors to take
                            any preventative measures.
                        </span>
                        <p className={classes.show}>Diabetes | Blood Pressure | Weight | Pulse Measurement</p>
                        <Link href="plan">
                            <a>
                                <button>View Details</button>
                            </a>
                        </Link>
                    </div>
                </div>

                <div className={classes.box}>
                    <div className={classes.wrap}>
                        <p className={classes.number}>02</p>
                        <div className={classes.icon}>
                            <Image src={service} height={140} width={140} alt="" />
                        </div>
                        <Link href="plan">
                            <a>
                                <p className={classes.title}>Personal Health Package</p>
                            </a>
                        </Link>
                        <span>
                            It is designed to ensure the healthcare need of individuals. Primary Health Care need is now
                            a common need in our daily life. Healthcare pocket expense is increasing day by day. To meet
                            the need of healthcare service at affordable price we are offering.
                        </span>
                        <p className={classes.show}>
                            24x7 Doctor Service | Medicine Delivery | Diagnostic Test | Health Insurance
                        </p>
                        <Link href="plan">
                            <a>
                                <button>View Details</button>
                            </a>
                        </Link>
                    </div>
                </div>

                <div className={classes.box}>
                    <div className={classes.wrap}>
                        <p className={classes.number}>03</p>
                        <div className={classes.icon}>
                            <Image src={service} height={140} width={140} alt="" />
                        </div>
                        <Link href="plan">
                            <a>
                                <p className={classes.title}>Family Health Package</p>
                            </a>
                        </Link>
                        <span>
                            It is designed to ensure the healthcare need of individuals & their family members (4
                            person). Primary Health Care need is now a common need in our daily life. Healthcare pocket
                            expense is increasing day by day. To meet the need of healthcare service at affordable price
                            we are offering.
                        </span>
                        <p className={classes.show}>
                            24x7 Doctor Service | Medicine Delivery | Diagnostic Test | Health Insurance
                        </p>
                        <Link href="plan">
                            <a>
                                <button>View Details</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
