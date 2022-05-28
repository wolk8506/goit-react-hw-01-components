import { Friend } from 'components/FriendList/Friend';
import PropTypes from 'prop-types'

import s from 'components/FriendList/Friend.module.css'

export const FriendList = ({friendData}) => {
  return (
      <ul className={s.list}>
        {friendData.map(item => (
          <li key={item.id} className={s.item}>
            <Friend
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          </li>
        ))}
      </ul>
  )
}

FriendList.propTypes = {
  friendData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    }))
}