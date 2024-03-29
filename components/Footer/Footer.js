import { faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import logo from '../../assets/img/hx-white.png'
import classes from './Footer.module.css'

const Footer = () => {
    let hx = [
        { menu: 'About Us', link: '#' },
        { menu: 'Health Blog', link: '#' },
        { menu: 'News & Media', link: '#' },
        { menu: 'Contact Us', link: '#' },
    ]

    let ourFeatures = [
        // { menu: 'Health Plans', link: '#' },
        { menu: 'Telemedicine', link: '#' },
        { menu: 'Medicine Delivery', link: '#' },
        { menu: 'Sample Collection', link: '#' },
        { menu: 'Nursing & Attendant', link: '#' },
    ]

    let solutions = [
        { menu: 'My Health Portal', link: '#' },
        { menu: 'Smart Doctor', link: '#' },
        { menu: 'E-Prescription', link: '#' },
        { menu: 'Smart Pharmacy', link: '#' },
    ]

    let products = [
        { menu: 'My Health Plan', link: '#' },
        { menu: 'Family Health Plan', link: '#' },
        { menu: 'My Health Package', link: '#' },
        { menu: 'Family Health Package', link: '#' },
    ]

    // let forPharmacies = [
    //     { menu: 'Dashboard', link: '#' },
    //     { menu: 'Stock Management', link: '#' },
    //     { menu: 'Easily customizable', link: '#' },
    //     { menu: 'Buying and Selling reports', link: '#' },
    // ]

    return (
        <div>
            <footer className={classes.Footer}>
                <div className={classes.footerWrapper}>
                    <div className={classes.footerContact}>
                        <div className={classes.Phone}>
                            <>
                                <p>Give Us A Call</p>
                                <div className={classes.Shadow}>
                                    <p className={classes.Info}>
                                        <FontAwesomeIcon icon={faPhone} />
                                        <span>+88 01322658481</span>
                                    </p>
                                </div>
                            </>
                        </div>
                        <div className={classes.Email}>
                            <p>Email Us</p>
                            <div className={classes.Shadow}>
                                <p className={classes.Info}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <span>contact@healthx.com.bd</span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <p>Follow Us</p>
                            <div className={classes.Media}>
                                <a href="#" className={classes.Icon}>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="#" className={classes.Icon}>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                                <a href="#" className={classes.Icon}>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={classes.footerContent}>
                        <div className={classes.footerColumn}>
                            <div className={classes.Heading}>HEALTHx</div>
                            <div className={classes.Item}>
                                {hx.map((menu, index) => {
                                    return (
                                        <a href={menu.link} key={index}>
                                            &#10137; {menu.menu}
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                        <div className={classes.footerColumn}>
                            <div className={classes.Heading}>Our Services</div>
                            <div className={classes.Item}>
                                {ourFeatures.map((service, index) => {
                                    return (
                                        <a href={service.link} key={index}>
                                            &#10137; {service.menu}
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                        <div className={classes.footerColumn}>
                            <div className={classes.Heading}>Our Solutions</div>
                            <div className={classes.Item}>
                                {solutions.map((service, index) => {
                                    return (
                                        <a href={service.link} key={index}>
                                            &#10137; {service.menu}
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                        <div className={classes.footerColumn}>
                            <div className={classes.Heading}>Our Products</div>
                            <div className={classes.Item}>
                                {products.map((service, index) => {
                                    return (
                                        <a href={service.link} key={index}>
                                            &#10137; {service.menu}
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                        {/* <div className={classes.footerColumn}>
                            <div className={classes.Heading}>For Pharmacies</div>
                            <div className={classes.Item}>
                                {forPharmacies.map((service, index) => {
                                    return (
                                        <a href={service.link} key={index}>
                                            &#10137; {service.menu}
                                        </a>
                                    )
                                })}
                            </div>
                        </div> */}
                    </div>
                    <div className={classes.footerCopyright}>
                        <div className={classes.hlogo}>
                            <Image src={logo} height="170px" width="170px" alt="logo" />
                        </div>
                        <span>Copyright &#169; 2022, Healthx. All rights reserved.</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer
