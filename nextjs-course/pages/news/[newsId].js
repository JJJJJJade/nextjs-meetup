import {useRouter} from 'next/router'

// our-domain.com/news/something-important
const DetailPage = () => {
    const router = useRouter()

    router.query.newsId

    const newsId = router.query.newsId

    // send a request to the backend API
    // to fetch the news item with newsId

    return <h1>The Detail page, {newsId}</h1>
}

export default DetailPage