import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Family from '../../../../assets/plan/family.png'
import classes from './FamilyPlan.module.css'

// import FamilyPlanBangla from './FamilyPlanBangla/FamilyPlanBangla'

export default function FamilyPlan() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.pricingTable}>
                <div className={classes.headerFlex}>
                    <div className={classes.header}>
                        <div>
                            <h2 className={classes.title}>FAMILY HEALTH PLAN (FHP)</h2>
                            <p className={classes.subtitle}>
                                Family Health Plan (FHP) is designed to ensure the healthcare need of individuals and
                                their family members (4 Person). Primary & essential healthcare need is now a common
                                need in our daily life. Healthcare pocket expense is increasing day by day. To meet the
                                need of family healthcare service at affordable price we are offering.
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
                    FHP Basic Plan is developed to ensure basic healthcare need of every individual & their beloved
                    family members with a dedicated family doctor support online 24x7! With a simple monthly
                    subscription, any members of the family can talk to his/her dedicated family doctor online - 24x7.
                </p>
                <ul className={classes.gridFour}>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>1 Month Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>299</span>
                            <span>/for 4 persons</span>
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
                            <span>399</span>
                            <span>/for 4 persons</span>
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
                            <span>499</span>
                            <span>/for 4 persons</span>
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
                            <span>699</span>
                            <span>/for 4 persons</span>
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
                            <li>For a family (Up to 4 Person)</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Offer Details</h4> <span>Family Health Plan - Basic</span>
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
                    FHP Standard Plan is developed to deliver the primary & essential healthcare services at home at
                    affordable price. With a monthly subscription, any members of the family can enjoy all the essential
                    healthcare services.
                </p>
                <ul className={classes.gridFour}>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>1 Month Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>399</span>
                            <span>/for 4 persons</span>
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
                            <span>499</span>
                            <span>/for 4 persons</span>
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
                            <span>699</span>
                            <span>/for 4 persons</span>
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
                            <span>999</span>
                            <span>/for 4 persons</span>
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
                            <li>For a family (Up to 4 Person)</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Offer Details</h4> <span>Family Health Plan - Standard</span>
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
                    FHP Premium is developed to ensure the primary healthcare need at home at affordable rate and cash
                    back on the hospital admission.
                </p>
                <ul className={classes.gridThree}>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>3 Months Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>999</span>
                            <span>/for 4 persons</span>
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
                            <span>1,799</span>
                            <span>/for 4 persons</span>
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
                            <span>3,099</span>
                            <span>/for 4 persons</span>
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
                            <li>For a family (Up to 4 Person)</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Offer Details</h4> <span>Family Health Plan - Premium</span>
                        <ul>
                            <li>24x7 unlimited online Doctor consultation with a dedicated Family Doctor.</li>
                            <li>Up to 40% discounts on all pathological lab tests at home.</li>
                            <li>10% cashback on every medicine order without delivery charge.</li>
                            <li>Free storage facility of the personal health & medical record at My Health Portal.</li>
                            <li>Free access to all features of My Health Portal.</li>
                            <li>Hospital cashback up to BDT 100,000 on hospital admission/stay.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
