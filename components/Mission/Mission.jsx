import Image from 'next/image'
import Link from 'next/link'
import m1 from '../../assets/mission/m1.jpg'
import m2 from '../../assets/mission/m2.jpg'
import m3 from '../../assets/mission/m3.jpg'
import m4 from '../../assets/mission/m4.jpg'
import classes from './Mission.module.css'

export default function Mission() {
    return (
        <div className={classes.wrapper}>
            {/* <div className={classes.title}>Our Missions</div> */}
            <div className={classes.mainGrid}>
                <div className={classes.content}>
                    <span>
                        We Believe in a <br />
                        <span>Healthy</span> You
                    </span>
                    <p>
                        The mission of HEALTHx is to create a healthier community by providing the best health care for
                        those experiencing poverty. Our vision is to build a smart healthcare system that every
                        individual has the opportunity to achieve and sustain a healthy life.
                        {/* <br />
                        <br />
                        How We Serve:
                        <li>We are dedicated to patient care.</li>
                        <li>We treat each person with respect and dignity.</li>
                        <li>We hear the issues of our patients, respect them, and do everything to help.</li> */}
                    </p>
                    <Link href="#">
                        <a>Learn More</a>
                    </Link>
                </div>
                <div className={classes.subGrid}>
                    <div className={classes.gridBox1}>
                        <Image src={m1} alt="" />
                        <Image src={m2} alt="" />
                    </div>
                    <div className={classes.gridBox2}>
                        <Image src={m3} alt="" />
                        <Image src={m4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
