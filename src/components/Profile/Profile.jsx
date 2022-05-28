import PropTypes from 'prop-types'

import s from 'components/Profile/Profile.module.css'



export const Profile = ({avatar, username, tag, location, stats:{ followers, views, likes} }) => {
 

 return (<div className={s.profile}>
       <img
        src={avatar}
      alt="User avatar"
        className={s.avatar}
    />
      <p className={s.username}>{username}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
 
    <ul className={s.stats}>
      <li className={s.item}>
      <span className={s.label}>Followers</span>
        <span className={s.quantity}>{followers}</span>
    </li>
      <li className={s.item}>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{views}</span>
    </li>
      <li className={s.item}>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{likes}</span>
    </li>
  </ul>
</div>)
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number
};

