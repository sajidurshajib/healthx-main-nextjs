import { faArrowRight, faHandSparkles, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState, useContext } from 'react'
import { Auth, UserInfo } from '../../context/allContext'
import { statusCheck } from '../../utils/statusCheck'
import classes from './Login.module.css'

export default function Login({ setPopup }) {
    const { stateAuth, dispatchAuth } = useContext(Auth)
    const { dispatchUser } = useContext(UserInfo)

    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')

    const [alert, setAlert] = useState([])
    const api = process.env.NEXT_PUBLIC_API_URL
    const router = useRouter()

    const submit = async (e) => {
        e.preventDefault()

        let loginFetch = await fetch(`${api}/login`, {
            headers: {
                Accept: 'appllication/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                identifier,
                password,
            }),
        })

        let loginJson = await loginFetch.json()

        if (!loginFetch.ok) {
            let err = statusCheck(loginFetch, [
                { sts: 400, msg: 'User email/phone number or Password not correct.' },
                { sts: 404, msg: 'User email/phone number or Password not correct.' },
                { sts: 422, msg: 'Unprocessable Entity | Please check your email/phone number' },
            ])
            setAlert([...alert, err.msg])
            dispatchAuth({ type: 'remove' })
        } else {
            dispatchAuth({ type: 'token', payload: loginJson.access_token })

            let authFunc = async () => {
                let authFetch = await fetch(`${api}/patients/auth`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${loginJson.access_token}`,
                    },
                })

                let authJson = await authFetch.json()

                if (authFetch.ok) {
                    dispatchAuth({ type: 'auth', payload: loginJson.access_token })
                    dispatchUser({ type: 'set', payload: authJson })
                } else {
                    dispatchAuth({ type: 'remove' })
                    dispatchUser({ type: 'remove' })
                }
            }
            try {
                authFunc()
            } catch (e) {
                dispatchAuth({ type: 'remove' })
                dispatchUser({ type: 'remove' })
            }
        }
    }

    useEffect(() => {
        if (stateAuth.auth === true) {
            setPopup(false)
        }
    }, [stateAuth])

    return (
        <div className={classes.Login}>
            <div className={classes.overlay} onClick={() => setPopup(false)}></div>
            {
                <>
                    {alert.length !== 0 ? (
                        <p className={classes.statusMsg}>
                            {alert[alert.length - 1]} <span onClick={() => setAlert([])}>x</span>
                        </p>
                    ) : null}
                </>
            }

            <div className={classes.Wrapper}>
                <div className={classes.right}>
                    <div>
                        <h2>
                            <FontAwesomeIcon icon={faSignInAlt} />
                            Login
                        </h2>
                        <form onSubmit={submit}>
                            <div>
                                <input type="text" onChange={(e) => setIdentifier(e.target.value)} required />
                                <label>
                                    <span>Email or Phone number</span>
                                </label>
                            </div>

                            <div>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} required />
                                <label>
                                    <span>Password</span>
                                </label>
                            </div>

                            <button>Login</button>
                        </form>

                        <p className={classes.linkText}>
                            Don't have an account?{' '}
                            <Link href="/register">
                                <a>
                                    Register <FontAwesomeIcon icon={faArrowRight} />
                                </a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
