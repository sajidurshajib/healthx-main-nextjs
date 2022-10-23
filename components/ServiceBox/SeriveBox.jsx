import { faCapsules } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import classes from './ServiceBox.module.css'

export default function SeriveBox() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                HEALTH PLANS <span>– Choose the Best Health Plan for Your Family</span>
            </div>
            <div className={classes.service}>
                <div className={classes.box}>
                    <div className={classes.wrap}>
                        <p className={classes.number}>01</p>
                        <div>
                            {/* <div className={classes.icon}>
                                <Image src={MyPic} height={80} width={90} className={classes.img} alt="" />
                            </div> */}
                            <Link href="my-plan">
                                <a>
                                    <p className={classes.name}>AMAR DOCTOR – PERSONAL</p>
                                </a>
                            </Link>
                        </div>
                        <span>
                            Amar Doctor (Personal) is designed to ensure the basic healthcare need of every individual.
                        </span>
                        <div className={classes.show}>
                            <p>
                                Personal Doctor
                                <br /> 24x7
                            </p>
                            <p>
                                Medicine Delivery <br /> 8% Cashback
                            </p>
                            <p>
                                Pathology Test at Home <br /> 40% Discount
                            </p>
                            <p>
                                Hospital Cashback <br /> upto BDT 100,000
                            </p>
                        </div>
                        <p className={classes.price}>
                            Start from <span>99TK</span> only!
                        </p>
                        <Link href="my-plan">
                            <a>
                                <button>View Details</button>
                            </a>
                        </Link>
                    </div>
                </div>

                <div className={classes.box}>
                    <div className={classes.wrap}>
                        <p className={classes.number}>02</p>
                        <Link href="family-plan">
                            <a>
                                <p className={classes.name}>AMAR DOCTOR – FAMILY</p>
                            </a>
                        </Link>
                        <span>
                            Amar Doctor (Family) is designed to ensure the basic healthcare need of every family.
                        </span>
                        <div className={classes.show}>
                            <p>
                                Personal Doctor <br /> 24x7
                            </p>
                            <p>
                                Medicine Delivery <br /> 8% Cashback
                            </p>
                            <p>
                                Pathology Test at Home <br /> 40% Discount
                            </p>
                            <p>
                                Hospital Cashback <br /> upto BDT 100,000
                            </p>
                        </div>
                        <p className={classes.price}>
                            Start from <span>299TK</span> only!
                        </p>
                        <Link href="family-plan">
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
