import Image from 'next/image'
import CountUp from 'react-countup'
import footer from '../../assets/why-icons/footer.png'
import w1 from '../../assets/why-icons/w1.png'
import w2 from '../../assets/why-icons/w2.png'
import w3 from '../../assets/why-icons/w3.png'
import w4 from '../../assets/why-icons/w4.png'
import classes from './WhyUs.module.css'

const WhyUs = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>Why HEALTHx</div>
            <div className={classes.whyUs}>
                <div className={classes.whyContainer}>
                    <div>
                        <span className={classes.span}>
                            <Image src={w1} height={54} width={54} />
                        </span>
                        <br />
                        <div className={classes.Counter}>
                            <CountUp start={10} end={100} duration={5} useEasing={true} className={classes.Counter} />
                            <span>+</span>
                        </div>
                        <p>Specialist Doctors</p>
                    </div>

                    <div>
                        <span className={classes.span}>
                            <Image src={w2} height={54} width={54} />
                        </span>
                        <br />
                        <div className={classes.Counter}>
                            <CountUp start={0} end={30} duration={5} useEasing={true} className={classes.Counter} />
                            <span>+</span>
                        </div>
                        <p>Hospitals & Labs</p>
                    </div>

                    <div>
                        <span className={classes.span}>
                            <Image src={w3} height={54} width={54} />
                        </span>
                        <br />
                        <div className={classes.Counter}>
                            <CountUp start={0} end={30} duration={5} useEasing={true} className={classes.Counter} />
                            <span>+</span>
                        </div>
                        <p>Pharmacies</p>
                    </div>

                    <div>
                        <span className={classes.span}>
                            <Image src={w4} height={54} width={54} />
                        </span>
                        <br />
                        <div className={classes.Counter}>
                            <CountUp
                                start={1000}
                                end={2200}
                                duration={5}
                                useEasing={true}
                                className={classes.Counter}
                            />
                            <span>+</span>
                        </div>
                        <p>Patients</p>
                    </div>
                </div>
                {/* <div className={classes.footer}>
                    <Image src={footer} height={300} alt="" />
                </div> */}
            </div>
        </div>
    )
}
export default WhyUs
