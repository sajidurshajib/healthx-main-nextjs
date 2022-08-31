import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useState } from 'react'
import hx from '../../../assets/img/hx-blue-fit.png'
import classes from './MainNav.module.css'

const MainNav = () => {
    const [show, setShow] = useState(false)
    return (
        <div className={classes.MainNav}>
            <div className={`${classes.Wrapper} ${'container'}`}>
                <div className={classes.toggleBar}>
                    <FontAwesomeIcon className={classes.icon} icon={faBars} />
                    <div className={classes.sidebar}>
                        <div className={classes.option}>
                            <p>SignIn</p>
                            <div className={classes.value}>
                                <p>
                                    {' '}
                                    <a href="https://doc.healthxbd.com">Smart Doctor</a>
                                </p>
                                <p>
                                    {' '}
                                    <a href="https://user.healthxbd.com">My Health Portal</a>
                                </p>
                            </div>
                        </div>
                        <div className={classes.option}>
                            <p>About</p>
                            <div className={classes.value}>
                                <p>
                                    {' '}
                                    <a href="#">Mission and Vision</a>
                                </p>
                                <p>
                                    <a href="#">Founders</a>{' '}
                                </p>
                                <p>
                                    {' '}
                                    <a href="#">Team</a>
                                </p>
                            </div>
                        </div>

                        <div className={classes.option}>
                            <p>Solutions</p>
                            <div className={classes.value}>
                                <p>
                                    {' '}
                                    <a href="https://user.healthxbd.com">For Patient</a>
                                </p>
                                <p>
                                    {' '}
                                    <a href="https://doc.healthxbd.com">For Doctor</a>
                                </p>
                                <p>
                                    {' '}
                                    <a href="https://pharmacy.healthxbd.com">For Pharmacy</a>
                                </p>
                            </div>
                        </div>
                        <div className={classes.option}>
                            <p>HealthPlans</p>
                            <div className={classes.value}>
                                <p>
                                    {' '}
                                    <a href="my-plan">My Health Plan</a>
                                </p>
                                <p>
                                    {' '}
                                    <a href="family-plan">Family Health Plan</a>
                                </p>
                            </div>
                        </div>
                        <div className={classes.option}>
                            <p>Services</p>
                            <div className={classes.value}>
                                <p>
                                    {' '}
                                    <a href="nursing-attendant">Nursing/Attendant</a>
                                </p>
                                <p>
                                    {' '}
                                    <a href="medicine-delivery">Medicine Delivery</a>
                                </p>
                            </div>
                        </div>
                        <div className={classes.option}>
                            <p>Media</p>
                            <div className={classes.value}>
                                <p>
                                    {' '}
                                    <a href="#">News and Media</a>
                                </p>
                                <p>
                                    {' '}
                                    <a href="#">Healthx Blog</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.left}>
                    <a className={classes.SiteLogo} href="/">
                        <Image src={hx} height={30} width={130} alt="" />
                    </a>
                </div>

                <div className={classes.center}>
                    <div className={classes.MenuWrap}>
                        <div className={classes.MenuHead}>About</div>
                        <div className={classes.MenuLink}>
                            <a href="#">Mission and Vision</a>
                            <a href="#">Founders</a>
                            <a href="#">Team</a>
                        </div>
                    </div>
                    <div className={classes.MenuWrap}>
                        <div className={classes.MenuHead}>Solutions</div>
                        <div className={classes.MenuLink}>
                            <a href="https://user.healthxbd.com">For Patient</a>
                            <a href="https://doc.healthxbd.com">For Doctor</a>
                            <a href="https://pharmacy.healthxbd.com">For Pharmacy</a>
                        </div>
                    </div>
                    <div className={classes.MenuWrap}>
                        <div className={classes.MenuHead}>Health Plan</div>
                        <div className={classes.MenuLink}>
                            <a href="my-plan">My Health Plan</a>
                            <a href="family-plan">Family Health Plan</a>
                        </div>
                    </div>
                    <div className={classes.MenuWrap}>
                        <div className={classes.MenuHead}>Services</div>
                        <div className={classes.MenuLink}>
                            <a href="nursing-attendant">Nursing/Attendant</a>
                            <a href="medicine-delivery">Medicine Delivery</a>
                        </div>
                    </div>
                    <div className={classes.MenuWrap}>
                        <div className={classes.MenuHead}>Media</div>
                        <div className={classes.MenuLink}>
                            <a href="#">News and Media</a>
                            <a href="#">Healthx Blog</a>
                        </div>
                    </div>
                </div>

                <div className={classes.right}>
                    <div className={classes.MenuWrap}>
                        <div className={classes.MenuSignin}>Signin</div>
                        <div className={classes.SigninLink}>
                            <a href="https://doc.healthxbd.com">Smart Doctor</a>
                            <a href="https://user.healthxbd.com">My Health Portal</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Extra Section */}

            {/* {show && (
                <div>
                    {' '}
                    <p> something</p>
                </div>
            )} */}

            {/* {show && (
                <div className={classes.extra}>
                    <div className={classes.MenuWrap}>
                        <div className={classes.MenuSignin}>Signin</div>
                        <div className={classes.SigninLink}>
                            <a href="https://doc.healthxbd.com">Smart Doctor</a>
                            <a href="https://user.healthxbd.com">My Health Portal</a>
                        </div>
                    </div>
                    <div className={classes.MenuWrap}>
                        <div className={classes.MenuHead}>About</div>
                        <div className={classes.MenuLink}>
                            <a href="#">Mission and Vision</a>
                            <a href="#">Founders</a>
                            <a href="#">Team</a>
                        </div>
                    </div>
                    <div className={classes.MenuWrap}>
                        <div className={classes.MenuHead}>Solutions</div>
                        <div className={classes.MenuLink}>
                            <a href="https://user.healthxbd.com">For Patient</a>
                            <a href="https://doc.healthxbd.com">For Doctor</a>
                            <a href="https://pharmacy.healthxbd.com">For Pharmacy</a>
                        </div>
                    </div>
                    <div className={classes.MenuWrap}>
                        <div className={classes.MenuHead}>Health Plan</div>
                        <div className={classes.MenuLink}>
                            <a href="my-plan">My Health Plan</a>
                            <a href="family-plan">Family Health Plan</a>
                        </div>
                    </div>
                    <div className={classes.MenuWrap}>
                        <div className={classes.MenuHead}>Services</div>
                        <div className={classes.MenuLink}>
                            <a href="nursing-attendant">Nursing/Attendant</a>
                            <a href="medicine-delivery">Medicine Delivery</a>
                        </div>
                    </div>
                    <div className={classes.MenuWrap}>
                        <div className={classes.MenuHead}>Media</div>
                        <div className={classes.MenuLink}>
                            <a href="#">News and Media</a>
                            <a href="#">Healthx Blog</a>
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    )
}

export default MainNav
