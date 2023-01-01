import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useReducer, useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { Auth, UserInfo } from '../context/allContext'
import { authState, authReducer } from '../context/reducer/authReducer'
import { userState, userReducer } from '../context/reducer/userReducer'
import '../styles/globals.css'

//
config.autoAddCss = false

const tagManagerArgs = {
    id: 'GTM-W5K5PF8',
}

function MyApp({ Component, pageProps }) {
    const [stateAuth, dispatchAuth] = useReducer(authReducer, authState)
    const [stateUser, dispatchUser] = useReducer(userReducer, userState)

    const router = useRouter()

    useEffect(() => {
        import('react-facebook-pixel')
            .then((x) => x.default)
            .then((ReactPixel) => {
                ReactPixel.init('923904104843326') // facebookPixelId
                ReactPixel.pageView()

                router.events.on('routeChangeComplete', () => {
                    ReactPixel.pageView()
                })
            })
    }, [router.events])

    useEffect(() => {
        TagManager.initialize(tagManagerArgs)
    }, [])

    return (
        <>
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=UA-252658937-1"></Script>
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                     window.dataLayer = window.dataLayer || [];
                     function gtag(){dataLayer.push(arguments);}
                     gtag('js', new Date());
                     gtag('config', 'UA-252658937-1', {
                     page_path: window.location.pathname,
                    });
                    `,
                }}
            />
            <Auth.Provider value={{ stateAuth, dispatchAuth }}>
                <UserInfo.Provider value={{ stateUser, dispatchUser }}>
                    <Component {...pageProps} />
                </UserInfo.Provider>
            </Auth.Provider>
        </>
    )
}

export default MyApp
