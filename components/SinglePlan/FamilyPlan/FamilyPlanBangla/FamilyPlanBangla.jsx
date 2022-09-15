import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import VioletIcon from '../../../../assets/plan/CurvedArrow.png'
import FooterImg4 from '../../../../assets/plan/Nursing.png'
import LastImg from '../../../../assets/plan/NursingAndAttendence.png'
import DownArrow from '../../../../assets/plan/blueDownArrow.png'
import ButtonClick from '../../../../assets/plan/buttonClick.png'
import PinkIcon from '../../../../assets/plan/downArrow.png'
// import Clock from '../../../../assets/plan/Clock.png'
import AllMembers from '../../../../assets/plan/fianl3.png'
import Phone from '../../../../assets/plan/final1.png'
import Clock from '../../../../assets/plan/final2.png'
import Doctor from '../../../../assets/plan/final4.png'
import ConnectingDoctor from '../../../../assets/plan/healthCalling.png'
import DotLeftArrow from '../../../../assets/plan/leftbuleArrow.png'
import Manager from '../../../../assets/plan/manager.png'
import FooterImg2 from '../../../../assets/plan/medicineDelivery.png'
import FooterImg1 from '../../../../assets/plan/onlineDoctor.png'
// import Family from '../../../assets/plan/myplan.png'
import Family from '../../../../assets/plan/onlineMeeting.png'
import FooterImg5 from '../../../../assets/plan/pharmacisht2.png'
import FooterImg3 from '../../../../assets/plan/sampleCollection2.png'
// import Phone from '../../../../assets/plan/ringingPhone.png'
import classes from './FamilyPlanBangla.module.css'

