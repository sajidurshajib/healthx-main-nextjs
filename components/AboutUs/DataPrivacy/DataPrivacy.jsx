import Image from 'next/image'
import React from 'react'
import Iso from '../../../assets/AboutUs/Iso.png'
import Data from '../../../assets/AboutUs/data-protection.png'
import Hipaa from '../../../assets/AboutUs/hipaa.png'
import photo from '../../../assets/AboutUs/screen.png'
import classes from './DataPrivacy.module.css'

export default function DataPrivacy() {
    return (
        <div className={classes.wrapper}>
            <div>
                <h2>Data Privacty and Security is our top privacy</h2>
                <p>
                    Data privacy and security always served as one of the founding philosopies of Practo, and we go to
                    the great length of safe guard the confidentiality and integrity of our users{' '}
                    <span>Read more here</span>
                </p>
            </div>

            <div>
                <div>
                    <div className={classes.secondDiv}>
                        <Image src={Data} height={65} width={65} className={classes.img} alt="" />
                        <p>256-bit</p>
                        <h4>encryption</h4>
                    </div>
                    <div className={classes.secondDiv}>
                        <Image src={Iso} height={65} width={65} className={classes.img} alt="" />
                        <p>ISO 27001</p>
                        <h4>certified</h4>
                    </div>
                </div>

                <div>
                    <div className={classes.secondDiv}>
                        <Image src={Hipaa} height={65} width={65} className={classes.img} alt="" />
                        <p>HIPAA</p>
                        <h4>complaint data centers</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
