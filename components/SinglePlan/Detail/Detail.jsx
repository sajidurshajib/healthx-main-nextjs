import Image from 'next/image'
import React from 'react'
import Family from '../../../assets/plan/family.png'
import classes from './Detail.module.css'

export default function Detail() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.pricingTable}>
                <div className={classes.headerFlex}>
                    <div className={classes.header}>
                        <div>
                            <h2 className={classes.title}>Family Health Package (FHP)</h2>
                            <p className={classes.subtitle}>
                                Family health package is designed to ensure the healthcare need of individuals and their
                                family members (4 Person). Primary Health Care need is now a common need in our daily
                                life. Healthcare pocket expense is increasing day by day. To meet the need of family
                                healthcare service at affordable price we are offering.
                            </p>
                        </div>
                    </div>
                    <div className={classes.imgContainer}>
                        <Image src={Family} width={420} height={380} />
                    </div>
                </div>

                <div className={classes.info}>
                    <span>Basic Package</span>
                </div>
                <p className={classes.infoText}>
                    Family Health Package-Basic is developed to ensure the primary healthcare needs at home in
                    affordable price. Package includes:
                </p>
                <ul className={classes.gridTable}>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>3 Months Package</h1>
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
                                        <li>8% Cash Back</li>
                                    </td>
                                </tr>
                            </table>
                        </ul>
                        <button className={classes.tableStart}>Subscribe Now</button>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>6 Months Package</h1>
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
                                        <li>8% Cash Back</li>
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
                                        <li>8% Cash Back</li>
                                    </td>
                                </tr>
                            </table>
                        </ul>
                        <button className={classes.tableStart}>Subscribe Now</button>
                    </li>
                </ul>
                <div className={classes.details}>
                    <p>
                        <p>Offer Details</p> <span>Family Health Package - Basic</span>
                        <li>
                            Any individuals and their family member get 24 hours 7 days Doctor consultation for 30 days.
                        </li>
                        <li>
                            Any individuals and their family member get up to 40% discounts on pathological lab test.
                        </li>
                        <li>Any individuals and their family member get up to 8% cashback on medicine order.</li>
                    </p>
                    <p>
                        <p>Price</p>
                        <li>৳499 - 3Months | ৳699 - 6Months | ৳999 - 12Months</li>
                    </p>
                    <p>
                        <p>Coverage</p> <li>4 Persons</li>
                    </p>
                </div>

                {/* premium */}
                <div className={classes.info}>
                    <span>Premium Package</span>
                </div>
                <p className={classes.infoText}>
                    Family Health Package-Premium is developed to ensure the primary healthcare needs at home in
                    affordable price. Package includes:
                </p>
                <ul className={classes.gridTable}>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>3 Months Package</h1>
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
                                        <li>8% Cash Back</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Hospital Cashback</li>
                                    </th>
                                    <td>
                                        <li>৳ 1,00,000</li>
                                    </td>
                                </tr>
                            </table>
                        </ul>
                        <button className={classes.tableStart}>Subscribe Now</button>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>6 Months Package</h1>
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
                                        <li>8% Cash Back</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Hospital Cashback</li>
                                    </th>
                                    <td>
                                        <li>৳ 1,00,000</li>
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
                                        <li>8% Cash Back</li>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <li>Hospital Cashback</li>
                                    </th>
                                    <td>
                                        <li>৳ 1,00,000</li>
                                    </td>
                                </tr>
                            </table>
                        </ul>
                        <button className={classes.tableStart}>Subscribe Now</button>
                    </li>
                </ul>
                <div className={classes.details}>
                    <p>
                        <p>Offer Details</p> <span>Family Health Package - Premium</span>
                        <li>
                            Any individuals and their family member get 24 hours 7 days Doctor consultation for 30 days.
                        </li>
                        <li>
                            Any individuals and their family member get up to 40% discounts on pathological lab test.
                        </li>
                        <li>Any individuals and their family member get up to 8% cashback on medicine order.</li>
                        <li>
                            Any individuals and their family member get Tk 100,000 hospital cashback on any hospital
                            admission as a Health Insurance coverage.
                        </li>
                    </p>
                    <p>
                        <p>Price</p>
                        <li>৳999 - 3Months | ৳1,799 - 6Months | ৳3,099 - 12Months</li>
                    </p>
                    <p>
                        <p>Coverage</p> <li>4 Persons</li>
                    </p>
                </div>
            </div>
        </div>
    )
}
