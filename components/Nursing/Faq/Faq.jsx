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
                        Are Healthx’s Nurses medically qualified?
                    </label>
                    <div className={classes.answers}>
                        Yes, our Nurses have academic training on Nursing with clinical license from Bangladesh Nursing
                        & Midwifery Council.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q5" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q5" className={classes.question}>
                        What are the responsibilities of a Home Nurse?
                    </label>
                    <div className={classes.answers}>
                        Healthx’s trained nurses will help you with administering oral medication, managing feeding
                        tubes, assistance in ambulation, monitor vitals of patients, help patients in personal grooming
                        and more.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q7" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q7" className={classes.question}>
                        Are both male and female nurses available?
                    </label>
                    <div className={classes.answers}>
                        Yes. We have both male and female nurses to ensure the clients’ comfort and confidence.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q8" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q8" className={classes.question}>
                        Is this service available in the whole country?
                    </label>
                    <div className={classes.answers}> The service is available only in Dhaka at present</div>
                </div>
            </div>
        </div>
    )
}
