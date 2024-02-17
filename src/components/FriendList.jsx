import { FriendListItem } from "./FriendListItem";
import css from "./FriendList.module.css"
export const FriendList = ({ friends }) => {
    return (
        <ul className={css.box}>
            {friends.map((friend) => {
                return <li key={ friend.id } className={css.card}><FriendListItem friend={friend}/></li>
            }) }
</ul>
    )
}