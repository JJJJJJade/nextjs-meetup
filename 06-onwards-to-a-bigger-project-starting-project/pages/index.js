import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

const HomePage = () => {

    const DUMMY_MEETUPS = [
        {
            id:1,
            title: 'A First Meetup',
            image: 'https://media.istockphoto.com/photos/university-campus-picture-id482096102?k=20&m=482096102&s=612x612&w=0&h=BCuLr_1kGtCmbicozFLVK_GHdt7NXmSW7XybZt0Qi8o=',
            address: 'university boulevard, vancouver, BC, Canada',
            description: 'the university of british columbia'
        },
        {
            id:2,
            title: 'A First Meetup',
            image: 'https://media.istockphoto.com/photos/university-campus-picture-id482096102?k=20&m=482096102&s=612x612&w=0&h=BCuLr_1kGtCmbicozFLVK_GHdt7NXmSW7XybZt0Qi8o=',
            address: 'university boulevard, vancouver, BC, Canada',
            description: 'the university of british columbia'
        }
    ]

    return <Layout>
        <MeetupList meetups={DUMMY_MEETUPS}>

    </MeetupList>
    </Layout>
}

export default HomePage