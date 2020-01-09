import React from "react";

import { buildSandCastle } from "../build-sandcastle";
import { groupIds } from "../get-sandcastles";
import { SimpleCheckbox } from "../../components";

const sandCastleId = "check-list";

const tasks = [
  "Build a first sandcastle",
  "Buy milk",
  "Learn React",
  "Go to the gym",
  "Train hard",
  "Learn 1000 English words"
];

const CheckList = () => {
  return (
    <>
      {tasks.map(task => (
        <div className="checklist">
          <SimpleCheckbox label={task} />
        </div>
      ))}
    </>
  );
};

export const checkListSandcastle = () =>
  buildSandCastle(
    { id: sandCastleId, component: CheckList },
    { groupId: groupIds.inputGroup, itemTitle: "Check List" }
  );
