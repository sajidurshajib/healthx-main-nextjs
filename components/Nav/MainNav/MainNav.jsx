import { useState, useEffect } from 'react'
import classes from './MainNav.module.css'

const MainNav = () => {
    const [nav, setNav] = useState('MainNav')

    const scrollEvent = () => {
        if (window.scrollY < 73) {
            return setNav('MainNav')
        } else if (window.scrollY > 70) {
            return setNav('MainNav2')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollEvent)
        return () => window.removeEventListener('scroll', scrollEvent)
    }, [])

    return (
        <div className={nav === 'MainNav' ? classes.MainNav : classes.MainNav2}>
            <div className={`${classes.Wrapper} ${'container'}`}>
                <div className={classes.left}>
                    <div className={classes.SiteLogo}>
                        <h2>HEALTHx</h2>
                    </div>
                </div>

                <div className={classes.center}>
                    <div className={classes.MenuWrap}>
                        <div className={classes.MenuHead}>About us</div>
                        <div className={classes.MenuLink}>
                            <a href="#">Mission and Vision</a>
                            <a href="#">Founders</a>
                            <a href="#">Team</a>
                        </div>
                    </div>
                    <div className={classes.MenuWrap}>
                        <div className={classes.MenuHead}>Service</div>
                        <div className={classes.MenuLink}>
                            <a href="#">Test 1</a>
                            <a href="#">Link 2 ipsum dolor</a>
                            <a href="#">Link 3 lorem</a>
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
                            <a href="#">Smart Doctor</a>
                            <a href="#">My Health Portal</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainNav
