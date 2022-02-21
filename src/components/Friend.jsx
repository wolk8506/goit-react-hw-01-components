import { Fragment } from "react"

export const Friend = (props) => {
    return (
      <Fragment>
        {props.isOnline?<span class="status" style={{color:"green", fontSize:48}}>*</span>:<span class="status" style={{color:"red", fontSize:48}}>*</span>}
        <span class="status">{props.isOnline}</span>
        <img class="avatar" src={props.avatar} alt="User avatar" width="48" />
        <p class="name">{props.name}</p>
      </Fragment>
    
   )
}