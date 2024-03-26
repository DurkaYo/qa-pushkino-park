import {UISection} from "../../../shared/ui/section";

import styles from './styles.module.scss';

export function SingleStockBanner() {
    return (
        <UISection defaultClass={styles['single-stock-banner']}>
            <div className={styles['single-stock-banner__image']}>
                <img src="/images/temp_dev/single-renter/main-banner.jpg" alt=""/>
            </div>
        </UISection>
    )
}
