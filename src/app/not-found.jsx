import Link from "next/link";

import {UISection} from "../shared/ui/section";

export default function NotFound() {
    return (
        <UISection defaultClass='not-found'>
            <div>
                <p>Мы старались, но так и не нашли запрашиваемую вами страницу. Загляните позже, может быть мы ее найдем.</p>
                <p>А пока предлагаем вам перейти на <Link href='/'>главную страницу сайта</Link>. Эту страницу мы пока не потеряли.</p>
            </div>
        </UISection>
    )
}
