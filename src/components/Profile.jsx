import css from "./Profile.module.css"
export const Profile = ({ name, tag, location, image, stats: { followers, views, likes }}) => {
  return (
<div className={css.box}>
  <div>
        <img
       className={css.avatar}   
      src={image}
      alt="User avatar"
    />
        <p className={css.name}>{name}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

      <ul className={css.boxStats}>
        <li className={css.stats}>
          <span className={css.statsName}>Followers</span>
          <span className={css.statsData}>{followers}</span>
        </li>

        <li className={css.stats}>
          <span className={css.statsName}>Views</span>
          <span className={css.statsData}>{views}</span>
        </li>
        <li className={css.stats}>
          <span className={css.statsName}>Like</span>
          <span className={css.statsData}>{likes}</span>
        </li>
  </ul>
</div>
)}
