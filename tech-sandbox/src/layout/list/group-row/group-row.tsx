import React from "react";

import { Item, ItemRow } from "../item-row";

import { Styled } from "./styled";

interface GroupRowProps {
  id: string;
  items: Item[];
}

interface GroupRowState {
  expanded: boolean;
}

export class GroupRow extends React.Component<GroupRowProps, GroupRowState> {
  constructor(props: GroupRowProps) {
    super(props);
    this.state = { expanded: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    return (
      <>
        <Styled.Group onClick={this.handleClick}>
          {this.props.children}
        </Styled.Group>

        {this.state.expanded &&
          this.props.items.map(item => (
            <ItemRow key={item.id}>{item.title}</ItemRow>
          ))}
      </>
    );
  }
}
