import { Fragment } from "react"

import s from 'components/FriendList/Friend.module.css'

export const Friend = ({isOnline, avatar, name }) => {
    return (
      <Fragment>
        <span className={isOnline ? s.statusOn:s.statusOff}></span>
        <span className={s.status}>{isOnline}</span>
        <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </Fragment>
    
   )
}