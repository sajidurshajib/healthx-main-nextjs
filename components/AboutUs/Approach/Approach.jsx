import Image from 'next/image'
import React from 'react'
import Connection from '../../../assets/AboutUs/Connection2.png'
import Transperent from '../../../assets/AboutUs/eye1.png'
import HandShake from '../../../assets/AboutUs/handShake1.png'
import classes from './Approach.module.css'

export default function Approach() {
    return (
        <div className={classes.wrapper}>
            <div>
                <h2> Our approach to healthcare</h2>
                <p> Providing high-quality trusted and accessiable healthcare is our reason for being</p>
            </div>
            {/* for logo section */}
            <div className={classes.logo}>
                <div>
                    {' '}
                    <Image src={Connection} height={50} width={50} className={classes.img} alt="" />
                    <div>
                        <h2> Connect</h2>
                        <p>
                            We understand healthcare goes beyond signs, symptoms, diagnosis, and treatment. It’s about
                            the deep connection between doctors and patients that leads to continuous care and
                            sustained, better outcomes.
                        </p>
                    </div>
                </div>
                <div>
                    {' '}
                    <Image src={HandShake} height={95} width={85} className={classes.img} alt="" />
                    <div className={classes.second}>
                        <h2> Trust</h2>
                        <p>
                            Practo works on trust. We are aware of the responsibility placed on us by 30 crore+ patients
                            and over a lakh doctors. We always have and always will do everything we possibly can to
                            uphold this trust.
                        </p>
                    </div>
                </div>
                <div>
                    {' '}
                    <Image src={Transperent} height={95} width={95} className={classes.img} alt="" />
                    <div>
                        <h2> Transparency</h2>
                        <p>
                            We believe in full disclosure. We believe in communicating openly and honestly, and holding
                            ourselves to the highest ethical standards.
                        </p>
                    </div>
                </div>
            </div>

            {/* <div className={classes.title}>
                <h2> Connect</h2>
                <h2> Trust</h2>
                <h2> Transparency</h2>
            </div> */}
            {/* <div className={classes.description}>
                <div>
                    <h1>Connect</h1>
                    <div>
                        <p>
                            We understand healthcare goes beyond sign symptoms diagonisis and treatment.It's about the
                            deep connection between the doctor and the patient that leads to concious care and sustain
                            better outcome.
                        </p>
                    </div>
                </div>
                <div>
                    <h1>Trust</h1>
                    <div>
                        <p>
                            We understand healthcare goes beyond sign symptoms diagonisis and treatment.It's about the
                            deep connection between the doctor and the patient that leads to concious care and sustain
                            better outcome.
                        </p>
                    </div>
                </div>
                <div>
                    <h1>Transparency</h1>
                    <div>
                        <p>
                            We understand healthcare goes beyond sign symptoms diagonisis and treatment.It's about the
                            deep connection between the doctor and the patient that leads to concious care and sustain
                            better outcome.
                        </p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
