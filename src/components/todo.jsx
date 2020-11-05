import Slot from './slot';
import {connect} from 'react-redux';

function Todo(props){
  console.log(props)
    return(
        <>
           {props.timeSlots.map((slot, index)=>{
              return <Slot timeSlot= {slot.timeSlot} status={slot.status}  key={index} index={index}/>
           })}
        </>
    )
}

const mapStateToProps = (state)=>{
    return{
      timeSlots:state.timeSlots
    }
  }
  export default connect(mapStateToProps)(Todo);

