import { useRouter } from 'next/router'
import { useReducer, useEffect } from 'react'
import { Auth, UserInfo } from '../context/allContext'
import { authState, authReducer } from '../context/reducer/authReducer'
import { userState, userReducer } from '../context/reducer/userReducer'
import '../styles/globals.css'

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

    return (
        <>
            <Auth.Provider value={{ stateAuth, dispatchAuth }}>
                <UserInfo.Provider value={{ stateUser, dispatchUser }}>
                    <Component {...pageProps} />
                </UserInfo.Provider>
            </Auth.Provider>
        </>
    )
}

export default MyApp
