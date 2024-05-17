import React, { useState } from "react";
import { store } from "../redux/store";
import Bug from "../model/bug";
import BugCard from "./BugCard";

const Dashboard = () => {
  const [bugs, setBugs] = useState(store.getState());

  store.subscribe(() => {
    setBugs(store.getState());
    console.log("Dashboard updated");
  });

  return (
    <ul>
      {bugs.length === 0 ? (
        <h3>No bugs yet</h3>
      ) : (
        bugs.map((b) => <BugCard {...b} />)
      )}
    </ul>
  );
};

export default Dashboard;