export default function FamilyPlanBangla() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.pricingTable}>
                <div className={classes.headerFlex}>
                    <div className={classes.header}>
                        <div>
                            <h2 className={classes.title}>আমার ডাক্তার </h2>
                            <h3 className={classes.title2}> ফ্যামিলি হেলথ প্ল্যান </h3>
                            <p className={classes.subtitle}>
                                আপনারের সন্তান, বাবা-মা, স্বামী/স্ত্রী অথবা পরিবারের যে কোন সদস্যের যে কোন মুহূর্তে
                                প্রয়োজন হতে পারে একজন অভিজ্ঞ চিকিৎসকের পরামর্শ। আমার ডাক্তার ফ্যামিলি হেলথ প্ল্যান
                                আপনাকে দিচ্ছে যে কোন সময়ে অনলাইনে ডাক্তারের পরামর্শ নেয়ার সুবিধা।
                            </p>
                        </div>
                        <div className={classes.list}>
                            <div>
                                <div>
                                    <Image src={Clock} width={50} height={50} />{' '}
                                </div>
                                <p> দিন-রাত ২৪ ঘণ্টা সেবা </p>
                            </div>
                            <div>
                                <div>
                                    <Image src={Doctor} width={50} height={50} />
                                </div>
                                <p> অভিজ্ঞ ডাক্তার </p>
                            </div>
                            <div>
                                <div>
                                    <Image src={Phone} width={40} height={45} />{' '}
                                </div>
                                <p> যত ইচ্ছা, ততবার</p>
                            </div>

                            <div>
                                <div>
                                    <Image src={AllMembers} width={45} height={45} />
                                </div>
                                <p> পরিবারের সকলের জন্য </p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.imgContainer}>
                        <Image src={Family} width={550} height={300} />
                    </div>
                </div>
                {/******************************** Middle Part *************************************/}
                {/* <div className={classes.middle}>
                    <div className={classes.list}>
                        <div>
                            <div>
                                <Image src={Clock} width={70} height={70} />
                            </div>
                            <p> দিন-রাত ২৪ ঘণ্টা সেবা </p>
                        </div>
                        <div>
                            <div>
                                <Image src={Doctor} width={70} height={70} />
                            </div>
                            <p> অভিজ্ঞ ডাক্তার </p>
                        </div>
                        <div>
                            <div>
                                <Image src={Phone} width={60} height={60} />
                            </div>
                            <p> যত ইচ্ছা, ততবার</p>
                        </div>
                        <div>
                            <div>
                                <Image src={AllMembers} width={65} height={65} />
                            </div>
                            <p> পরিবারের সকলের জন্য </p>
                        </div>
                    </div>
                </div> */}

                {/******************************** Basic *************************************/}
                {/* <div className={classes.info}>
                    <span>Basic Plan</span>
                </div>
                <p className={classes.infoText}>
                    MHP Basic Plan is developed to ensure basic healthcare need of every individual, a dedicated family
                    doctor support online 24x7! With a simple monthly subscription, any individual can talk to his/her
                    dedicated family doctor online - 24x7.
                </p> */}
                <ul className={classes.gridFour}>
                    <li className={classes.table}>
                        <h1 className={classes.tableHeader}>১ মাসের প্ল্যান </h1>
                        {/* <p className={classes.tablePricing}>
                            <span>১৯৯/- </span>
                        </p> */}
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
                        <h1 className={classes.tableHeader}>৩ মাসের প্ল্যান </h1>
                        {/* <p className={classes.tablePricing}>
                            <span> ২৯৯/- </span>
                        </p> */}
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
                        <h1 className={classes.tableHeader}> ৬ মাসের প্ল্যান </h1>
                        {/* <p className={classes.tablePricing}>
                            <span> ৩৯৯/- </span>
                        </p> */}
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
                        <h1 className={classes.tableHeader}>১২ মাসের প্ল্যান </h1>
                        {/* <p className={classes.tablePricing}>
                            <span>৬৯৯/- </span>
                        </p> */}
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
            </div>

            <div className={classes.footer}>
                <div>
                    <h2> আমার ডাক্তার হেলথ প্ল্যান থেকে স্বাস্থ্যসেবা নিন ৩টি সহজ ধাপে </h2>
                </div>

                <div>
                    <div>
                        <div>
                            <Image src={ButtonClick} width={60} height={65} />
                        </div>
                        <p> “প্ল্যানটি কিনুন” বাটনে ক্লিক করে রেজিস্ট্রেশন করুন, অথবা স্ক্রিনে দেয়া নাম্বারে কল করুন</p>
                    </div>

                    <div>
                        <div>
                            <Image src={DotLeftArrow} width={75} height={95} />
                        </div>
                        <div>
                            <Image src={DownArrow} width={40} height={55} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src={Manager} width={60} height={50} />
                        </div>
                        <p> আমাদের নিবেদিত হেলথ ম্যানেজার আপনার হেলথ প্ল্যানটি একটিভেট করে দিবেন</p>
                    </div>

                    <div>
                        <div>
                            <Image src={DotLeftArrow} width={75} height={95} />
                        </div>
                        <div>
                            <Image src={DownArrow} width={40} height={55} />
                        </div>
                    </div>

                    <div>
                        <div>
                            <Image src={ConnectingDoctor} width={60} height={60} />
                        </div>
                        <p> পরবর্তীতে যে কোন সময়ে হেলথ ম্যানেজারকে কল করে আপনি যুক্ত হতে পারবেন ডাক্তারের সাথে</p>
                    </div>
                </div>

                <div>
                    <h1> আমার ডাক্তার ফ্যামিলি হেলথ-প্ল্যান সম্পর্কে জানতে কল করুন</h1>
                    <p> +8801322658481</p>
                    <p> +8801571016461</p>
                </div>
            </div>

            <div className={classes.footerLast}>
                <div>
                    <h2>
                        প্রয়োজনীয় <span> সকল স্বাস্থ্যসেবা </span>
                    </h2>
                    <h2>
                        এখন <span> এক জায়গাতেই </span>{' '}
                    </h2>{' '}
                    <h3> আমাদের অন্যান্য সেবাসমূহ </h3>
                </div>
                <div>
                    {/* <div>
                        <Image src={FooterImg1} width={70} height={60} />
                        <p> ২৪/৭ অনলাইন ডাক্তার</p>
                    </div> */}
                    <div>
                        <Image src={FooterImg2} width={70} height={65} />
                        <p>মেডিসিন ডেলিভারি</p>
                    </div>
                    <div>
                        <Image src={FooterImg3} width={70} height={65} />
                        <p> প্যাথলজি স্যাম্পল কালেকশন</p>
                    </div>
                    <div>
                        <Image src={LastImg} width={70} height={65} />
                        <p> নার্সিং ও অ্যাটেন্ডেন্ট সেবা</p>
                    </div>
                    <div>
                        <Image src={FooterImg5} width={70} height={65} />
                        <p> ফিজিওথেরাপি সেবা</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
