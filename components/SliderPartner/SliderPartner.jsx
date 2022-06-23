import Image from 'next/image'
import React from 'react'
import airbnb from '../../assets/social/airbnb.png'
import discord from '../../assets/social/discord.png'
import facebook from '../../assets/social/facebook.png'
import fedex from '../../assets/social/fedex.png'
import google from '../../assets/social/google.png'
import hbo from '../../assets/social/hbo.png'
import imdb from '../../assets/social/imdb.png'
import classes from './SliderPartner.module.css'

export default function SliderPartner() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>Our Stragic Partners</div>
            <div className={classes.sliderWrapper}>
                <div className={classes.slider}>
                    <div className={classes.slideTrack}>
                        <div className={classes.slide}>
                            <Image src={facebook} height={64} width={64} alt="" />
                        </div>
                        <div className={classes.slide}>
                            <Image src={discord} height={64} width={64} alt="" />
                        </div>
                        <div className={classes.slide}>
                            <Image src={airbnb} height={64} width={64} alt="" />
                        </div>
                        <div className={classes.slide}>
                            <Image src={fedex} height={64} width={64} alt="" />
                        </div>
                        <div className={classes.slide}>
                            <Image src={google} height={64} width={64} alt="" />
                        </div>
                        <div className={classes.slide}>
                            <Image src={hbo} height={64} width={64} alt="" />
                        </div>

                        <div className={classes.slide}>
                            <Image src={imdb} height={64} width={64} alt="" />
                        </div>
                        <div className={classes.slide}>
                            <Image src={facebook} height={64} width={64} alt="" />
                        </div>
                        <div className={classes.slide}>
                            <Image src={discord} height={64} width={64} alt="" />
                        </div>
                        <div className={classes.slide}>
                            <Image src={airbnb} height={64} width={64} alt="" />
                        </div>
                        <div className={classes.slide}>
                            <Image src={fedex} height={64} width={64} alt="" />
                        </div>
                        <div className={classes.slide}>
                            <Image src={google} height={64} width={64} alt="" />
                        </div>
                        <div className={classes.slide}>
                            <Image src={hbo} height={64} width={64} alt="" />
                        </div>

                        <div className={classes.slide}>
                            <Image src={imdb} height={64} width={64} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
