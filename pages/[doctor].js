import { useRouter } from 'next/router'
import React from 'react'
import { Footer, MainNav, SingleDoctor } from '../components'

export default function doctor() {
    const routes = useRouter()
    const id = routes.query.doctor
    return (
        <div>
            <MainNav />
            <SingleDoctor id={id} />
            <Footer />
        </div>
    )
}
