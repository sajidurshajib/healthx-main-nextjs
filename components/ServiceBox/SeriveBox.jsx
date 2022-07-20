import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'
import service from '../../assets/service/service.png'
import classes from './ServiceBox.module.css'

export default function SeriveBox() {
    // const api = 'http://127.0.0.1:8000/api/v1'
    // const [doctors, setDoctors] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(
    //                 `${api}/doctors/search/?district=dha&speciality=ent&name=ab&skip=0&limit=10`,
    //                 {
    //                     method: 'GET',
    //                     headers: {
    //                         Accept: 'application/json',
    //                         'Content-type': 'application/json',
    //                     },
    //                 }
    //             )
    //             const data = response.json()
    //             console.log('doctors: ', data)
    //             setDoctors(data)
    //         } catch {
    //             setDoctors([])
    //         }
    //         return fetchData()
    //     }
    // }, [api])
    // console.log('doc')

    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>Our Health Plans</div>
            <div className={classes.service}>
                <div className={classes.box}>
                    <div className={classes.wrap}>
                        <p className={classes.number}>01</p>
                        <div className={classes.icon}>
                            <Image src={service} height={140} width={140} alt="" />
                        </div>
                        <p className={classes.title}>Package 1</p>
                        <span>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, maxime rem dignissimos
                            veniam amet atque omnis ducimus error vitae.
                        </span>
                        <button>Discover More</button>
                    </div>
                </div>

                <div className={classes.box}>
                    <div className={classes.wrap}>
                        <p className={classes.number}>02</p>
                        <div className={classes.icon}>
                            <Image src={service} height={140} width={140} alt="" />
                        </div>
                        <p className={classes.title}>Package 2</p>
                        <span>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, maxime rem dignissimos
                            veniam amet atque omnis ducimus error vitae.
                        </span>
                        <button>Discover More</button>
                    </div>
                </div>

                <div className={classes.box}>
                    <div className={classes.wrap}>
                        <p className={classes.number}>03</p>
                        <div className={classes.icon}>
                            <Image src={service} height={140} width={140} alt="" />
                        </div>
                        <p className={classes.title}>Package 3</p>
                        <span>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, maxime rem dignissimos
                            veniam amet atque omnis ducimus error vitae.
                        </span>
                        <button>Discover More</button>
                    </div>
                </div>

                <div className={classes.box}>
                    <div className={classes.wrap}>
                        <p className={classes.number}>04</p>
                        <div className={classes.icon}>
                            <Image src={service} height={140} width={140} alt="" />
                        </div>
                        <p className={classes.title}>Package 4</p>
                        <span>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, maxime rem dignissimos
                            veniam amet atque omnis ducimus error vitae.
                        </span>
                        <button>Discover More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
