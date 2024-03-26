import {UISection} from "../../../shared/ui/section";

import styles from './styles.module.scss';

export function SingleStockHeader() {
    return (
        <UISection defaultClass={styles['stock-header']}>
            <div className={styles['stock-header__wrapper']}>
                <div className={styles['stock-header__description']}>
                    <h1 className={styles['stock-header__heading']}>Очень длинный заголовок</h1>
                    <div className={styles['stock-header__date']}>01 фев ‒ 01 мар</div>
                    <div className={styles['stock-header__text']}>
                        O’STIN – международный бренд, один из ключевых в российском fashion-рынке. Ключевую часть
                        коллекции составляет O’STIN Casual – базовый ассортимент на каждый день: стильная, удобная и
                        практичная одежда. Кроме того, есть премиальное направление, а также джинсовая, молодежная и
                        детская линии одежды.
                    </div>
                </div>

                <div className={styles['stock-header__right-side']}>
                    <div className={styles['stock-header__banner']}>
                        <img src="/images/temp_dev/single-renter/main-banner.jpg" alt=""/>
                        <div className={styles['stock-header__logo']}>
                            <img src="/images/temp_dev/single-renter/logo.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </UISection>
    )
}
