import {useParams, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import React, { useState } from 'react';

function BookSlot(props){
    const { id } = useParams(); 
    const history = useHistory();
    const [user, setUser] = useState({...props.timeSlots[id].user || {}})

    const bookSlot =()=> {
      const payload  = {id:id,slot:{...props.timeSlots[id], status:"booked", user:user}}
      console.log(payload)
      props.bookSlot(payload)
      history.push('/')
    }


    return(
        <div className="bookSlot">
            <input type="text" name="firstname" onChange={(e)=>setUser({...user,firstName : e.target.value})} value={user.firstName || ""} placeholder="First Name"/>
            <input type="text" name="lastname" onChange={(e)=>setUser({...user,lastname: e.target.value})}  value={user.lastname || ""} placeholder="Last Name"/>
            <input type="text" name="phonenumber" onChange={(e)=>setUser({...user,phoneNumber: e.target.value})}  value={user.phoneNumber || ""} placeholder="Phone Number"/>
            <div className="controls">
              <button className="cancel" onClick={()=>{}}>Cancel</button>
              <button className="save" onClick={()=>{bookSlot()}}>Save</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
      timeSlots:state.timeSlots
    }
  }

const mapDispatchToProps = (dispatch) =>{
  return{
    bookSlot:(payload)=>{dispatch({'type':'BOOK_SLOT', payload:payload})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookSlot)