import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Family from '../../../assets/plan/myplan.png'
import classes from './MyPlan.module.css'

export default function MyPlan() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.pricingTable}>
                <div className={classes.headerFlex}>
                    <div className={classes.header}>
                        <div>
                            <h2 className={classes.title}>MY HEALTH PLAN (MHP)</h2>
                            <p className={classes.subtitle}>
                                My Health Plan (MHP) is designed to ensure the basic healthcare need of every
                                individual. Primary Health Care need is now a common need in our daily life. Healthcare
                                expense is growing like anything day by day. To reduce the healthcare expenditure, we
                                are offering the primary & essential healthcare services at affordable costs.
                            </p>
                        </div>
                        <div className={classes.list}>
                            <li>24x7 Family Doctor</li>
                            <li>Diagnostic Test at Home</li>
                            <li>Medicine Delivery at Home</li>
                            <li>Health Insurance/Hospital Cashback</li>
                        </div>
                    </div>
                    <div className={classes.imgContainer}>
                        <Image src={Family} width={420} height={380} />
                    </div>
                </div>

                {/******************************** Basic *************************************/}
                <div className={classes.info}>
                    <span>Basic Plan</span>
                </div>
                <p className={classes.infoText}>
                    MHP Basic Plan is developed to ensure basic healthcare need of every individual, a dedicated family
                    doctor support online 24x7! With a simple monthly subscription, any individual can talk to his/her
                    dedicated family doctor online - 24x7.
                </p>
                <ul className={classes.gridFour}>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>1 Month Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>125</span>
                            <span>/for 1 person</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <li>24x7 unlimited online Doctor consultation with Family Doctor</li>
                            <li>Unlimited storage of prescriptions, test reports at My Health Portal</li>
                            <li>Free access to all premium features of My Health Portal</li>
                        </ul>
                        <Link href="https://user.healthxbd.com/">
                            <button className={classes.tableStart}>Subscribe Now</button>
                        </Link>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>3 Months Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>199</span>
                            <span>/for 1 person</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <li>24x7 unlimited online Doctor consultation with Family Doctor</li>
                            <li>Unlimited storage of prescriptions, test reports at My Health Portal</li>
                            <li>Free access to all premium features of My Health Portal</li>
                        </ul>
                        <Link href="https://user.healthxbd.com/">
                            <button className={classes.tableStart}>Subscribe Now</button>
                        </Link>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>6 Months Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>299</span>
                            <span>/for 1 person</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <li>24x7 unlimited online Doctor consultation with Family Doctor</li>
                            <li>Unlimited storage of prescriptions, test reports at My Health Portal</li>
                            <li>Free access to all premium features of My Health Portal</li>
                        </ul>
                        <Link href="https://user.healthxbd.com/">
                            <button className={classes.tableStart}>Subscribe Now</button>
                        </Link>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>12 Months Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>499</span>
                            <span>/for 1 person</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <li>24x7 unlimited online Doctor consultation with Family Doctor</li>
                            <li>Unlimited storage of prescriptions, test reports at My Health Portal</li>
                            <li>Free access to all premium features of My Health Portal</li>
                        </ul>
                        <Link href="https://user.healthxbd.com/">
                            <button className={classes.tableStart}>Subscribe Now</button>
                        </Link>
                    </li>
                </ul>
                <div className={classes.details}>
                    <div>
                        <span>Coverage</span>
                        <ul>
                            <li>For 1 Person (Male/Female)</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Offer Details</h4> <span>My Health Plan - Basic</span>
                        <ul>
                            <li>24x7 unlimited online Doctor consultation with a dedicated Family Doctor.</li>
                            <li>Free storage facility of the personal health & medical record at My Health Portal.</li>
                            <li>Free access to all features of My Health Portal.</li>
                        </ul>
                    </div>
                </div>

                {/******************************** Standard *************************************/}
                <div className={classes.info}>
                    <span>Standard Plan</span>
                </div>
                <p className={classes.infoText}>
                    MHP Standard is developed to deliver the primary & essential healthcare services at home at
                    affordable price. With a monthly subscription, any single individual can enjoy all the essential
                    healthcare services.
                </p>
                <ul className={classes.gridFour}>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>1 Month Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>149</span>
                            <span>/for 1 person</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <li>24x7 unlimited online Doctor consultation with Family Doctor</li>
                            <li>Up to 40% discount on Blood & Urine test at home</li>
                            <li>10% Cash Back on Medicine order with no delivery charge</li>
                            <li>Unlimited storage of prescriptions, test reports at My Health Portal</li>
                            <li>Free access to all premium features of My Health Portal</li>
                        </ul>
                        <Link href="https://user.healthxbd.com/">
                            <button className={classes.tableStart}>Subscribe Now</button>
                        </Link>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>3 Months Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>299</span>
                            <span>/for 1 person</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <li>24x7 unlimited online Doctor consultation with Family Doctor</li>
                            <li>Up to 40% discount on Blood & Urine test at home</li>
                            <li>10% Cash Back on Medicine order with no delivery charge</li>
                            <li>Unlimited storage of prescriptions, test reports at My Health Portal</li>
                            <li>Free access to all premium features of My Health Portal</li>
                        </ul>
                        <Link href="https://user.healthxbd.com/">
                            <button className={classes.tableStart}>Subscribe Now</button>
                        </Link>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>6 Months Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>399</span>
                            <span>/for 1 person</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <li>24x7 unlimited online Doctor consultation with Family Doctor</li>
                            <li>Up to 40% discount on Blood & Urine test at home</li>
                            <li>10% Cash Back on Medicine order with no delivery charge</li>
                            <li>Unlimited storage of prescriptions, test reports at My Health Portal</li>
                            <li>Free access to all premium features of My Health Portal</li>
                        </ul>
                        <Link href="https://user.healthxbd.com/">
                            <button className={classes.tableStart}>Subscribe Now</button>
                        </Link>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>12 Months Package</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>599</span>
                            <span>/for 1 person</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <li>24x7 unlimited online Doctor consultation with Family Doctor</li>
                            <li>Up to 40% discount on Blood & Urine test at home</li>
                            <li>10% Cash Back on Medicine order with no delivery charge</li>
                            <li>Unlimited storage of prescriptions, test reports at My Health Portal</li>
                            <li>Free access to all premium features of My Health Portal</li>
                        </ul>
                        <Link href="https://user.healthxbd.com/">
                            <button className={classes.tableStart}>Subscribe Now</button>
                        </Link>
                    </li>
                </ul>
                <div className={classes.details}>
                    <div>
                        <span>Coverage</span>
                        <ul>
                            <li>For 1 Person (Male/Female)</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Offer Details</h4> <span>My Health Plan - Standard</span>
                        <ul>
                            <li>24x7 unlimited online Doctor consultation with a dedicated Family Doctor.</li>
                            <li>Up to 40% discounts on all pathological lab tests at home.</li>
                            <li>10% cashback on every medicine order without delivery charge.</li>
                            <li>Free storage facility of the personal health & medical record at My Health Portal.</li>
                            <li>Free access to all features of My Health Portal.</li>
                        </ul>
                    </div>
                </div>

                {/******************************** Premium *************************************/}
                <div className={classes.info}>
                    <span>Premium Plan</span>
                </div>
                <p className={classes.infoText}>
                    MHP Premium is developed to ensure the primary healthcare need at home at affordable rate and cash
                    back on the hospital admission.
                </p>
                <ul className={classes.gridThree}>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>3 Months Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>399</span>
                            <span>/for 1 person</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <li>24x7 unlimited online Doctor consultation with Family Doctor</li>
                            <li>Up to 40% discount on Blood & Urine test at home</li>
                            <li>10% Cash Back on Medicine order with no delivery charge</li>
                            <li>Unlimited storage of prescriptions, test reports at My Health Portal</li>
                            <li>Free access to all premium features of My Health Portal</li>
                            <li>Hospital cashback up to BDT 20,000</li>
                        </ul>
                        <Link href="https://user.healthxbd.com/">
                            <button className={classes.tableStart}>Subscribe Now</button>
                        </Link>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>6 Months Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>599</span>
                            <span>/for 1 person</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <li>24x7 unlimited online Doctor consultation with Family Doctor</li>
                            <li>Up to 40% discount on Blood & Urine test at home</li>
                            <li>10% Cash Back on Medicine order with no delivery charge</li>
                            <li>Unlimited storage of prescriptions, test reports at My Health Portal</li>
                            <li>Free access to all premium features of My Health Portal</li>
                            <li>Hospital cashback up to BDT 20,000</li>
                        </ul>
                        <Link href="https://user.healthxbd.com/">
                            <button className={classes.tableStart}>Subscribe Now</button>
                        </Link>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>12 Months Package</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>899</span>
                            <span>/for 1 person</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <li>24x7 unlimited online Doctor consultation with Family Doctor</li>
                            <li>Up to 40% discount on Blood & Urine test at home</li>
                            <li>10% Cash Back on Medicine order with no delivery charge</li>
                            <li>Unlimited storage of prescriptions, test reports at My Health Portal</li>
                            <li>Free access to all premium features of My Health Portal</li>
                            <li>Hospital cashback up to BDT 20,000</li>
                        </ul>
                        <Link href="https://user.healthxbd.com/">
                            <button className={classes.tableStart}>Subscribe Now</button>
                        </Link>
                    </li>
                </ul>
                <div className={classes.details}>
                    <div>
                        <span>Coverage</span>
                        <ul>
                            <li>For 1 Person (Male/Female)</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Offer Details</h4> <span>My Health Plan - Premium</span>
                        <ul>
                            <li>24x7 unlimited online Doctor consultation with a dedicated Family Doctor.</li>
                            <li>Up to 40% discounts on all pathological lab tests at home.</li>
                            <li>10% cashback on every medicine order without delivery charge.</li>
                            <li>Free storage facility of the personal health & medical record at My Health Portal.</li>
                            <li>Free access to all features of My Health Portal.</li>
                            <li>Hospital cashback up to BDT 20,000 on hospital admission/stay.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
