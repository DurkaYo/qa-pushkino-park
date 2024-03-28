import {UISection} from "../../../shared/ui/section";
import {SliderThreeTiles} from "../../../entities/slider-three-tiles";

import styles from './styles.module.scss';
import {STOCKS_SLIDES} from "../../../entities/single-stock/links-to-landigs/config"; // моковые данные

export function SingleEventOtherNewsAndEvents() {
    return (
        <>
            <style>{`
                .event-other-news-events .slider__title {
                    color: var(--color-black);
                }
            `}</style>

            <UISection
                defaultClass={`
                    ${styles['event-other-news-events']}
                    event-other-news-events
                `}>
                <div className={styles['event-other-news-events__heading']}>ДРугие новости И МЕРОПРИЯТИЯ</div>
                <SliderThreeTiles slides={STOCKS_SLIDES} />
            </UISection>
        </>
    )
}
