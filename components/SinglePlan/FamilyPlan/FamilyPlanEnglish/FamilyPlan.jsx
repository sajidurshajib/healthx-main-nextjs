import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Family from '../../../../assets/plan/family.png'
import Faq from '../Faq/Faq'
import classes from './FamilyPlan.module.css'

// import FamilyPlanBangla from './FamilyPlanBangla/FamilyPlanBangla'

export default function FamilyPlan() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.pricingTable}>
                <div className={classes.headerFlex}>
                    <div className={classes.header}>
                        <div>
                            <h2 className={classes.title}>Amar Daktar</h2>
                            <p className={classes.title2}>Family Health Plan</p>
                            <p className={classes.subtitle}>
                                Buying healthcare services frequently and booking appointments every time you or an
                                ailing family member need a doctor consultation can be expensive and difficult. HealthX
                                offers convenient and affordable health plans to make sure you and your family are
                                constantly under the coverage of the best available primary healthcare services.
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
                    <span>Basic Health Plan</span>
                </div>
                <p className={classes.infoText}>
                    HealthX Basic Health Plans are best for families with kids and health conscious adults who value
                    preventive healthcare, or who need constant medical attention for basic health issues.
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
                {/* <div className={classes.details}>
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
                </div> */}

                {/******************************** Standard *************************************/}
                <div className={classes.info}>
                    <span>Standard Health Plan</span>
                </div>
                <p className={classes.infoText}>
                    HealthX Standard Health Plans will make regular health indicators monitoring and diagnostics easier
                    for pregnant mothers, elderly family members, patients with diabetes, hypertension and other long
                    term health issues.
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
                {/* <div className={classes.details}>
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
                </div> */}

                {/******************************** Premium *************************************/}
                <div className={classes.info}>
                    <span>Premium Health Plan</span>
                </div>
                <p className={classes.infoText}>
                    HealthX Premium Health Plans are a sophisticated solution to your family’s primary healthcare
                    necessities. Our Premium Plans are the best fit for those suffering from severe chronic illnesses,
                    injuries, in need of hospital care, and families in general who need to have a 24/7 medical
                    professional just a call away. HealthX Premium Health plans will remove the financial burden of
                    healthcare from you and yours.
                </p>
                <ul className={classes.gridFour}>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>1 Months Plan</h1>
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
                            <li>Hospital cashback up to BDT 20,000</li>
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
                            <li>Hospital cashback up to BDT 100,000 on hospital admission/stay.</li>
                        </ul>
                        <Link href="https://user.healthxbd.com/">
                            <button className={classes.tableStart}>Subscribe Now</button>
                        </Link>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>6 Months Package</h1>
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
                            <li>Hospital cashback up to BDT 100,000 on hospital admission/stay.</li>
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
                            <li>Hospital cashback up to BDT 100,000 on hospital admission/stay.</li>
                        </ul>
                        <Link href="https://user.healthxbd.com/">
                            <button className={classes.tableStart}>Subscribe Now</button>
                        </Link>
                    </li>
                </ul>
                {/* <div className={classes.details}>
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
                </div> */}
            </div>

            <Faq />
        </div>
    )
}
