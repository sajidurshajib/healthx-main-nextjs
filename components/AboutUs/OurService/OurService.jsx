import Image from 'next/image'
import React from 'react'
import M1 from '../../../assets/AboutUs/m1.png'
import M2 from '../../../assets/AboutUs/m2.png'
import M3 from '../../../assets/AboutUs/m3.png'
import M4 from '../../../assets/AboutUs/m4.png'
import classes from './OurService.module.css'

export default function OurService() {
    return (
        <div>
            <div className={classes.wrapper}>
                <h2> Our Services </h2>

                <div>
                    <div>
                        <Image src={M4} width={60} height={60} />
                        <p> 24/7 Medical care through Tele Health</p>
                    </div>
                    <div>
                        <Image src={M3} width={60} height={60} />

                        <p> Home nurse and attendants, physiotherapy and home sample collection</p>
                    </div>
                    <div>
                        <Image src={M2} width={60} height={60} />
                        <p> Fast delivery of quality medicines</p>
                    </div>
                    <div>
                        <Image src={M1} width={60} height={60} />
                        <p> Exclusive Health plans for individuals and families </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
