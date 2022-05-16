import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Layout from "../../components/layout/Layout";


const NewMeetUpPage = () => {

    const addMeetUpHandler = (data) => {
        console.log(data)
    }

    return  <Layout>
        <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </Layout>
}

export default NewMeetUpPage