import Image from 'next/image'
import React from 'react'
import Nurse from '../../../assets/nursing/nurse.png'
import S1 from '../../../assets/nursing/s1.png'
import S2 from '../../../assets/nursing/s2.png'
import S3 from '../../../assets/nursing/s3.png'
import S4 from '../../../assets/nursing/s4.png'
import S5 from '../../../assets/nursing/s5.png'
import Trained from '../../../assets/nursing/trained.png'
import Faq from './Faq/Faq'
import Features from './Features/Features'
import classes from './Nursing.module.css'
import WhyUs from './WhyUs/WhyUs'

export default function Nursing() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.gridBox}>
                <div>
                    <h1>TRAINED ATTENDANT </h1>
                    <p>
                        Trained Attendants offer you holistic and caring support during illness, childbirth and
                        long-term disabilities at the comfort of your home. Our highly skilled attendants will make sure
                        you are accompanied and taken care of at all stages of your medical treatment procedures –
                        starting from booking a consultation visit, to diagnostics and hospital-based treatment, to post
                        intervention medical care at home while you rest and recover.
                    </p>
                    <h1 className={classes.header}> WHY Do You Need ATTENDANT CARE?</h1>
                    <p>
                        In a fast moving world, understanding the complexity of seeing a Doctor and managing time for
                        your loved ones when they are hospitalized becomes a great challenge. Our attendant service will
                        take care on behalf of you from making a doctor’s appointment, working as a guide from home to
                        hospital, managing issues arising while seeing the Doctor and during hospital stay.
                    </p>
                    <h1 className={classes.order}> How to order?</h1>
                    <p> Call us at +8801322658481, +8801571016461</p>
                    <p>Or, BOOK YOU ORDER HERE</p>

                    <button>Order Now!</button>
                </div>
                <div>
                    <Image
                        src={Trained}
                        layout="responsive"
                        sizes="(min-width: 75em) 33vw,
                        (min-width: 48em) 50vw,
                        100vw"
                        alt=""
                        className={classes.img}
                    />
                </div>
            </div>
            <h2>What We Offer</h2>
            {/* <p>
                Home Nursing is required for a wide range of healthcare services that can be easily provided at your
                home
            </p> */}
            <div className={classes.service}>
                <div>
                    <div>
                        <Image src={S1} height={50} width={50} className={classes.img} alt="" />
                    </div>
                    <h3> Home Attendant</h3>
                    <p>
                        Assist patients with activities such as bathing, grooming, dressing, and toileting. They may
                        help with feeding or exercise and in some specific settings help patients take their medications
                    </p>
                </div>
                <div>
                    <div>
                        <Image src={S2} height={50} width={50} className={classes.img} alt="" />
                    </div>
                    <h3> Hospital Attendant</h3>
                    <p>
                        Assist patients to reach the hospital and to return home from hospital, assist them through
                        medical tests and consultations, hospital admission and stay etc.
                    </p>
                </div>
                {/* <div>
                    <div>
                        <Image src={S3} height={50} width={50} className={classes.img} alt="" />
                    </div>
                    New Mother Care
                </div> */}
                {/* <div>
                    <div>
                        <Image src={S4} height={50} width={50} className={classes.img} alt="" />
                    </div>
                    Baby care
                </div> */}
                {/* <div>
                    <div>
                        <Image src={S5} height={50} width={50} className={classes.img} alt="" />
                    </div>
                    Care for patients in recovery from acute infection/injury
                </div> */}
            </div>
            <Features />
            <WhyUs />
            <Faq />
        </div>
    )
}
