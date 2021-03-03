import React from "react";
import PropTypes from "prop-types";
import s from "./FriendList.module.css";
import FriendItem from "./FriendItem";

const Friendlist = ({ friends }) => {
  return (
    <>
      <ul className={s.friendList}>
        {friends.map((friend) => {
          return <FriendItem key={friend.id} name={friend.name} avatar={friend.avatar} isOnline={friend.isOnline} />;
        })}
      </ul>
    </>
  );
};
export default Friendlist;

Friendlist.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
