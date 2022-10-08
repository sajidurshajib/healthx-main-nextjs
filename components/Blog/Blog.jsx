import { useState, useEffect } from 'react'
import BlockGrid from './BlockGrid/BlockGrid'

export default function Blog() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`https://blog.healthxbd.com/wp-json/wp/v2/posts`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'GET',
            })
            let data = await response.json()
            if (response.ok) {
                setPosts(data)
                console.log(data)
            } else {
                console.log('data not fetching')
            }
        }
        try {
            fetchData()
        } catch {
            setPosts([])
        }
    }, [])

    return (
        <div>
            <BlockGrid />
        </div>
    )
}
