import { useReducer } from 'react'
import { Auth, UserInfo } from '../context/allContext'
import { authState, authReducer } from '../context/reducer/authReducer'
import { userState, userReducer } from '../context/reducer/userReducer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    const [stateAuth, dispatchAuth] = useReducer(authReducer, authState)
    const [stateUser, dispatchUser] = useReducer(userReducer, userState)

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
