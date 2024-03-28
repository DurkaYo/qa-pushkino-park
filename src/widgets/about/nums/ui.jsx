'use client';



import styles from './styles.module.scss';


import {UISection} from "../../../shared/ui/section";
import {NUM_ARR} from "./config";


export function AboutNums() {


    return (
        <UISection >

          <div className={styles['about__grid']}>
              {NUM_ARR.map((item, index) => (

                  <div key={index} className={styles['about__item']}>
                  <div className={styles['about__text']}>{item.title}</div>
                  <div className={styles['about__num']}>{item.num}<span dangerouslySetInnerHTML={{ __html: item.sm }}/></div>

                  </div>
              ))}



        </div>



        </UISection>
    )
}
