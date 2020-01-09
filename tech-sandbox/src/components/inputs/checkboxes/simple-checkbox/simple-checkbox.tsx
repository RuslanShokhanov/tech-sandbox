import React from "react";

import { Styled } from "./styled";

interface SimpleCheckBoxProps {
  label: string | null;
  color?: string;
  checked?: boolean;
}

export const SimpleCheckbox = (props: SimpleCheckBoxProps) => {
  return (
    <Styled.Label className='container'>
      {props.label}
      <input type="checkbox"/>
      <span className="checkmark"></span>
    </Styled.Label>
  );
};
