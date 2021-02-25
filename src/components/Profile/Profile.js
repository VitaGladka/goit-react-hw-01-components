import React from "react";
import propTypes from "prop-types";
import style from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  // console.log(name, tag, location, avatar, stats);
  const { followers, views, likes } = stats;
  return (
    <>
      <div calssName={style.profile}>
        <div calssName={style.description}>
          <img src={avatar} alt={name} width="300" calssName="avatar" />
          <p calssName={style.name}>{name}</p>
          <p calssName={style.tag}>{tag}</p>
          <p calssName={style.location}>{location}</p>
        </div>

        <ul calssName="stats">
          <li>
            <span calssName="label">{followers}</span>
            <span calssName="quantity">{1000}</span>
          </li>
          <li>
            <span calssName="label">{views}</span>
            <span calssName="quantity">2000</span>
          </li>
          <li>
            <span calssName="label">{likes}</span>
            <span calssName="quantity">3000</span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Profile;

Profile.propTypes = {
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.shape({
    followers: propTypes.string.isRequired,
    views: propTypes.string.isRequired,
    likes: propTypes.string.isRequired,
  }),
};
