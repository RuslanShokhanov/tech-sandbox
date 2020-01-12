import styled from "styled-components";

const Task = styled.div<{ completed: boolean }>`
  .container {
    color: ${props => (props.completed ? "lightgrey" : "black")};
    text-decoration: ${props => (props.completed ? "line-through" : "none")};
  }
`;

const Remark = styled.div`
  margin-left: 3px;
  display: inline-block;
  color: green;
  font-style: italic;
  font-size: 12px;
  border: 1px solid green;
  border-radius: 5px;
  font-variant: small-caps;
`;

export const Styled = { Remark, Task };