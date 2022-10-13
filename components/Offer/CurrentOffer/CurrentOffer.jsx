import Image from 'next/image'
import React from 'react'
import Offer from '../../../assets/offer/offer-new.png'
import classes from './CurrentOffer.module.css'

export default function CurrentOffer() {
    return (
        <div className={classes.container}>
            <div className={classes.offer}>
                <div>
                    <p>
                        ফ্যামিলি ডাক্তার প্যাকেজ সারামাস জুড়ে মাত্র <span>৳১৪৯</span>
                    </p>
                    <p>
                        ফ্যামিলি ডাক্তার প্যাকেজ নিয়ে ডাক্তারের সাথে কথা বলুন যতবার দরকার <span>{'>'}</span>
                    </p>
                    <p>
                        <span>Book Now!</span> or call at +8801322658481
                    </p>
                </div>
                <Image src={Offer} width={300} height={320} alt="" />
            </div>
        </div>
    )
}
