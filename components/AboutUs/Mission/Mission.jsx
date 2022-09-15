import Image from 'next/image'
import React from 'react'
import Graph from '../../../assets/AboutUs/MedicalMission.png'
import Graph2 from '../../../assets/AboutUs/businnessman.jpg'
import Doctor from '../../../assets/AboutUs/doctor.png'
import Misson from '../../../assets/AboutUs/mission.jpg'
import classes from './Mission.module.css'

// import Mission from '../../../assets/AboutUs/million.jpg'

export default function Mission() {
    return (
        <div className={classes.wrapper}>
            <div>
                <div>
                    <h2> Our Mission & Vision</h2>
                </div>

                <div>
                    <p>
                        {' '}
                        Our mission is to make quality healthcare easy to access for millions of citizens in Bangladesh,
                        and to enable Bangladeshis to take informed decision for their health by bringing all necessary
                        information of the healthcare market on their screen. We aim to be the largest Digital
                        Healthcare platform in Bangladesh by 2025 serving highest number of daily patients & connecting
                        highest number of Physicians & healthcare providers.{' '}
                    </p>

                    <div>
                        <h2 className={classes.txt2}>
                            <span> HEALTHx </span> Aspires To
                        </h2>
                        <ul>
                            <li> Serve min, 1 million patients per year</li>
                            <li> Partner with min. 1,000 Hospitals & Clinics; </li>
                            <li> Be subscribed by 10,000 Physicians & 10,000 Pharmacies & </li>
                            <li> Generate 35 million e-prescriptions by 2025!</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <Image src={Graph} alt="Picture" width={700} height={400} />
            </div>
            {/* <div>
                <div className={classes.firstOne}>
                    <h2> Our Mission & Vision</h2>
                    <p>
                        {' '}
                        Our mission is to make quality healthcare easy to access for millions of citizens in Bangladesh,
                        and to enable Bangladeshis to take informed decision for their health by bringing all necessary
                        information of the healthcare market on their screen. We aim to be the largest Digital
                        Healthcare platform in Bangladesh by 2025 serving highest number of daily patients & connecting
                        highest number of Physicians & healthcare providers.{' '}
                    </p>
                </div>

                <div>
                    <h2 className={classes.txt2}>
                        <span> HEALTHx </span> Aspires To
                    </h2>
                    <ul>
                        <li> Serve min, 1 million patients per year</li>
                        <li> Partner with min. 1,000 Hospitals & Clinics; </li>
                        <li> Be subscribed by 10,000 Physicians & 10,000 Pharmacies & </li>
                        <li> Generate 35 million e-prescriptions by 2025!</li>
                    </ul>
                </div>
            </div>

            {/* <div>
                <div>
                    <Image src={Graph} alt="Picture" width={520} height={250} />
                </div>

                <div>
                    <h2 className={classes.txt2}>
                        <span> HEALTHx </span> Aspires To
                    </h2>

                    <ul>
                        <li> Serve min, 1 million patients per year</li>
                        <li> Partner with min. 1,000 Hospitals & Clinics; </li>
                        <li> Be subscribed by 10,000 Physicians & 10,000 Pharmacies & </li>
                        <li> Generate 35 million e-prescriptions by 2025!</li>
                    </ul>
                </div>
            </div> */}{' '}
        </div>
    )
}

// comment

{
    /* <div>
<h2>
    <span> HEALTHx </span> Aspires To
</h2>

<ul>
    <li> Serve min, 1 million patients per year</li>
    <li> partner with min. 1,000 Hospitals & Clinics; </li>
    <li>be subscribed by 10,000 Physicians & 10,000 Pharmacies & </li>
    <li> generate 35 million e-prescriptions by 2025!</li>
</ul>
</div> */
}

// second

//      <div>
//                 <Image src={Misson} alt="Picture" width={600} height={450} />
//             </div>
