import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';
import friend from 'components/FriendList/friends.json';
import transactionData from 'components/TransactionHistory/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics lengthStat={data.length} stat={data} />
      <FriendList friendData={friend} />
      <TransactionHistory transactionData={transactionData} />
    </div>
  );
}
