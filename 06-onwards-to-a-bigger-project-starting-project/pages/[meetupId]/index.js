import {Fragment} from "react";
import MeetUpDetail from "../../components/meetups/MeetUpDetail";
import Layout from "../../components/layout/Layout";
import {MongoClient, ObjectId} from "mongodb";

const MeetUpDetails = (props) => {

    return <Layout>
        {/*<MeetUpDetail*/}
        {/*image='https://media.istockphoto.com/photos/university-campus-picture-id482096102?k=20&m=482096102&s=612x612&w=0&h=BCuLr_1kGtCmbicozFLVK_GHdt7NXmSW7XybZt0Qi8o='*/}
        {/*title='A First Meetup' address='some place' description='some details'>*/}
        {/*</MeetUpDetail>*/}
        <MeetUpDetail image={props.image}
                      title={props.title}
                      address={props.address}
                      description={props.description}></MeetUpDetail>
    </Layout>
}

export const getStaticProps = async (context) => {
    const meetupId = new ObjectId(context.params.meetupId)
    //console.log(meetupId)
    //console.log('type of meetupid is', typeof meetupId)

    const client = await MongoClient.connect('mongodb+srv://JadeTest:passward@cluster0.mxpzd.mongodb.net/?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const selectedMeetup = await meetupsCollection.findOne({_id: meetupId})
    const data = JSON.parse(selectedMeetup.data)

    //console.log('get ', data)
    return {
        props: {
            // meetupData: selectedMeetup
            // meetupData:data
            image: data.image,
            title: data.title,
            address: data.address,
            description: data.description
        }
    }
}

export async function getStaticPaths() {
    //
    const client = await MongoClient.connect('mongodb+srv://JadeTest:passward@cluster0.mxpzd.mongodb.net/?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray()

    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: {meetupId: meetup._id.toString()}
        }))
    }
}

export default MeetUpDetails