import {UISection} from "../ui/section";
import {ButtonFull} from "../ui/buttons";

import styles from './styles.module.scss';

export function SingleBannerWithText({title='Правила акции',desc='Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований говорит о возможностях распределения внутренних резервов и ресурсов.',bannerSide,bannerAlign='top',imgDesk,imgMob = imgDesk,alt='default img', button = {}}) {

    return (
        <UISection defaultClass={styles['single-banner-with-text']}>
            <div className={styles['single-banner-with-text__wrapper']}>
                <div
                    className={`
                        ${styles['single-banner-with-text__banner']}
                        ${styles[`single-banner-with-text__banner_${bannerSide}`]}
                    `}>
                    <picture>
                        <source srcSet={imgMob} media="(max-width:375px)"/>
                        <img src={imgDesk} alt={alt}/>
                    </picture>

                </div>
                <div className={`${styles[`single-banner-with-text__description_${bannerAlign}`]}`}>
                    <div className={styles['single-banner-with-text__heading']}>{title}</div>
                    <div className={styles['single-banner-with-text__text']}>{desc}</div>
                    {
                        Object.keys(button).length > 0 &&
                        <div className={styles['single-banner-with-text__button']}>
                            <ButtonFull>{button.text}</ButtonFull>
                        </div>
                    }
                </div>
            </div>
        </UISection>
    )
}
