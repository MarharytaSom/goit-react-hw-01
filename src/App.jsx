import Profile from './components/Profile/Profile';
import userData from './db/userData.json'
import FriendList from './components/FriendList/FriendList'
import friends from './db/friends.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import transaction from './db/transaction.json'



const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
          />
          <FriendList friends={friends} />
          <TransactionHistory items={transaction} />
    </>
  );
};

export default App;


