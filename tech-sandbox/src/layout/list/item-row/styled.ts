import styled from "styled-components";

const ItemRow = styled.div`
  text-transform: uppercase;
  background-color: #455058;
  height: 25px;
  border-top: 1px solid #43484e;
  font-size: 13px;
  font-family: roboto;
  font-weight: 500;
  color: #b4b4b4;
  text-indent: 20px;
  line-height: 1.7;
  cursor: pointer;
  user-select: none;

  :hover {
    color: #50c050;
  }
`;

export const Styled = { ItemRow };
