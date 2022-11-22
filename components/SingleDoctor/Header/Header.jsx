import Image from 'next/image'
import React from 'react'
import Cover from '../../../assets/doctor/bg.jpg'
import Img from '../../../assets/doctor/doc.png'
import classes from './Header.module.css'

export default function Header({ api, doctor, picture }) {
    const profile = `${api}/images/profile/${picture}`
    return (
        <div className={classes.header}>
            <div>
                <div className={classes.headLeftWrapper}>
                    <div className={classes.profilePic}>
                        <Image
                            className={classes.img}
                            src={picture.image_string !== null ? profile : Img}
                            alt=""
                            height={150}
                            width={150}
                        />
                    </div>
                    <h2>{`${doctor?.doctor?.dr_title || ''} ${doctor?.user?.name || ''}`}</h2>
                    {doctor?.qualifications?.map((qf, i) => (
                        <p key={i}>{qf.qualification}</p>
                    ))}
                    {doctor?.specialities?.map((sp, i) => (
                        <p key={i}>{sp.speciality}</p>
                    ))}
                </div>
            </div>
            <div className={classes.flex}>
                <div>
                    <p>Consultation Fee</p>
                    <p>
                        ৳
                        {doctor?.doctor?.online_fees !== null
                            ? doctor?.doctor?.online_fees > 499
                                ? doctor?.doctor?.online_fees + 100 || ''
                                : doctor?.doctor?.online_fees + doctor?.doctor?.online_fees * (20 / 100) || ''
                            : ''}
                        <span>(inc. VAT)</span>
                    </p>
                </div>
                <button>For Booking Please Call at 01322658481</button>
            </div>
        </div>
    )
}
