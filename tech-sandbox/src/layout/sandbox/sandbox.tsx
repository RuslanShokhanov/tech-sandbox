import React from "react";

import { SandboxZone } from "./sandbox-zone";

import { Styled } from "./styled";

interface SandboxProps {
    title: string;
    component: React.ComponentType;
}

export const Sandbox = (props: SandboxProps) => {
    return (
        <Styled.Sandbox>
            <SandboxZone component={props.component} />
        </Styled.Sandbox>
    );
};
