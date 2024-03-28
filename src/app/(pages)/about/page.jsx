import {BreadCrumbs} from "../../../widgets/bread-crumbs";
import {AboutTitle} from "../../../widgets/about/title";
import {AboutPresentation} from "../../../widgets/about/presentation";
import {AboutBanner} from "../../../widgets/about/banner";
import {AboutNums} from "../../../widgets/about/nums";
import {AboutBannerWithText} from "../../../widgets/about/banner-with-text";




const breadCrumbsLevels = [
    {
        levelName: 'Главная',
        levelLink: '/',
    },
    {
        levelName: 'О ТРЦ',
        levelLink: '',
    },
]
export default function AboutPage() {
    return (


            <main className={'about'}>
                <BreadCrumbs levels={breadCrumbsLevels}/>
                <AboutTitle/>
                <AboutPresentation/>
                <AboutBanner imgDesk='/images/temp_dev/about/banner.jpg' alt='banner.jpg'/>
                <AboutNums/>
                <AboutBannerWithText
                    title='Комфорт и релакс'
                    desc='Уютное оформление галерей и притягательные островки для селфи'
                    bannerSide='right'
                    imgDesk='/images/temp_dev/about/banner.jpg' alt='banner.jpg'
                />
                <AboutBannerWithText
                    title='«Киномакс-Релакс»'
                    desc='Самый большой 6-зальный кинотеатр в городе «Киномакс-Релакс»'
                    bannerSide='left'
                    imgDesk='/images/temp_dev/about/banner.jpg' alt='banner.jpg'
                />
                <AboutBannerWithText
                    title='Обширный выбор развлечений'
                    desc='Игровые комнаты и представления по выходным'
                    bannerSide='right'
                    imgDesk='/images/temp_dev/about/banner.jpg' alt='banner.jpg'
                />
                <AboutBanner imgDesk='/images/temp_dev/about/banner.jpg' alt='banner.jpg'/>
            </main>


    );
}