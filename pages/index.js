import MeetupList from "@/components/meetups/MeetupList"

const DUMMY_EVENT = [
  {
    id: 'm1',
    title: 'The first meetup',
    image: 'https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg',
    address: 'SOME STREET @# SSD <E',
    description: 'THe first meetup'
  },
  {
    id: 'm2',
    title: 'The Second meetup',
    image: 'https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg',
    address: 'SOME STREET @# SSD <E',
    description: 'THe second meetup'
  },
]
function HomePage () {
  return <MeetupList meetups={DUMMY_EVENT}/ >
}
export default HomePage
