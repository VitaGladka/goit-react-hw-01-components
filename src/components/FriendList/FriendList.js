import React from "react";
import PropTypes from "prop-types";
import s from "./FriendList.module.css";

const Friendlist = (avatar, name, isOnline, id) => {
  console.log(avatar, name, isOnline);

  return (
    <>
      <li className={s.item}>
        <span className={s.isOnline}></span>
        <img className={s.avatar} src={avatar} alt={name} width="48" />
        <p className={s.name}></p>
      </li>
    </>
  );
};
export default Friendlist;

Friendlist.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
