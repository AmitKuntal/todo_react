const getTimeArray=(startTime=9, endTime=17)=>{
    let result = []
    while(startTime <endTime){
        const key = {
            timeSlot:getSlot(startTime) +" - "+getSlot(startTime+1),
            status:"available"
        }
        result.push(key)
        startTime +=1;
    }
    localStorage.setItem("state", JSON.stringify(result));
    return result
}

function getSlot(time){
    return time<=12 ? time + ":00 AM": time-12+":00 PM"
}
const timeSlots = JSON.parse(localStorage.getItem("state")) || getTimeArray()

const iState = {
    timeSlots: timeSlots
} 

const reducer = (state = iState, action) =>{
    if(action.type === 'BOOK_SLOT'){
        let updateState = {...state};
        updateState.timeSlots[action.payload.id]=action.payload.slot
        console.log(updateState.timeSlots)
        localStorage.setItem("state", JSON.stringify(updateState.timeSlots));
        return updateState
    }

    return state

}

export default reducer;