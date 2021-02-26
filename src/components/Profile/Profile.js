import React from "react";
import PropTypes from "prop-types";
import s from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  console.log(name, tag, location, avatar, stats);
  const { followers, views, likes } = stats;
  return (
    <>
      <h2>Profile</h2>
      <div className={s.profile}>
        <div className={s.description}>
          <img src={avatar} alt={name} width="300" className="avatar" />
          <p className={s.name}>{name}</p>
          <p className={s.tag}>{tag}</p>
          <p className={s.location}>{location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">{followers}</span>
            <span className="quantity">{1000}</span>
          </li>
          <li>
            <span className="label">{views}</span>
            <span className="quantity">2000</span>
          </li>
          <li>
            <span className="label">{likes}</span>
            <span className="quantity">3000</span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Profile;

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
