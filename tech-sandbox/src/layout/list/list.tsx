import React from "react";

import { GroupRow } from "./group-row";
import { Group } from "./group-row/interfaces";
import { getGroups } from "./actions";

import { Styled } from "./styled";

interface ListState {
  groups: Group[];
}

export class List extends React.Component<{}, ListState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      groups: getGroups()
    };
  }

  render() {
    return (
      <Styled.List>
        {this.state.groups.map(group => (
          <GroupRow key={group.id} id={group.id} items={group.items}>
            {group.title.toUpperCase()}
          </GroupRow>
        ))}
      </Styled.List>
    );
  }
}
