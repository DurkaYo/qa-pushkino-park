import Link from "next/link";
import {UISection} from "../../../shared/ui/section";

import styles from './styles.module.scss';

export function SinglePageHeader({data}) {
    return (
        <UISection defaultClass={styles['single-page-header']}>
            <div className={styles['single-page-header__wrapper']}>
                <div className={styles['single-page-header__description']}>
                    <h1 className={styles['single-page-header__heading']}>{data.heading}</h1>
                    {
                        data.date && <div className={styles['single-page-header__date']}>{data.date}</div>
                    }
                    {
                        data.location &&
                        <div className={styles['single-page-header__location']}>
                            <div className={styles['single-page-header__floor']}>{data.location.floor}</div>
                            <Link href={data.location.mapId} className={`${styles['single-page-header__link']} btn btn_transparent`}>Показать на карте</Link>
                        </div>
                    }
                    <div className={styles['single-page-header__text']}>{data.description}</div>
                </div>

                <div className={styles['single-page-header__right-side']}>
                    <div className={styles['single-page-header__banner']}>
                        <img src={data.image} alt=""/>
                        {
                            data.logo &&
                            <div className={styles['single-page-header__logo']}>
                                <img src={data.logo} alt=""/>
                            </div>
                        }
                    </div>
                    <div className={styles['single-page-header__links']}>
                        {
                        data.types && data.types.map((type, index) => <Link href='#!' key={index}>{type}</Link>)
                        }
                    </div>
                </div>
            </div>
        </UISection>
    )
}
