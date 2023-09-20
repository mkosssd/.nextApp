import NewMeetupForm from "@/components/meetups/NewMeetupForm"

function newMeetupPage(){
    function addMeetupHandler(enteredData){
        console.log(enteredData);
    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}
export default newMeetupPage