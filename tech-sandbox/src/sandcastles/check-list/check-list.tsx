import React from "react";

import { buildSandCastle } from "../build-sandcastle";
import { groupIds } from "../get-sandcastles";

const sandCastleId = "check-list";

const CheckList = () => {
  return (
    <div className='checklist'>
      <label style={{display: 'block'}}><input type="checkbox" name="checkbox" value="1"/>First</label>
      <label style={{display: 'block'}}><input type="checkbox" name="checkbox" value="2"/>Second</label>
      <label style={{display: 'block'}}><input type="checkbox" name="checkbox" value="3"/>Third</label>
    </div>
  );
};

export const checkListSandcastle = () =>
  buildSandCastle(
    { id: sandCastleId, component: CheckList },
    { groupId: groupIds.inputGroup, itemTitle: "Check List" }
  );