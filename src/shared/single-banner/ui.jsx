import {UISection} from "../ui/section";
import styles from './styles.module.scss';

export function SingleBanner({imgDesk,imgMob = imgDesk,alt='default img'}) {
    return (
        <UISection defaultClass={styles['single-banner']}>

            <div className={styles['single-banner__image']}>
                <picture>
                    <source srcSet={imgMob} media="(max-width:375px)"/>
                    <img src={imgDesk} alt={alt}/>
                </picture>
            </div>
        </UISection>
    )
}
