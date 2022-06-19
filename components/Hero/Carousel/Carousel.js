import Image from 'next/image'
import React, { useState } from 'react'
import bg1 from '../../../assets/bg/bg1.jpg'
import classes from './Carousel.module.css'
import { images } from './CarouselData'

function Carousel() {
    const [currentImg, setCurrentImg] = useState(0)

    return (
        <div className={classes.carousel}>
            <div className={classes.carouselInner}>
                <div
                    className={classes.left}
                    onClick={() => {
                        currentImg > 0 && setCurrentImg(currentImg - 1)
                    }}>
                    <label>&laquo;</label>
                </div>
                <div className={classes.bgImg}>
                    <Image src={images[currentImg].img} width={1880} height={740} alt="" />
                </div>

                <div className={classes.center}>
                    <h1>{images[currentImg].title}</h1>
                    <p>{images[currentImg].subtitle}</p>
                </div>
                <div
                    className={classes.right}
                    onClick={() => {
                        currentImg < images.length - 1 && setCurrentImg(currentImg + 1)
                    }}>
                    <label>&raquo;</label>
                </div>
            </div>
        </div>
    )
}

export default Carousel

// style={{ backgroundImage: `url(${images[currentImg].img})` }}
