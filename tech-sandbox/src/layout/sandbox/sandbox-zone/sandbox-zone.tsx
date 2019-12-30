import React from "react";

import { Styled } from "./styled";

interface SandboxZoneProps {
  component: React.ComponentType;
}

export const SandboxZone = (props: SandboxZoneProps) => {
  const Component = props.component;
  return (
    <Styled.SandboxZone>
      <Component />
    </Styled.SandboxZone>
  );
};
