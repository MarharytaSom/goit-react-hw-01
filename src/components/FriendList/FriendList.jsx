import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);


const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.friendItem}>
    <img src={avatar} alt="Avatar" width="48" className={styles.avatar} />
    <p className={styles.name}>{name}</p>
    <p className={isOnline ? styles.online : styles.offline}>
      {isOnline ? 'Online' : 'Offline'}
    </p>
  </div>
);
export default FriendList;
