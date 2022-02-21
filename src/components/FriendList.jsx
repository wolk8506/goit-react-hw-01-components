import { Friend } from 'components/Friend';
import friend from 'friends.json';

export const FriendList = () => {
  return (
      <ul class="friend-list">
        {friend.map(item => (
          <li key={item.id}>
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

