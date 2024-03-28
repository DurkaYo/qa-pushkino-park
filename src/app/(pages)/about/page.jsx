import {BreadCrumbs} from "../../../widgets/bread-crumbs";
import {AboutTitle} from "../../../widgets/about/title";
import {AboutPresentation} from "../../../widgets/about/presentation";
import {AboutBanner} from "../../../widgets/about/banner";
import {AboutNums} from "../../../widgets/about/nums";





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
                <AboutBanner/>
                <AboutNums/>
            </main>


    );
}