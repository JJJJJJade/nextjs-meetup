import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Layout from "../../components/layout/Layout";
import {useRouter} from "next/router";


const NewMeetUpPage = () => {
    const router = useRouter()

    const addMeetUpHandler = async (data) => {
        // console.log(data)
        const response = await fetch('/api/new-meetup',{
            method:'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-type':'application.json'
            }
        })

        const res = await response.json()
        // console.log(res)

        router.push('/')
    }

    return  <Layout>
        <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </Layout>
}

export default NewMeetUpPage