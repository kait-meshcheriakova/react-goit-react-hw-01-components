import css from './FriendListItem.module.css'
export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
 <li className={`${css.item} ${isOnline ? css.online : css.offline}`}>
      <span className={`${css.status} ${isOnline ? css.online : ''}`}></span>
      <img
        className={css.avatar}
        src={avatar}
        alt={name}
        width="48"
        
      />
      <p className="name">{name}</p>
    </li>
    );
}