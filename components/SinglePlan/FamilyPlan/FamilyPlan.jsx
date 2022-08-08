import Image from 'next/image'
import React from 'react'
import Family from '../../../assets/plan/family.png'
import classes from './FamilyPlan.module.css'

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

                <div className={classes.info}>
                    <span>Basic Plan</span>
                </div>
                <p className={classes.infoText}>
                    FHP Basic Plan is developed to ensure basic healthcare need of every individual & their beloved
                    family members with a dedicated family doctor support online 24x7! With a simple monthly
                    subscription, any members of the family can talk to his/her dedicated family doctor online - 24x7.
                </p>
                <ul className={classes.gridTable}>
                    {/******************************** Basic *************************************/}
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>1 Month Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>299</span>
                            <span>/for 4 persons</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <table>
                                <tr>
                                    <th>
                                        <li>Dr. Consultation</li>
                                    </th>
                                    <td>
                                        <li>24x7</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free Storage</li>
                                    </th>
                                    <td>
                                        <li>Unlimited</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free Access</li>
                                    </th>
                                    <td>
                                        <li>Premium</li>
                                    </td>
                                </tr>
                            </table>
                        </ul>
                        <button className={classes.tableStart}>Subscribe Now</button>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>3 Months Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>399</span>
                            <span>/for 4 persons</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <table>
                                <tr>
                                    <th>
                                        <li>Dr. Consultation</li>
                                    </th>
                                    <td>
                                        <li>24x7</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free storage</li>
                                    </th>
                                    <td>
                                        <li>Unlimited</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free Access</li>
                                    </th>
                                    <td>
                                        <li>Premium</li>
                                    </td>
                                </tr>
                            </table>
                        </ul>
                        <button className={classes.tableStart}>Subscribe Now</button>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>6 Months Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>499</span>
                            <span>/for 4 persons</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <table>
                                <tr>
                                    <th>
                                        <li>Dr. Consultation</li>
                                    </th>
                                    <td>
                                        <li>24x7</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free storage</li>
                                    </th>
                                    <td>
                                        <li>Unlimited</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free Access</li>
                                    </th>
                                    <td>
                                        <li>Premium</li>
                                    </td>
                                </tr>
                            </table>
                        </ul>
                        <button className={classes.tableStart}>Subscribe Now</button>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>12 Months Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>699</span>
                            <span>/for 4 persons</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <table>
                                <tr>
                                    <th>
                                        <li>Dr. Consultation</li>
                                    </th>
                                    <td>
                                        <li>24x7</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free storage</li>
                                    </th>
                                    <td>
                                        <li>Unlimited</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free Access</li>
                                    </th>
                                    <td>
                                        <li>Premium</li>
                                    </td>
                                </tr>
                            </table>
                        </ul>
                        <button className={classes.tableStart}>Subscribe Now</button>
                    </li>
                </ul>
                <div className={classes.details}>
                    <p>
                        <p>Coverage</p> <li>For a family (Up to 4 Person)</li>
                    </p>
                    <p>
                        <p>Offer Details</p> <span>Family Health Plan - Basic</span>
                        <li>24x7 unlimited online Doctor consultation with a dedicated Family Doctor.</li>
                        <li>Free storage facility of the personal health & medical record at My Health Portal.</li>
                        <li>Free access to all features of My Health Portal.</li>
                    </p>
                    {/* <p>
                        <p>Price</p>
                        <li>৳149 - 1Month | ৳399 - 3Months | ৳499 - 6Months | ৳699 - 12Months</li>
                    </p> */}
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
                <ul className={classes.gridTable}>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>1 Month Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>399</span>
                            <span>/for 4 persons</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <table>
                                <tr>
                                    <th>
                                        <li>Dr. Consultation</li>
                                    </th>
                                    <td>
                                        <li>24x7</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Diagnostic Test</li>
                                    </th>
                                    <td>
                                        <li>Up to 40%</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Medicine Order</li>
                                    </th>
                                    <td>
                                        <li>10% Cash Back</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free storage</li>
                                    </th>
                                    <td>
                                        <li>Unlimited</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free Access</li>
                                    </th>
                                    <td>
                                        <li>Premium</li>
                                    </td>
                                </tr>
                            </table>
                        </ul>
                        <button className={classes.tableStart}>Subscribe Now</button>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>3 Months Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>499</span>
                            <span>/for 4 persons</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <table>
                                <tr>
                                    <th>
                                        <li>Dr. Consultation</li>
                                    </th>
                                    <td>
                                        <li>24x7</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Diagnostic Test</li>
                                    </th>
                                    <td>
                                        <li>Up to 40%</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Medicine Order</li>
                                    </th>
                                    <td>
                                        <li>10% Cash Back</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free storage</li>
                                    </th>
                                    <td>
                                        <li>Unlimited</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free Access</li>
                                    </th>
                                    <td>
                                        <li>Premium</li>
                                    </td>
                                </tr>
                            </table>
                        </ul>
                        <button className={classes.tableStart}>Subscribe Now</button>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>6 Months Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>699</span>
                            <span>/for 4 persons</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <table>
                                <tr>
                                    <th>
                                        <li>Dr. Consultation</li>
                                    </th>
                                    <td>
                                        <li>24x7</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Diagnostic Test</li>
                                    </th>
                                    <td>
                                        <li>Up to 40%</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Medicine Order</li>
                                    </th>
                                    <td>
                                        <li>10% Cash Back</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free storage</li>
                                    </th>
                                    <td>
                                        <li>Unlimited</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free Access</li>
                                    </th>
                                    <td>
                                        <li>Premium</li>
                                    </td>
                                </tr>
                            </table>
                        </ul>
                        <button className={classes.tableStart}>Subscribe Now</button>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>12 Months Package</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>999</span>
                            <span>/for 4 persons</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <table>
                                <tr>
                                    <th>
                                        <li>Dr. Consultation</li>
                                    </th>
                                    <td>
                                        <li>24x7</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Diagnostic Test</li>
                                    </th>
                                    <td>
                                        <li>Up to 40%</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Medicine Order</li>
                                    </th>
                                    <td>
                                        <li>10% Cash Back</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free storage</li>
                                    </th>
                                    <td>
                                        <li>Unlimited</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free Access</li>
                                    </th>
                                    <td>
                                        <li>Premium</li>
                                    </td>
                                </tr>
                            </table>
                        </ul>
                        <button className={classes.tableStart}>Subscribe Now</button>
                    </li>
                </ul>
                <div className={classes.details}>
                    <p>
                        <p>Coverage</p> <li>For a family (Up to 4 Person)</li>
                    </p>
                    <p>
                        <p>Offer Details</p> <span>Family Health Plan - Standard</span>
                        <li>24x7 unlimited online Doctor consultation with a dedicated Family Doctor.</li>
                        <li>Up to 40% discounts on all pathological lab tests at home.</li>
                        <li>10% cashback on every medicine order without delivery charge.</li>
                        <li>Free storage facility of the personal health & medical record at My Health Portal.</li>
                        <li>Free access to all features of My Health Portal.</li>
                    </p>
                </div>

                {/******************************** Premium *************************************/}
                <div className={classes.info}>
                    <span>Premium Plan</span>
                </div>
                <p className={classes.infoText}>
                    FHP Premium is developed to ensure the primary healthcare need at home at affordable rate and cash
                    back on the hospital admission.
                </p>
                <ul className={classes.gridTable}>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>1 Month Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>699</span>
                            <span>/for 4 persons</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <table>
                                <tr>
                                    <th>
                                        <li>Dr. Consultation</li>
                                    </th>
                                    <td>
                                        <li>24x7</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Diagnostic Test</li>
                                    </th>
                                    <td>
                                        <li>Up to 40%</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Medicine Order</li>
                                    </th>
                                    <td>
                                        <li>10% Cash Back</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free storage</li>
                                    </th>
                                    <td>
                                        <li>Unlimited</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free Access</li>
                                    </th>
                                    <td>
                                        <li>Premium</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Hospital Cashback</li>
                                    </th>
                                    <td>
                                        <li>৳ 20,000</li>
                                    </td>
                                </tr>
                            </table>
                        </ul>
                        <button className={classes.tableStart}>Subscribe Now</button>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>3 Months Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>999</span>
                            <span>/for 4 persons</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <table>
                                <tr>
                                    <th>
                                        <li>Dr. Consultation</li>
                                    </th>
                                    <td>
                                        <li>24x7</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Diagnostic Test</li>
                                    </th>
                                    <td>
                                        <li>Up to 40%</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Medicine Order</li>
                                    </th>
                                    <td>
                                        <li>10% Cash Back</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free storage</li>
                                    </th>
                                    <td>
                                        <li>Unlimited</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free Access</li>
                                    </th>
                                    <td>
                                        <li>Premium</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Hospital Cashback</li>
                                    </th>
                                    <td>
                                        <li>৳ 20,000</li>
                                    </td>
                                </tr>
                            </table>
                        </ul>
                        <button className={classes.tableStart}>Subscribe Now</button>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>6 Months Plan</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>1,799</span>
                            <span>/for 4 persons</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <table>
                                <tr>
                                    <th>
                                        <li>Dr. Consultation</li>
                                    </th>
                                    <td>
                                        <li>24x7</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Diagnostic Test</li>
                                    </th>
                                    <td>
                                        <li>Up to 40%</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Medicine Order</li>
                                    </th>
                                    <td>
                                        <li>10% Cash Back</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free storage</li>
                                    </th>
                                    <td>
                                        <li>Unlimited</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free Access</li>
                                    </th>
                                    <td>
                                        <li>Premium</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Hospital Cashback</li>
                                    </th>
                                    <td>
                                        <li>৳ 20,000</li>
                                    </td>
                                </tr>
                            </table>
                        </ul>
                        <button className={classes.tableStart}>Subscribe Now</button>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>12 Months Package</h1>
                        <p className={classes.tablePricing}>
                            <span>৳</span>
                            <span>3,099</span>
                            <span>/for 4 persons</span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <table>
                                <tr>
                                    <th>
                                        <li>Dr. Consultation</li>
                                    </th>
                                    <td>
                                        <li>24x7</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Diagnostic Test</li>
                                    </th>
                                    <td>
                                        <li>Up to 40%</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Medicine Order</li>
                                    </th>
                                    <td>
                                        <li>10% Cash Back</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free storage</li>
                                    </th>
                                    <td>
                                        <li>Unlimited</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Free Access</li>
                                    </th>
                                    <td>
                                        <li>Premium</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Hospital Cashback</li>
                                    </th>
                                    <td>
                                        <li>৳ 20,000</li>
                                    </td>
                                </tr>
                            </table>
                        </ul>
                        <button className={classes.tableStart}>Subscribe Now</button>
                    </li>
                </ul>
                <div className={classes.details}>
                    <p>
                        <p>Coverage</p> <li>For a family (Up to 4 Person)</li>
                    </p>
                    <p>
                        <p>Offer Details</p> <span>Family Health Plan - Premium</span>
                        <li>24x7 unlimited online Doctor consultation with a dedicated Family Doctor.</li>
                        <li>Up to 40% discounts on all pathological lab tests at home.</li>
                        <li>10% cashback on every medicine order without delivery charge.</li>
                        <li>Free storage facility of the personal health & medical record at My Health Portal.</li>
                        <li>Free access to all features of My Health Portal.</li>
                        <li>Hospital cashback up to BDT 100,000 on hospital admission / stay.</li>
                    </p>
                </div>
            </div>
        </div>
    )
}
