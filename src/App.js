// import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile/Profile";
import Friendlist from "./components/FriendList/FriendList";
import Statistics from "./components/Statistics/Statistics";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import profileUsers from "./db/user.json";
import statisticalData from "./db/statistical-data.json";
import friends from "./db/friends.json";
import transactions from "./db/transactions.json";

const { name, tag, location, avatar, stats } = profileUsers;
// const { avatar, name, isOnline } = friends;

export default function App() {
  return (
    <div className="App">
      <h1>Homework №1</h1>
      <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics tittle="Upload stats" stats={statisticalData} />
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
