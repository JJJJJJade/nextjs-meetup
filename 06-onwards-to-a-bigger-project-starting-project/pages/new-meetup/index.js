import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Layout from "../../components/layout/Layout";
import {useRouter} from "next/router";
import Head from "next/head";
import {useEffect, useState, Fragment} from "react";

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

    return <Fragment>
        <Head>
            <title>Add a New Meetup</title>
            <meta name='description'
                  content='Add your own meetups and create amazing networking opportunity'/>
        </Head>
        <Layout>
            <NewMeetupForm onAddMeetup={addMeetUpHandler} />
        </Layout>
    </Fragment>
}

export default NewMeetUpPage