import Image from 'next/image'
import React from 'react'
import DiaImage from '../../../../../assets/diabetic/diabetic.png'
import Kidneys from '../../../../../assets/diabetic/kidneys.png'
import Liver from '../../../../../assets/diabetic/liver.png'
import Pancreas from '../../../../../assets/diabetic/pancreas.png'
import classes from './Hero.module.css'

export default function Hero() {
    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.gridbox}>
                    <div>
                        <h1> Diabetic Check Up</h1>
                        <p>
                            Diabetic packages are very helpful to screen for diabetes, to determine your risk for
                            developing diabetes and conditions related to diabetes. As It is a chronic disease and
                            people who are suffering with diabetes experience significant health issues. As the disease
                            itself has proven to be the catalyst for other health problems.
                        </p>

                        <button>Book Now</button>

                        <h2>The Diabetic Check Up will cover </h2>
                        <span>
                            {' '}
                            <p>The checkup will assess the below organs of your body: </p>
                        </span>
                        <div>
                            <Image  src={Liver} height={40} width={40} alt="" />
                            <p>Liver</p>

                            <Image src={Pancreas} height={40} width={40} alt="" />
                            <p> Pancreas </p>

                            <Image src={Kidneys} height={40} width={40} alt="" />
                            <p> Kidney</p>
                        </div>
                    </div>

                    <div>
                        <Image src={DiaImage} width={480} height={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}
