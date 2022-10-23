import Image from 'next/image'
import blog1 from '../../../assets/blog/blog1.jpg'
import blog2 from '../../../assets/blog/blog2.jpg'
import blog3 from '../../../assets/blog/blog3.jpg'
import classes from './BlockGrid.module.css'

export default function BlockGrid() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                Our Health Blogs <span>- Find the Best Health Content </span>
            </div>
            <div className={classes.sliderLeft}>
                <span>&#60;</span>
            </div>
            <div className={classes.sliderRight}>
                <span>&#62;</span>
            </div>

            <div className={classes.container}>
                <div className={classes.containerFlex}>
                    <div>
                        <Image src={blog1} height={1200} width={1800} alt="" />
                    </div>
                    <div className={classes.date}>
                        <span>19</span>
                        <span>June</span>
                    </div>
                    <div>
                        <h6>Living a Normal Life with Mitral Valve Prolapse</h6>
                        <p>
                            Mitral valve prolapse is the most common heart valve condition in the United States. For
                            many, it's not considered dangerous, but it does need to be monitored and managed.
                        </p>
                    </div>
                </div>
                <div className={classes.containerFlex}>
                    <div>
                        <Image src={blog2} height={1200} width={1800} alt="" />
                    </div>
                    <div className={classes.date}>
                        <span>18</span>
                        <span>June</span>
                    </div>
                    <div>
                        <h6>What To Know About Ventricular Tachycardia Treatment</h6>
                        <p>
                            Ventricular tachycardia is a type of arrhythmia where your heart beats too fast. Here is
                            what you need to know about ventricular tachycardia treatment.
                        </p>
                    </div>
                </div>
                <div className={classes.containerFlex}>
                    <div>
                        <Image src={blog3} height={1200} width={1800} alt="" />
                    </div>
                    <div className={classes.date}>
                        <span>17</span>
                        <span>June</span>
                    </div>
                    <div>
                        <h6>When Your First Abnormal Heart Rhythm Treatment Didn't Work</h6>
                        <p>
                            It’s frustrating when you have an abnormal heart rhythm that won’t respond to treatment.
                            What should you do if your first course of treatment doesn’t work?
                        </p>
                    </div>
                </div>
            </div>

            <div className={classes.dots}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
