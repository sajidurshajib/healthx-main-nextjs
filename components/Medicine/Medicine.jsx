import Image from 'next/image'
import React from 'react'
import Delivery from '../../assets/medicine/delivery.png'
import V1 from '../../assets/medicine/v1.png'
import V2 from '../../assets/medicine/v2.png'
import V3 from '../../assets/medicine/v3.png'
import V4 from '../../assets/medicine/v4.png'
import V5 from '../../assets/medicine/v5.png'
import Faq from './Faq/Faq'
import classes from './Medicine.module.css'

export default function Medicine() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.gridBox}>
                <div>
                    <h1>Medicine Delivery</h1>
                    <p>
                        We deliver authentic and quality medicine and health & hygiene products at your doorstep keeping
                        accordance with standard safety protocol. Now you don’t have to move outside to purchase
                        medicine when you can have it at the comfort of your home.
                    </p>
                    <h1 className={classes.heeader}> Why Do You Need Our Medicine Delivery Service?</h1>
                    <p>
                        HealthX ensures the safety of your health and wealth by selling the best quality of each
                        medicine from all top pharmaceutical companies at the best price possible. Our service team will
                        help you buy medicines as per your prescription, and/or home deliver any over-the-counter
                        medicine you require to solve a minor ailment.
                    </p>
                    <h1 className={classes.order}> How to order?</h1>
                    <p> Call us at +8801322658481, +8801571016461</p>
                    <p>Or, BOOK YOU ORDER HERE</p>

                    <button>Order Now!</button>
                </div>
                <div>
                    <Image
                        className={classes.bannerImg}
                        src={Delivery}
                        layout="responsive"
                        sizes="(min-width: 75em) 33vw,
                        (min-width: 48em) 50vw,
                        100vw"
                        alt=""
                    />
                </div>
            </div>

            <div className={classes.whyHealth}>
                <h1>Why HEALTHx?</h1>
                <div>
                    <div>
                        <Image src={V1} height={50} width={50} className={classes.imgIcon} alt="" />
                        <p> Reliable and fast delivery</p>
                    </div>
                    <div>
                        <Image src={V2} height={50} width={50} className={classes.imgIcon} alt="" />
                        <p> Best price and exclusive offers</p>
                    </div>

                    <div>
                        <Image src={V3} height={50} width={50} className={classes.imgIcon} alt="" />
                        <p>All Time Availability</p>
                    </div>

                    <div>
                        <Image src={V4} height={50} width={50} className={classes.imgIcon} alt="" />
                        <p> Ensuring COVID-19 safety protocol</p>
                    </div>

                    <div>
                        <Image src={V5} height={50} width={50} className={classes.imgIcon} alt="" />
                        <p> E-prescription facility through My Health</p>
                    </div>
                </div>
            </div>

            <h2>Types of delivery service</h2>
            <div className={classes.service}>
                <div>
                    <h3> General Medicine Delivery Service</h3>
                    <p> We ensure all kinds of prescription medicine </p>
                </div>
                <div>
                    <h3> Special Medicine Delivery Service</h3>
                    <p> We deliver medicines especially dedicated for cancer & kidney patients</p>
                </div>
                <div>
                    <h3> Hospital Medicine delivery service </h3>
                    <p> We deliver medicines to hospital admitted patients</p>
                </div>
            </div>

            <div className={classes.faq}>
                <Faq />
            </div>
        </div>
    )
}
