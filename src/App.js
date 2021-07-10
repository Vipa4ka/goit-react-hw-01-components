import React from "react";

import Profile from "./components/ProfileSocial/ProfileList";
import user from "./components/ProfileSocial/user.json";

import statisticalData from "./components/statistics/statistical-data.json";
import Statistics from "./components/statistics/Statistics";

import friends from "./components/FriendList/friends.json";
import FriendList from "./components/FriendList/FriendList";

import TransactionHistory from "./components/transaction-history/TransactionHistory";
import transactions from "./components/transaction-history/transactions.json";

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        //  stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};

export default App;
