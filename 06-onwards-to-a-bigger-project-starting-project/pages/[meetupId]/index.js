import {Fragment} from "react";
import MeetUpDetail from "../../components/meetups/MeetUpDetail";

const MeetUpDetails = () => {

    // return <Fragment>
    //     <img
    //         src='https://media.istockphoto.com/photos/university-campus-picture-id482096102?k=20&m=482096102&s=612x612&w=0&h=BCuLr_1kGtCmbicozFLVK_GHdt7NXmSW7XybZt0Qi8o='
    //         alt="A First Meetup"/>
    //     <h1>A First Meetup</h1>
    //     <address>Some Street</address>
    //     <p>The meetup description</p>
    // </Fragment>

    return <MeetUpDetail
        image='https://media.istockphoto.com/photos/university-campus-picture-id482096102?k=20&m=482096102&s=612x612&w=0&h=BCuLr_1kGtCmbicozFLVK_GHdt7NXmSW7XybZt0Qi8o='
        title='A First Meetup' address='some place' description='some details'>

    </MeetUpDetail>
}

export default MeetUpDetails