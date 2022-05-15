import {Fragment} from "react";
import Link from "next/link";

// our-domain.com/news
const NewsPage = () => {
    return <Fragment>
        <h1>The News page</h1>

        <ul>
            <li>
                <a href="/news/nextjs-is-a-great-framework">
                    NextJS Is A Great Framework
                </a>
            </li>
            <li>
                <Link href="news/something-else">
                    Something Else
                </Link>
            </li>
        </ul>

    </Fragment>


}

export default NewsPage