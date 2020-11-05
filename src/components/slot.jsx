import {Link } from 'react-router-dom'
export default function Slot(props){
    return(
        <Link to={`/${props.index}`} >
           <span className={props.status === 'available' ? "slot slot-blue": "slot slot-red"}>{props.timeSlot}</span>
        </Link>
    )
}