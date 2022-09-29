import Image from 'next/image'
import React from 'react'
import E from '../../../assets/Team/email.png'
import F from '../../../assets/Team/facebook4.png'
// import F from '../../../assets/Team/facebook.png'
import L from '../../../assets/Team/linkedin (2).png'
import W from '../../../assets/Team/whatsapp.png'
import classes from './ContactUs.module.css'

export default function ContactUs() {
    return (
        <div className={classes.wrapper}>
            <div>
                <h3> Contact Us </h3>
            </div>

            <div>
                <div>
                    <div>
                        {' '}
                        <Image src={W} alt="Picture" width={60} height={60} />
                    </div>
                    <div>
                        <p>+8801322658481</p>
                        <p> +8801571016461</p>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={F} alt="Picture" width={60} height={60} />
                    </div>
                    <div>
                        <p>facebook.com/Healthx.BD</p>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={E} alt="Picture" width={60} height={60} />
                    </div>
                    <div>
                        <p>examplebd@email.com</p>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={L} alt="Picture" width={60} height={60} />
                    </div>
                    <div>
                        <p>bd.linkedin.com/company/healthx-bd</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
