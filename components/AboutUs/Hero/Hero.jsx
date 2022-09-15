import Image from 'next/image'
import React from 'react'
import Background1 from '../../../assets/AboutUs/background1.jpg'
import Background2 from '../../../assets/AboutUs/background2.jpg'
import Doctor from '../../../assets/AboutUs/happyDoctor.png'
import Medicine from '../../../assets/AboutUs/medicine.png'
import OldMan from '../../../assets/AboutUs/oldMan.png'
import Traffic from '../../../assets/AboutUs/traffic1.png'
import WaitingRoom from '../../../assets/AboutUs/waitingRoom.png'
import Background from '../../../assets/aboutUsBanner/background.jpg'
import Banner from '../../../assets/aboutUsBanner/banner.jpg'
import Delivery from '../../../assets/medicine/delivery.png'
import classes from './Hero.module.css'

export default function Hero() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.gridBox}>
                <div>
                    <h1>QUALITY HEALTHCARE AT YOUR DOORSTEP</h1>
                    <h2> Who are we?</h2>
                    <p>
                        HEALTHx is your one-stop digital solution to primary and essential healthcare services. You can
                        now book a doctor appointment, buy medicines, book a lab test or a home-care provider nurse,
                        attendant or physiotherapist sitting at the comfort of your home!
                    </p>
                </div>
                <div>
                    {/* <Image
                        className={classes.bannerImg}
                        src={Doctor}
                        layout="responsive"
                        sizes="(min-width: 75em) 33vw,
                    (min-width: 48em) 50vw,
                    100vw"
                        alt=""
                    /> */}
                    <Image className={classes.bannerImg} src={Doctor} height={400} width={540} alt="" />
                </div>
            </div>

            <div className={classes.option}>
                <div>
                    <div>
                        <Image src={WaitingRoom} height={40} width={40} className={classes.img} alt="" />
                    </div>
                    <p> No more germ filled waiting rooms for a 10 minutes doctor consultation</p>
                </div>
                <div>
                    <div>
                        <Image src={Traffic} height={40} width={40} className={classes.img} alt="" />
                    </div>

                    <p>No more waiting for hours in the traffic and queue for a 5 minutes test sample collection </p>
                </div>
                <div>
                    <div>
                        <Image src={OldMan} height={40} width={40} className={classes.img} alt="" />
                    </div>
                    <p> No more worries about caring for your ill/injured/elderly family member </p>
                </div>
                <div>
                    <div>
                        <Image src={Medicine} height={40} width={40} className={classes.img} alt="" />
                    </div>
                    <p> No more hustle for authentic medicines, as we deliver your order at your</p>
                </div>
            </div>
        </div>
    )
}
