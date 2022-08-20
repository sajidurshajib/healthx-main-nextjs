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
                        Are Healthx’s Nurse/Attendants medically qualified?
                    </label>
                    <div className={classes.answers}>
                        Our Nurses are having Nursing background with license number from Bangladesh Nursing & Midwifery
                        Council. <br /> However, our trained attendants are not medical professionals. However, we do
                        train our attendants for daily living assistance and basic medical assistance.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q5" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q5" className={classes.question}>
                        What are the responsibilities of Nurse & Health Attendant?
                    </label>
                    <div className={classes.answers}>
                        Healthx’s trained nurse & attendants will help you with administering oral medication, managing
                        feeding tubes, assistance in ambulation, monitoring vitals or patients, personal grooming for
                        the patient and more.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q7" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q7" className={classes.question}>
                        Will the trained attendant wash clothes and utensils for the family?
                    </label>
                    <div className={classes.answers}>
                        No, our attendant will only help the patient to perform their daily living activities.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q8" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q8" className={classes.question}>
                        Are the attendants reliable?
                    </label>
                    <div className={classes.answers}>
                        Yes, we do a complete background check of our attendants before recruiting. Also, we provide
                        them thorough training prior to appointing them to a patient.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q10" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q10" className={classes.question}>
                        How long will a trained attendant stay at my home?
                    </label>
                    <div className={classes.answers}>
                        You can avail long term or short term care for your loved one. You can opt for 12-hr or 24-hr
                        trained attendant service as per the requirement.
                    </div>
                </div>
            </div>
        </div>
    )
}
