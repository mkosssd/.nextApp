import MeetupDetails from "@/components/meetups/MeetupDetails";
import { MongoClient } from "mongodb";
function MeetupDetail({ meetupData }) {
	console.log(meetupData);
	return (
		<>
			<MeetupDetails
				image={meetupData.image}
				title={meetupData.title}
				desc={meetupData.desc}
				address={meetupData.address}
			></MeetupDetails>
		</>
	);
}
export async function getStaticPaths(props) {
	return {
		fallback: false,
		paths: props.meetups.map((meetup) => ({
			params: { meetupId: meetup._id.toString() },
		})),
	};
}
export async function getStaticProps(context) {
	const meetupId = context.params.meetupId;
	const client = await MongoClient.connect(
		"mongodb+srv://fools:mkos9090@cluster0.t9bcr7s.mongodb.net/meetups?retryWrites=true&w=majority"
	);
	const db = client.db();
	const meetupCollection =
		db.collection("meetups");
	const selectedMeetup = await meetupCollection
		.findOne({ _id: meetupId })
		.toArray();
	client.close();
	console.log(meetupId);
	return {
		props: {
			meetupData: selectedMeetup
		},
	};
}
export default MeetupDetail;
