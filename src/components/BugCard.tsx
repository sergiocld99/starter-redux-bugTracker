import React from "react";
import Bug from "../model/bug";
import SolvedBug from "./SolvedBug";
import UnsolvedBug from "./UnsolvedBug";

const BugCard = (b: Bug) => {
  return b.solved ? <SolvedBug {...b} /> : <UnsolvedBug {...b} />;
};

export default BugCard;
