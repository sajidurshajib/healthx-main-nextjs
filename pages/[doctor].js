import { useRouter } from 'next/router'
import React from 'react'
import { SingleDoctor } from '../components'

export default function doctor() {
    const routes = useRouter()
    const id = routes.query.doctor
    return (
        <div>
            <SingleDoctor id={id} />
        </div>
    )
}
