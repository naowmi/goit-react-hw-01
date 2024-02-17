import clsx from "clsx";
import css  from "./FriendListItem.module.css";
export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    const IsOnlineClass = clsx(
        css.status,
        isOnline ? css.statusOnline : css.statusOffline
    )
return (
    <div>
 <img className={css.avatar} src={ avatar } alt={ name } width="72" />
  <p className={css.name}>{ name }</p>
        <p className={IsOnlineClass}>{isOnline ? "Online" : "Offline"}</p>
</div>
)
}
