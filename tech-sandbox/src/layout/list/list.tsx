import React from "react";

import { GroupRow } from "./group-row";
import { Footer } from "./footer";
import { Group } from "../../sandcastles/interfaces";

import { Styled } from "./styled";

interface ListProps {
  groups: Group[];
  onItemClick: (itemId: string) => void;
}

export const List = (props: ListProps) => {
  return (
    <Styled.List>
      {props.groups.map(group => (
        <GroupRow key={group.id} id={group.id} items={group.items} onItemClick={props.onItemClick}>
          {group.title}
        </GroupRow>
      ))}
      <Footer />
    </Styled.List>
  );
};
