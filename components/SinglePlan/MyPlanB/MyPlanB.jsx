import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Family from '../../../assets/plan/myplan.png'
import classes from './MyPlanB.module.css'

export default function MyPlanB() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.pricingTable}>
                <div className={classes.headerFlex}>
                    <div className={classes.header}>
                        <div>
                            <h2 className={classes.title}>আমার ডাক্তার ফ্যামিলি হেলথ প্ল্যান </h2>
                            <p className={classes.subtitle}>
                                আপনারের সন্তান, বাবা-মা, স্বামী/স্ত্রী অথবা পরিবারের যে কোন সদস্যের যে কোন মুহূর্তে
                                প্রয়োজন হতে পারে একজন অভিজ্ঞ চিকিৎসকের পরামর্শ। আমার ডাক্তার ফ্যামিলি হেলথ প্ল্যান
                                আপনাকে দিচ্ছে যে কোন সময়ে অনলাইনে ডাক্তারের পরামর্শ নেয়ার সুবিধা।
                            </p>
                        </div>
                        <div className={classes.list}>
                            <li>দিন-রাত ২৪ ঘণ্টা সেবা</li>
                            <li>অভিজ্ঞ ডাক্তার</li>
                            <li>যত ইচ্ছা, ততবার</li>
                            <li>পরিবারের সকলের জন্য</li>
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
                        <h1 className={classes.tableHeader}>১ মাসের প্ল্যান ১৯৯/- </h1>
                        <p className={classes.tablePricing}>
                            {/* <span> ১৯৯/- </span> */}
                            <span>১৯৯/- </span>
                            {/* <span>/for 1 person</span> */}
                        </p>
                        <ul className={classes.tableOptions}>
                            <li>২৪/৭ অনলাইন ডাক্তারের পরামর্শ </li>
                            <li>মাই হেলথ পোর্টালে ফ্রি রেজিস্ট্রেশন </li>
                            <li>প্রেস্ক্রিপশন ও টেস্ট রিপোর্টের ডিজিটাল কপি সংরক্ষণের সুবিধা</li>
                        </ul>
                        <Link href="https://user.healthxbd.com/">
                            <button className={classes.tableStart}> প্ল্যানটি কিনুন</button>
                        </Link>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>৩ মাসের প্ল্যান ২৯৯/-</h1>
                        <p className={classes.tablePricing}>
                            {/* <span>৳</span>
                            <span>199</span>
                            <span>/for 1 person</span> */}
                            <span>১৯৯/- </span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <li>২৪/৭ অনলাইন ডাক্তারের পরামর্শ</li>
                            <li>মাই হেলথ পোর্টালে ফ্রি রেজিস্ট্রেশন </li>
                            <li>প্রেস্ক্রিপশন ও টেস্ট রিপোর্টের ডিজিটাল কপি সংরক্ষণের সুবিধা </li>
                        </ul>
                        <Link href="https://user.healthxbd.com/">
                            <button className={classes.tableStart}> প্ল্যানটি কিনুন </button>
                        </Link>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}> ৬ মাসের প্ল্যান ৩৯৯/-</h1>
                        <p className={classes.tablePricing}>
                            {/* <span>৳</span>
                            <span>299</span>
                            <span>/for 1 person</span> */}
                            <span>১৯৯/- </span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <li>২৪/৭ অনলাইন ডাক্তারের পরামর্শ</li>
                            <li>মাই হেলথ পোর্টালে ফ্রি রেজিস্ট্রেশন </li>
                            <li>প্রেস্ক্রিপশন ও টেস্ট রিপোর্টের ডিজিটাল কপি সংরক্ষণের সুবিধা</li>
                        </ul>
                        <Link href="https://user.healthxbd.com/">
                            <button className={classes.tableStart}> প্ল্যানটি কিনুন </button>
                        </Link>
                    </li>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>১২ মাসের প্ল্যান ৬৯৯/-</h1>
                        <p className={classes.tablePricing}>
                            {/* <span>৳</span>
                            <span>499</span>
                            <span>/for 1 person</span> */}
                            <span>১৯৯/- </span>
                        </p>
                        <ul className={classes.tableOptions}>
                            <li>২৪/৭ অনলাইন ডাক্তারের পরামর্শ</li>
                            <li>মাই হেলথ পোর্টালে ফ্রি রেজিস্ট্রেশন </li>
                            <li>প্রেস্ক্রিপশন ও টেস্ট রিপোর্টের ডিজিটাল কপি সংরক্ষণের সুবিধা</li>
                        </ul>
                        <Link href="https://user.healthxbd.com/">
                            <button className={classes.tableStart}> প্ল্যানটি কিনুন</button>
                        </Link>
                    </li>
                </ul>
                {/* <div className={classes.details}>
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
                </div> */}

                {/******************************** Standard *************************************/}
            </div>
        </div>
    )
}
