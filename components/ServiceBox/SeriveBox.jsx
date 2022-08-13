import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FamilyPic from '../../assets/plan/fplan.png'
import MyPic from '../../assets/plan/mplan.png'
// import service from '../../assets/service/service.png'
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
                            <Image src={MyPic} height={140} width={150} className={classes.img} alt="" />
                        </div>
                        <Link href="plan">
                            <a>
                                <p className={classes.title}>My Health Plan</p>
                            </a>
                        </Link>
                        <span>
                            My Health Plan is designed to ensure the basic healthcare need of every individual.
                            {/* Primary Health Care need is now a common need in our daily life. Healthcare expense is growing like
                            anything day by day. To reduce the healthcare expenditure, we are offering the primary &
                            essential healthcare services at affordable costs. */}
                        </span>
                        <p className={classes.show}>
                            24x7 Doctor Service | Medicine Delivery | Diagnostic Test | Health Insurance
                        </p>
                        <Link href="my_plan">
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
                            <Image src={FamilyPic} height={140} width={150} className={classes.img} alt="" />
                        </div>
                        <Link href="plan">
                            <a>
                                <p className={classes.title}>Family Health Plan</p>
                            </a>
                        </Link>
                        <span>
                            Family health plan (FHP) is designed to ensure the healthcare need of individuals and their
                            family members (4 Person).
                            {/* Primary & essential healthcare need is now a common need in our
                            daily life. Healthcare pocket expense is increasing day by day. To meet the need of family
                            healthcare service at affordable price we are offering. */}
                        </span>
                        <p className={classes.show}>
                            24x7 Doctor Service | Medicine Delivery | Diagnostic Test | Health Insurance
                        </p>
                        <Link href="family_plan">
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
