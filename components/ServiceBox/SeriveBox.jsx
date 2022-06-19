import Image from 'next/image'
import React from 'react'
import service from '../../assets/service/service.png'
import classes from './ServiceBox.module.css'

export default function SeriveBox() {
    return (
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
    )
}
