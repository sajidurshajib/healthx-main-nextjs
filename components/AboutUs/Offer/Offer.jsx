import Image from 'next/image'
import React from 'react'
import Doctor from '../../../assets/AboutUs/doctor2.png'
import Patient from '../../../assets/AboutUs/hospitalisation.png'
import Pharmachist from '../../../assets/AboutUs/pharmacist.png'
import classes from './Offer.module.css'

export default function Offer() {
    return (
        <div className={classes.wrapper}>
            <div>
                <h2> Our Smart Solutions </h2>
                <p>
                    {' '}
                    HEALTHx is a platform where patients, doctors and pharmacies find smart solutions for their
                    healthcare related issues. We have all essential health services for patients, and a strong network
                    of doctors and pharmacies to create a healthy platform for good healthcare habits and practices.
                </p>
            </div>

            <div className={classes.card}>
                <div className={classes.box}>
                    <div className={classes.wrap}>
                        <div>
                            <Image src={Patient} height={90} width={90} className={classes.img} alt="" />
                        </div>

                        <div className={classes.image}>
                            <p className={classes.sector}>For Patients</p>
                            <p className={classes.txt}>
                                Tele Health, Home care by skilled nurses and attendants, medicine delivery at
                                home/hospital, some sample collection, e-prescription facility at ‘My Health’ portal,
                                exclusive Health Plans and more!
                            </p>
                        </div>
                    </div>
                </div>
                <div className={classes.box}>
                    <div className={classes.wrap}>
                        <div>
                            <Image src={Doctor} height={90} width={90} className={classes.img} alt="" />
                        </div>

                        <div className={classes.image}>
                            <p className={classes.sector}>For Doctors</p>
                            <p className={classes.txt}>
                                'Smart Doctor’ Solution which is integrated with the Health Plans’ e-prescription and
                                electronic personal health record solution (PHR) so that physicians can take health data
                                driven clinical decision
                            </p>
                        </div>
                    </div>
                </div>
                <div className={classes.box}>
                    <div className={classes.wrap}>
                        <div>
                            <Image src={Pharmachist} height={90} width={90} className={classes.img} alt="" />
                        </div>

                        <div className={classes.image}>
                            <p className={classes.sector}>For Pharmacies</p>
                            <p className={classes.txt}>
                                'Smart Pharmacy Manager’ solution to record the daily business transactions and
                                convenient order of medicines online to the pharma companies
                            </p>
                        </div>
                    </div>
                </div>

                {/* <div className={classes.box}>
                    <div className={classes.wrap}>
                        <p className={classes.sector}>For Doctors</p>
                        <div className={classes.image}>
                            <Image src={Doctor} height={70} width={70} className={classes.img} alt="" />
                        </div>

                        <p className={classes.txt}>
                            'Smart Doctor’ Solution which is integrated with the Health Plans’ e-prescription and
                            electronic personal health record solution (PHR) so that physicians can take health data
                            driven clinical decision
                        </p>
                    </div>
                </div>
                <div className={classes.box}>
                    <div className={classes.wrap}>
                        <p className={classes.sector}>For Pharmacies</p>
                        <div className={classes.image}>
                            <Image src={Pharmachist} height={70} width={70} className={classes.img} alt="" />
                        </div>

                        <p className={classes.txt}>
                            'Smart Pharmacy Manager’ solution to record the daily business transactions and convenient
                            order of medicines online to the pharma companies
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
