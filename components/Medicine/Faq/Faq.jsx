import React from 'react'
import classes from './Faq.module.css'

export default function Faq() {
    return (
        <div className={classes.content} id="faq">
            <div className={classes.logo}>Frequently Asked Questions</div>
            <div>
                <div>
                    <input type="checkbox" id="q4" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q4" className={classes.question}>
                        Are all essential medicines available at HEALTHx?
                    </label>
                    <div className={classes.answers}>
                        HEALTHx ensures the availability of all essential medicines according to the essential drug list
                        of DGDA, Ministry of Health and Family Welfare. Besides, HEALTHx has a strong network of popular
                        and experienced pharmacies from all over Dhaka which have updated stock of all sorts of
                        medicines.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q5" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q5" className={classes.question}>
                        Are injectable medicines available at HEALTHx?
                    </label>
                    <div className={classes.answers}>Yes</div>
                </div>

                <div>
                    <input type="checkbox" id="q7" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q7" className={classes.question}>
                        Do regular customers get any discount on the medicine price?
                    </label>
                    <div className={classes.answers}>
                        Yes, our customers get upto 7% discount on regular purchases, and occasional offers (will be
                        advertised when available). Our Health Plan users get exclusive discounts throughout the
                        validity of their plans.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q8" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q8" className={classes.question}>
                        Can I pay through mobile banking app/credit card?
                    </label>
                    <div className={classes.answers}>
                        Yes, you can. Please talk to our Health Managers for more details and guidance about digital
                        payment
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q10" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q10" className={classes.question}>
                        Do I need to show prescriptions to buy antibiotics, antihypertensive and other drugs that
                        require prescriptions?
                    </label>
                    <div className={classes.answers}>
                        Yes, we will collect your prescription before confirming your order.
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="q11" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q11" className={classes.question}>
                        Do you deliver outside Dhaka?
                    </label>
                    <div className={classes.answers}>
                        No, our medicine delivery service is limited to Dhaka city at present.
                    </div>
                </div>
            </div>
        </div>
    )
}
