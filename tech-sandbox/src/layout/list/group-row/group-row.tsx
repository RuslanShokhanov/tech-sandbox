import React, { PropsWithChildren, useState } from "react";

import { Item, ItemRow } from "../item-row";

import { Styled } from "./styled";

interface GroupRowProps {
  id: string;
  items: Item[];
  onItemClick: (itemId: string) => void;
}

export const GroupRow = (props: PropsWithChildren<GroupRowProps>) => {
  const [expanded, setExpanded] = useState(false);

  const handleGroupClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Styled.Group onClick={handleGroupClick}>{props.children}</Styled.Group>

      {expanded &&
        props.items.map(item => (
          <ItemRow key={item.id} id={item.id} onClick={props.onItemClick}>
            {item.title}
          </ItemRow>
        ))}
    </>
  );
};
