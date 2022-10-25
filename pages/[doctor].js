import { useRouter } from 'next/router'
import React from 'react'
import { MainNav, SingleDoctor } from '../components'

export default function doctor() {
    const routes = useRouter()
    const id = routes.query.doctor
    return (
        <div>
            <MainNav />
            <SingleDoctor id={id} />
        </div>
    )
}
