import React from "react";

import { Header } from "./header";
import { SandboxZone } from "./sandbox-zone";

import { Styled } from "./styled";

interface SandboxProps {
  title: string;
  component: React.ComponentType;
}

export const Sandbox = (props: SandboxProps) => {
  const { title, component } = props;

  return (
    <Styled.Sandbox>
      <Header title={title} />
      <SandboxZone component={component} />
    </Styled.Sandbox>
  );
};
