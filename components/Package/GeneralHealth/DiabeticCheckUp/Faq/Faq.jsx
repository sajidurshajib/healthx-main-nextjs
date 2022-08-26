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
                        What is the procedure for a Diabetic Check Up ?
                    </label>
                    <div className={classes.answers}>
                        At first you have to complete the service availing process. Then a phlebotomist from partner lab
                        will come to collect your sample at a preferred time slot from your preferred location. You will
                        then receive the full report within 48 hours of sample collection in HEALTHx My Health Portal /
                        Email / WhatsApp/ CRM notification
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q5" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q5" className={classes.question}>
                        What preparation is required for a Diabetic Check Up?
                    </label>
                    <div className={classes.answers}>
                        It will depends on the tests. But Doctor’s suggestion is-do not eat or drink anything other than
                        water for 8-12 hours before the test.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q7" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q7" className={classes.question}>
                        How much time require to get report?
                    </label>
                    <div className={classes.answers}>
                        Patient will receive the test report within 48-72 hours after sample collection.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q8" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q8" className={classes.question}>
                        Will Phlebotomist come to home for sample collection or Patient will need to go?
                    </label>
                    <div className={classes.answers}>
                        After completion of service availing process phlebotomist from partner lab will visit to collect
                        the sample at a preferred time slot from your preferred location. For home sample collection
                        there is no need to go outside or diagnostic center.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q10" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q10" className={classes.question}>
                        How I can purchase the Package?
                    </label>
                    <div className={classes.answers}>
                        You can purchase the package in a very simple way. First you can book the package through our
                        online service availing process or you can directly call or WhatsApp us.
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="q11" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q11" className={classes.question}>
                        How Payment Method will be done?
                    </label>
                    <div className={classes.answers}>
                        You can complete the payment through bkash/Nagad/Card Payment/COD
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="q12" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q12" className={classes.question}>
                        Before doing test, is it necessary to do fasting ?
                    </label>
                    <div className={classes.answers}>
                        It will depends on the tests. But Doctor’s suggestion is-do not eat or drink anything other than
                        water for 8-12 hours before the test.
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="q13" className={`${classes.questions} ${classes.new}`} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q13" className={classes.question}>
                        What are the sample required for this test package?
                    </label>
                    <div className={classes.answers}>
                        Blood, urine sample will be collected by expert Phlebotomist for sample collection.
                    </div>
                </div>
            </div>
        </div>
    )
}
