import Image from 'next/image'
import DiaImage from '../../../../assets/diabetic/diabetic.png'
import Kidneys from '../../../../assets/diabetic/kidneys.png'
import Liver from '../../../../assets/diabetic/liver.png'
import Pancreas from '../../../../assets/diabetic/pancreas.png'
import classes from './Diabetic.module.css'
import Faq from './Faq/Faq'
import ForWhom from './ForWhom/ForWhom.jsx'
import HowToAvail from './HowToAvailService/HowToAvail'
import PackageIncludes from './PackageIncludes/PackageIncludes'
import Test from './Test/Test'
import TestRequirement from './TestRequirements/TestRequirement'
import WhyImportant from './WhyImportant/WhyImportant.jsx'
import WhyUs from './WhyUs/WhyUs'

export default function Diabetic() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.gridbox}>
                <div>
                    <h1> Diabetic Check Up</h1>
                    <p>
                        Diabetic packages are very helpful to screen for diabetes, to determine your risk for developing
                        diabetes and conditions related to diabetes. As It is a chronic disease and people who are
                        suffering with diabetes experience significant health issues. As the disease itself has proven
                        to be the catalyst for other health problems.
                    </p>

                    <button>Book Now</button>

                    <h2>The Diabetic Check Up will cover </h2>
                    <span>
                        {' '}
                        <p>The checkup will assess the below organs of your body: </p>
                    </span>
                    <div>
                        <Image src={Liver} height={40} width={40} alt="" />
                        <p>Liver</p>

                        <Image src={Pancreas} height={40} width={40} alt="" />
                        <p> Pancreas </p>

                        <Image src={Kidneys} height={40} width={40} alt="" />
                        <p> Kidney</p>
                    </div>
                </div>

                <div>
                    <Image src={DiaImage} width={480} height={400} />
                </div>
            </div>

            <WhyImportant />

            <ForWhom />

            <Test />
            <PackageIncludes />
            <TestRequirement />
            <HowToAvail />
            <WhyUs />
            <Faq />

            {/* <div className={classes.whyUs}>
                <h3> Why us </h3>
                <div>
                    <ul>
                        <li>
                            {' '}
                            <p>Affordable cost</p>
                        </li>
                        <li>
                            <p>Certified Lab Partner and you can select your preferred lab partner </p>
                        </li>
                        <li>
                            <p>At-home sample collection </p>
                        </li>
                        <li>
                            <p>No need to travel or stand in a long queue</p>
                        </li>
                        <li>
                            <p>Storage of lab report at My Health Portal</p>
                        </li>
                        <li>
                            <p>Unlimited Doctor Consultation with Healthx GP Doctor for 1 Month</p>
                        </li>
                        <li>
                            <p>Dedicated customer support</p>
                        </li>
                    </ul>
                </div>
            </div> */}
        </div>
    )
}
