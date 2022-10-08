import '@fortawesome/free-solid-svg-icons'
import { faHandHoldingHeart, faHandHoldingMedical, faHandshake, faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './WhyUs.module.css'

export default function WhyUs() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.grid}>
                <div className={classes.flexBox}>
                    <p>
                        Why Choose <span>HEALTHx?</span>
                    </p>
                </div>

                <div className={classes.gridBox}>
                    <div>
                        <div>
                            <span>
                                <FontAwesomeIcon icon={faHandshake} />
                            </span>
                            <p> Trained & Skilled Attendant</p>
                        </div>
                        <span>
                            Our attendants are trained by healthcare providers with all required basic skills for
                            patient care and health indicators monitoring.
                        </span>
                    </div>

                    <div>
                        <div>
                            <span>
                                <FontAwesomeIcon icon={faStethoscope} />
                            </span>
                            <p> Care Like Family Member</p>
                        </div>
                        <span>
                            We provide attendant services with empathy and cautious care, just as your family does when
                            you are in need.
                        </span>
                    </div>

                    <div>
                        <div>
                            <span>
                                <FontAwesomeIcon icon={faHandHoldingHeart} />
                            </span>
                            <p> Trusted Provider with Safety & Security</p>
                        </div>
                        <span>
                            No worries while receiving attendant care at home on safety and security, as we maintain
                            stringent security protocols to deliver high quality care, ensuring peace of mind.
                        </span>
                    </div>

                    <div>
                        <div>
                            <span>
                                <FontAwesomeIcon icon={faHandHoldingMedical} />
                            </span>
                            <p> Hassle Free Care </p>
                        </div>
                        <span>
                            We are dedicated to give you your required services at any time and place you need, with
                            zero procedural complications and/or security concerns.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
