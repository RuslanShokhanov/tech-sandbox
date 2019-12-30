import React, { PropsWithChildren } from "react";

import { Styled } from "./styled";

interface ItemRowProps {
  id: string;
  onClick: (rowId: string) => void;
}

export const ItemRow = (props: PropsWithChildren<ItemRowProps>) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    props.onClick(event.currentTarget.id);
  }
  
  return (
    <Styled.ItemRow id={props.id} onClick={handleClick}>
      {props.children}
    </Styled.ItemRow>
  );
};
