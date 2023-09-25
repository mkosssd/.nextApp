import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
const DUMMY_EVENT = [
	{
		id: "m1",
		title: "The first meetup",
		image:
			"https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg",
		address: "SOME STREET @# SSD <E",
		description: "THe first meetup",
	},
	{
		id: "m2",
		title: "The Second meetup",
		image:
			"https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg",
		address: "SOME STREET @# SSD <E",
		description: "THe second meetup",
	},
];
function HomePage(props) {
  console.log(props);
	//  const [loadedMeetups,setLoadedMeetups]= useState([])
	//   useEffect(()=>{
	//     setLoadedMeetups(DUMMY_EVENT)
	//   },[])
	return <MeetupList meetups={props.meetups} />;
}
export async function getStaticProps() {
	const client = await MongoClient.connect(
		"mongodb+srv://fools:mkos9090@cluster0.t9bcr7s.mongodb.net/meetups?retryWrites=true&w=majority"
	);
	const db = client.db();
	const meetupCollection =
		db.collection("meetups");
	const meetups = await meetupCollection
		.find()
		.toArray();
	client.close();
	console.log(meetups);
	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.data.title,
				address: meetup.data.address,
				image: meetup.data.image,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 10,
	};
}
export default HomePage;
