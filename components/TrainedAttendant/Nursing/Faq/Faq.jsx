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
                        Are Healthx’s Attendants medically qualified?
                    </label>
                    <div className={classes.answers}>
                        Our trained attendants are not medical professionals. However, we recruit skilled individuals
                        and train them as attendants for daily living assistance and basic medical assistance under the
                        supervision of licensed healthcare professionals (doctors and nurses). If you require clinical
                        care at home, please check out our Home Nursing Services.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q5" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q5" className={classes.question}>
                        What are the responsibilities of a Health Attendant?
                    </label>
                    <div className={classes.answers}>
                        Healthx’s trained attendants will help you with administering oral medication, assist in
                        ambulation, monitor vitals of the patient, help the patient in personal grooming and more.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q7" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q7" className={classes.question}>
                        Will the trained attendant wash clothes and utensils for the family?
                    </label>
                    <div className={classes.answers}>
                        No, our attendant will only help the patient to perform their daily living activities. Household
                        chores or activities of the family are not the attendant’s responsibility.
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
                        them thorough training prior to appointing them to patients.
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="q9" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q9" className={classes.question}>
                        How long will a trained attendant stay at my home?
                    </label>
                    <div className={classes.answers}>
                        You can avail long term or short term care for your loved one. You can opt for 12-hr or 24-hr
                        trained attendant service as per your requirement.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q9" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q9" className={classes.question}>
                        Are both male and female attendants available?
                    </label>
                    <div className={classes.answers}>Yes, we have both male and female attendants.</div>
                </div>
            </div>
        </div>
    )
}
