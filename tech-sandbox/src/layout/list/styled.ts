import styled from "styled-components";

const Header = styled.div`
    color: #fff;
    font-weight: 100;
    font-size: 24px;
    background-color: #2f363c;
    height: 50px;
    text-align: center;
    padding-top: 20px;
    font-family: "roboto";
	user-select: none;
`;

const Footer = styled.footer`
  height: 20px;
  bottom: 0;
  background-color: #2f363c;
  position: absolute;
  width: 20%;
  color: #b4b4b4;
  font-family: roboto;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  user-select: none;
  text-indent: 5px;
`;

const FirstHalf = styled.span`
    color: #68c968;
`;

const SecondHalf = styled.span`
    margin-left: 2px;
`;

const List = styled.div`
    display: inline-block;
    border-right: 1px solid #b4b4b4;
    width: 20%;
    background-color: #4b4b4b;
`;

export const Styled = { FirstHalf,Footer, List, Header, SecondHalf };
