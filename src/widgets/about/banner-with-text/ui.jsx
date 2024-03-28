'use client';


import styles from './styles.module.scss';



import {SingleBannerWithText} from "../../../shared/single-banner-with-text";



export function AboutBannerWithText({title,desc,bannerSide,imgDesk,imgMob ,alt}) {


    return (

    <SingleBannerWithText title={title} desc={desc} bannerSide={bannerSide} bannerAlign='center' imgDesk={imgDesk} imgMob={imgMob} alt={alt}/>
    )
}
