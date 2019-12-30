import React from "react";

import { Styled } from "./styled";

interface HeaderProps {
  title: string;
}

export const Header = (props: HeaderProps) => {
  return <Styled.Header>{props.title}</Styled.Header>;
};
