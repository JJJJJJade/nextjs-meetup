import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import {useEffect, useState} from "react";


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

const HomePage = (props) => {

    // no longer need because using getStaticProps
    // const [loadedMeetups, setLoadedMeetups] = useState([]);
    //
    // useEffect(()=>{
    //     // send a http request and fetch data
    //     setLoadedMeetups(DUMMY_MEETUPS)
    // },[])

    return <Layout>
        <MeetupList meetups={props.meetups}>

    </MeetupList>
    </Layout>
}

export async function getStaticProps(context) {
    // fetch data from an API



    return {
        props:{
            meetups:DUMMY_MEETUPS
        },
        // 10 = number of seconds that NextJS will wait until it regenerates this page
        //      for an incoming request.
        //    = this page will not just be generated during the build process
        //      but also be generated every couple of seconds
        revalidate: 10
    }
}

// export async function getServerSideProps(context) {
//
//     const req = context.req
//     const res = context.res
//
//     // fetch data from an API
//     return {
//         props: DUMMY_MEETUPS
//     }
// }

export default HomePage