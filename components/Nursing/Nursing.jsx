import Image from 'next/image'
import React from 'react'
import Nurse from '../../assets/nursing/nurse.png'
import S1 from '../../assets/nursing/s1.png'
import S2 from '../../assets/nursing/s2.png'
import S3 from '../../assets/nursing/s3.png'
import S4 from '../../assets/nursing/s4.png'
import S5 from '../../assets/nursing/s5.png'
import Faq from './Faq/Faq'
import Features from './Features/Features'
import classes from './Nursing.module.css'
import WhyUs from './WhyUs/WhyUs'

export default function Nursing() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.gridBox}>
                <div>
                    <h1>HOME NURSING </h1>
                    <p>
                        The Home Nursing service provides clinical support at home for patients, physically challenged
                        or aged persons. Our home nursing services offer you holistic and caring support during illness,
                        injury, childbirth and long-term disabilities at the comfort of your home.
                    </p>
                    <h1 className={classes.order}> How to order?</h1>
                    <p> Call us at +8801322658481, +8801571016461</p>
                    <p>Or, BOOK YOU ORDER HERE</p>
                    {/* <span>
                        Trained Nurses & Attendants take care of the daily activities of a person in need. They help
                        with personal grooming, movement, feeding, light housekeeping, and are also trained to monitor
                        general health by regularly measuring essential vitals like heart rate, blood pressure, etc.
                        HEALTHx brings you’re the best nursing & attendant service at home. We are devoted to ensure you
                        the best home nursing care out there and available at your doorstep in any basic nursing care
                        need and many more. Maintaining proper safety and security, our service will change the
                        perception of home nursing service to you, that we can guarantee for sure.
                    </span> */}
                    <button>Book Now!</button>
                </div>
                <div>
                    <Image
                        src={Nurse}
                        layout="responsive"
                        sizes="(min-width: 75em) 33vw,
                        (min-width: 48em) 50vw,
                        100vw"
                        alt=""
                        className={classes.img}
                    />
                </div>
            </div>
            <h2>WHY HOME NURSING SERVICE</h2>
            <p>
                Home Nursing is required for a wide range of healthcare services that can be easily provided at your
                home
            </p>
            <div className={classes.service}>
                <div>
                    <div>
                        <Image src={S1} height={50} width={50} className={classes.img} alt="" />
                    </div>
                    Post-Operative Patient Care
                </div>
                <div>
                    <div>
                        <Image src={S2} height={50} width={50} className={classes.img} alt="" />
                    </div>
                    Elder care
                </div>
                <div>
                    <div>
                        <Image src={S3} height={50} width={50} className={classes.img} alt="" />
                    </div>
                    New Mother Care
                </div>
                <div>
                    <div>
                        <Image src={S4} height={50} width={50} className={classes.img} alt="" />
                    </div>
                    Baby care
                </div>
                <div>
                    <div>
                        <Image src={S5} height={50} width={50} className={classes.img} alt="" />
                    </div>
                    Care for patients in recovery from acute infection/injury
                </div>
            </div>
            <Features />
            <WhyUs />
            <Faq />
        </div>
    )
}
