import PropTypes from "prop-types";
import defaultImage from "./defaultFoto.png";
import styles from "./ProfileList.module.css";

const Profile = ({ avatar, name, tag, location, followers, views, likes }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>
          <b>{name}</b>
        </p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.stat}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>
            <b>{followers}</b>
          </span>
        </li>
        <li className={styles.stat}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>
            <b>{views}</b>
          </span>
        </li>
        <li className={styles.stat}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>
            <b>{likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
