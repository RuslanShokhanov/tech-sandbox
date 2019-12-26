import React from "react";

import { Styled } from "./styled";

export class ItemRow extends React.Component {
  render() {
    return <Styled.ItemRow>{this.props.children}</Styled.ItemRow>;
  }
}
