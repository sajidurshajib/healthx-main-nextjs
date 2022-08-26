import Image from 'next/image'
import React from 'react'
import Delivery from '../../assets/medicine/delivery.png'
import V1 from '../../assets/medicine/v1.png'
import V2 from '../../assets/medicine/v2.png'
import V3 from '../../assets/medicine/v3.png'
import classes from './Medicine.module.css'

export default function Medicine() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.gridBox}>
                <div>
                    <h1>Medicine </h1>
                    <p>
                        We deliver authentic and quality medicine and health & hygiene products at your doorstep keeping
                        accordance with standard safety protocol. Now you don’t have to move outside to purchase
                        medicine when you can have it at the comfort of your home.
                    </p>
                    <button>Order Now!</button>
                    <div>
                        <Image src={V1} height={40} width={40} className={classes.imgIcon} alt="" />
                        <p>Quick & Fast Delivery</p>

                        <Image src={V2} height={40} width={40} className={classes.imgIcon} alt="" />
                        <p>Ensuring Quality Medicine</p>

                        <Image src={V3} height={40} width={40} className={classes.imgIcon} alt="" />
                        <p>All Time Availability</p>
                    </div>
                </div>
                <div>
                    <Image src={Delivery} height={480} width={520} className={classes.img} alt="" />
                </div>
            </div>
            <h2>Types of delivery service</h2>
            <div className={classes.service}>
                <div>General Medicine delivery Service We ensure all kind of Prescription medicine</div>
                <div>Special Medicine delivery Service Specially dedicated for cancer & kidney patients</div>
                <div>Hospital Medicine delivery service Hospital admitted patient</div>
            </div>
        </div>
    )
}
