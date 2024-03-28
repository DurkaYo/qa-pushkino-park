import {UISection} from "../../../shared/ui/section";
import {NewsAndEventsListTile} from "../../../entities/news-and-events-tile";

import styles from './styles.module.scss';

export function NewsAndEventsList() {
    return (
        <UISection defaultClass={styles['news-events-list']}>
            <div className={styles['news-events-list__tiles']}>
                {
                    [...Array(9)].map((_, index) => <NewsAndEventsListTile key={index} />)
                }
            </div>

            <button className={`${styles['news-events-list__button']} btn`}>Показать еще</button>
        </UISection>
    )
}
