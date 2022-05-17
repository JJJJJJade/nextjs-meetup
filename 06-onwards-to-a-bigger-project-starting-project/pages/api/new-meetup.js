// don't create react component function
// define functions contains server side code
// because api routes only runs in server never on the client

// /api/new-meetup

import {MongoClient} from "mongodb";

const handler = async (req,res) => {
    // request method = find out which kind of request was sent
    // e.g. only post request will be processed
    if (req.method === 'POST') {
        const data = req.body
        console.log('post request received by api')
        // const {title, image, address, description} = data

        const client = await MongoClient.connect('mongodb+srv://JadeTest:passward@cluster0.mxpzd.mongodb.net/?retryWrites=true&w=majority')
        const db = client.db()

        //
        const meetupsCollection = db.collection('meetups')

        // in mongodb document is a js object
        // result is an object
        const result = await meetupsCollection.insertOne({data})
        // console.log(result)

        client.close()

        return res.status(201).json({message:'Meetup inserted'})
    }

}

export default handler