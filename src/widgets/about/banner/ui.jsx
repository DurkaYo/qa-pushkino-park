'use client';


import styles from './styles.module.scss';



import {SingleBanner} from "../../../shared/single-banner";


export function AboutBanner({imgDesk,imgMob ,alt}) {


    return (
        <SingleBanner imgDesk={imgDesk} imgMob={imgMob} alt={alt}/>
    )
}
