import styles from './styles.module.scss';

import {UISection} from "@/shared/ui/section";

export function MainPageBanners() {
    return (
        <UISection defaultClass={styles['banners']}>
            <div style={{padding: '30vh 0 5vh 0', fontSize: '1.8rem', background: 'green'}}>
                Main Page Banners
            </div>
        </UISection>
    )
}
