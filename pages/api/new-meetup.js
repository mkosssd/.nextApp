import { MongoClient,ServerApiVersion  } from "mongodb";
async function handler(req, res) {
    
	if (req.method === "POST") {
		const data = req.body;
		console.log(data);
		const client = await MongoClient.connect(
			"mongodb+srv://fools:mkos9090@cluster0.t9bcr7s.mongodb.net/meetups?retryWrites=true&w=majority"
		);
        const db = client.db()
        const meetupCollection = db.collection('meetups')
       const result =await meetupCollection.insertOne({data})
       console.log(result);
       client.close()
       res.status(201).json({message:'Meetup Inserted'})
	}
}
export default handler;
