import React from "react";

import { Styled } from "./styled";

interface SimpleCheckBoxProps {
  label: string | null;
  color?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SimpleCheckbox = (props: SimpleCheckBoxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <Styled.Label className="container">
      {props.label}
      <input
        type="checkbox"
        checked={props.checked}
        onChange={handleChange}
      />
      <span className="checkmark"></span>
    </Styled.Label>
  );
};
