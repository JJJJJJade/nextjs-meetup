import {Fragment} from "react";
import MeetUpDetail from "../../components/meetups/MeetUpDetail";
import Layout from "../../components/layout/Layout";

const MeetUpDetails = () => {

    return <Layout>
        <MeetUpDetail
        image='https://media.istockphoto.com/photos/university-campus-picture-id482096102?k=20&m=482096102&s=612x612&w=0&h=BCuLr_1kGtCmbicozFLVK_GHdt7NXmSW7XybZt0Qi8o='
        title='A First Meetup' address='some place' description='some details'>
        </MeetUpDetail>
    </Layout>
}

export const getStaticProps = async (context) => {
    const meetupId = context.params.meetupId

    console.log(meetupId)

    return{
        props:{
            meetupData:{
                id:meetupId,
                title: 'A First Meetup',
                image: 'https://media.istockphoto.com/photos/university-campus-picture-id482096102?k=20&m=482096102&s=612x612&w=0&h=BCuLr_1kGtCmbicozFLVK_GHdt7NXmSW7XybZt0Qi8o=',
                address: 'university boulevard, vancouver, BC, Canada',
                description: 'the university of british columbia'
            }
        }
    }
}

export async function getStaticPaths() {
    //
    return {
        fallback: false,
        paths: [
            {
                params:{
                    meetupId:'m1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}

export default MeetUpDetails