import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useState, useContext } from 'react'
import hx from '../../../assets/img/hx-blue-fit.png'
import pic from '../../../assets/user/placeholder.jpg'
import { Auth, UserInfo } from '../../../context/allContext'
import classes from './MainNav.module.css'

const MainNav = () => {
    const [show, setShow] = useState(false)
    const { stateAuth, dispatchAuth } = useContext(Auth)
    const { dispatchUser } = useContext(UserInfo)

    const logout = (e) => {
        e.preventDefault()
        dispatchUser({ type: 'remove' })
        dispatchAuth({ type: 'remove' })
    }

    return (
        <div className={classes.MainNav}>
            <div className={classes.Wrapper}>
                <div className={classes.left}>
                    <a className={classes.SiteLogo} href="/">
                        <Image src={hx} height={36} width={146} alt="" />
                    </a>
                    <div className={classes.center}>
                        <div className={classes.MenuWrap}>
                            <div className={classes.MenuHead}>
                                <a href="find-doctors">Find Doctor</a>
                            </div>
                        </div>
                        <div className={classes.MenuWrap}>
                            <div className={classes.MenuHead}>
                                <a href="medicine-delivery">Order Medicine</a>
                            </div>
                        </div>
                        {/* <div className={classes.MenuWrap}>
                            <div className={classes.MenuHead}>Lab Test</div>
                        </div> */}
                        <div className={classes.MenuWrap}>
                            <div className={classes.MenuHead}>
                                Nursing & Attendant
                                <div>
                                    <span> &lt;</span>
                                </div>
                            </div>
                            <div className={classes.MenuLink}>
                                <a href="nursing-attendant">Home Nursing</a>
                                <a href="nursing-attendant">Nursing/Attendant</a>
                            </div>
                        </div>
                        <div className={classes.MenuWrap}>
                            <div className={classes.MenuHead}>
                                Health Plan
                                <div>
                                    <span> &lt;</span>
                                </div>
                            </div>
                            <div className={classes.MenuLink}>
                                <a href="my-plan">My Health Plan</a>
                                <a href="family-plan">Family Health Plan</a>
                            </div>
                        </div>
                        {/* <div className={classes.MenuWrap}>
                            <div className={classes.MenuHead}>Health Package</div>
                        </div> */}
                        <div className={classes.MenuWrap}>
                            <div className={classes.MenuHead}>
                                Solutions
                                <div>
                                    <span> &lt;</span>
                                </div>
                            </div>
                            <div className={classes.MenuLink}>
                                <a href="https://user.healthxbd.com">For Patient</a>
                                <a href="https://doc.healthxbd.com">For Doctor</a>
                                <a href="https://pharmacy.healthxbd.com">For Pharmacy</a>
                                <a href="https://clinic.healthxbd.com">For Clinic</a>
                            </div>
                        </div>

                        {/* <div className={classes.MenuWrap}>
                            <div className={classes.MenuHead}>Services</div>
                            <div className={classes.MenuLink}>
                                <a href="nursing-attendant">Nursing/Attendant</a>
                                <a href="medicine-delivery">Medicine Delivery</a>
                            </div>
                        </div>
                        <div className={classes.MenuWrap}>
                            <div className={classes.MenuHead}>Media</div>
                            <div className={classes.MenuLink}>
                                <a href="#">Health Blog</a>
                                <a href="#">News</a>
                            </div>
                        </div> */}
                    </div>
                </div>

                {stateAuth?.auth == true ? (
                    <div className={classes.right}>
                        <div className={classes.MenuWrap}>
                            <div className={classes.MenuSignin} onClick={(e) => logout(e)}>
                                Logout
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={classes.right}>
                        <div className={classes.MenuWrap}>
                            <div className={classes.MenuSignin}>Sign in</div>
                            <div className={classes.SigninLink}>
                                <a href="https://doc.healthxbd.com">Smart Doctor</a>
                                <a href="https://user.healthxbd.com">My Health Portal</a>
                            </div>
                        </div>
                        <div className={classes.topNav}>
                            <a href="about-us">About</a>
                            <a href="/">Contact</a>
                            <a href="https://blog.healthxbd.com">Blog</a>
                            <a href="https://blog.healthxbd.com">News</a>
                        </div>
                    </div>
                )}

                {/* *****************************Toggle for mobile ****************** */}
                <div className={classes.toggleBar}>
                    <FontAwesomeIcon className={classes.icon} icon={faBars} />
                    <div className={classes.sidebar}>
                        <div className={classes.option}>
                            <p>Sign in</p>
                            <div className={classes.value}>
                                <p>
                                    <a href="https://doc.healthxbd.com">Smart Doctor</a>
                                </p>
                                <p>
                                    <a href="https://user.healthxbd.com">My Health Portal</a>
                                </p>
                            </div>
                        </div>

                        <div className={classes.option}>
                            <p>Find Doctors</p>
                            <div className={classes.value}>
                                <p>
                                    <a href="find-doctors">Find Doctors</a>
                                </p>
                            </div>
                        </div>

                        <div className={classes.option}>
                            <p>Medicine Order</p>
                            <div className={classes.value}>
                                <p>
                                    <a href="medicine-delivery">Medicine Delivery</a>
                                </p>
                            </div>
                        </div>

                        <div className={classes.option}>
                            <p>Nursing & Attendant</p>
                            <div className={classes.value}>
                                <p>
                                    <a href="nursing-attendant">Nursing/Attendant</a>
                                </p>
                                <p>
                                    <a href="medicine-delivery">Medicine Delivery</a>
                                </p>
                            </div>
                        </div>

                        <div className={classes.option}>
                            <p>Health Plans</p>
                            <div className={classes.value}>
                                <p>
                                    <a href="my-plan">My Health Plan</a>
                                </p>
                                <p>
                                    <a href="family-plan">Family Health Plan</a>
                                </p>
                            </div>
                        </div>

                        <div className={classes.option}>
                            <p>Solutions</p>
                            <div className={classes.value}>
                                <p>
                                    <a href="https://user.healthxbd.com">For Patient</a>
                                </p>
                                <p>
                                    <a href="https://doc.healthxbd.com">For Doctor</a>
                                </p>
                                <p>
                                    <a href="https://pharmacy.healthxbd.com">For Pharmacy</a>
                                </p>
                            </div>
                        </div>

                        <div className={classes.option}>
                            <p>Blogs</p>
                            <div className={classes.value}>
                                <p>
                                    <a href="https://blog.healthxbd.com">Healthx Blogs</a>
                                </p>
                            </div>
                        </div>

                        <div className={classes.option}>
                            <p>About</p>
                            <div className={classes.value}>
                                <p>
                                    <a href="about-us">About Us</a>
                                </p>
                            </div>
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
