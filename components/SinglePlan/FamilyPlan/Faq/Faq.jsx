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
                        Is there any limit on the number of family members a health plan will serve
                    </label>
                    <div className={classes.answers}>
                        Yes, a single health plan will serve up to 6 members of the same household.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q5" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q5" className={classes.question}>
                        Are the health plans for the whole country?
                    </label>
                    <div className={classes.answers}>
                        You may purchase the health plans from anywhere in Bangladesh. However, certain services are
                        limited to Dhaka City at present. Please talk to our Health Managers for details. (Call us at
                        +8801322658481, +8801571016461)
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q7" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q7" className={classes.question}>
                        Can I deactivate a health plan before it expires?
                    </label>
                    <div className={classes.answers}>
                        No, a health plan will remain active for its whole duration once you purchase it. You can avail
                        the services within the health plan as required. We suggest choosing the health plan that fits
                        your needs best. Our Health Managers can assist you to choose the best plan for your family.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q8" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q8" className={classes.question}>
                        Can I pay through mobile/online payment options
                    </label>
                    <div className={classes.answers}>
                        Yes, you may pay through bKash and selected credit cards. Payment options will automatically
                        show when you tap the BUY THIS PLAN button on any health plan.
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="q9" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q9" className={classes.question}>
                        Can I claim my money back if I do not avail any services from the health plan?
                    </label>
                    <div className={classes.answers}>
                        No, we do not have any money return policies for the health plans.
                    </div>
                </div>
            </div>
        </div>
    )
}
