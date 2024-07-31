import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

export default FriendList;
