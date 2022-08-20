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
                            <p>Trained & Skilled Nurse & Attendant</p>
                        </div>
                        <span>Our Nurses have academic background who are trained through different hospitals.</span>
                    </div>

                    <div>
                        <div>
                            <span>
                                <FontAwesomeIcon icon={faStethoscope} />
                            </span>
                            <p>Trusted Provider with Safety & Security</p>
                        </div>
                        <span>
                            No more worries while receiving nursing care at home on safety and security, we maintain
                            stringent security protocols to deliver high quality care ensuring peace of mind.
                        </span>
                    </div>

                    <div>
                        <div>
                            <span>
                                <FontAwesomeIcon icon={faHandHoldingHeart} />
                            </span>
                            <p>Care Like Family Member</p>
                        </div>
                        <span>
                            We provide nursing care in such a way that you will feel like some of your family members
                            are taking care of this, we ensure empathy while providing care for your loved ones.
                        </span>
                    </div>

                    <div>
                        <div>
                            <span>
                                <FontAwesomeIcon icon={faHandHoldingMedical} />
                            </span>
                            <p>Hassle Free Care</p>
                        </div>
                        <span>
                            We are dedicated to give you freedom from any time and anywhere to give you an unforgettable
                            experience.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
