import styled from 'styled-components';

const Icon = styled.span`
    padding-top: 3px;
    margin-right: 10px;
    height: 18px;
    width: 18px;
    fill: #b4b4b4;
    float: left;
`;

const Expand = styled.span`
    height: 10px;
    width: 10px;
    float: right;
    fill: #b4b4b4;
    margin-right: 20px;
`;

const Group = styled.div`
    .ReactCollapse--collapse {
        transition: height 0.2s;
    }
`;

const Title = styled.div`
    text-transform: uppercase;
    line-height: 2;
    background-color: #2f363c;
    color: #b4b4b4;
    font-size: 15px;
    font-family: 'roboto';
    font-weight: 400;
    border-top: 1px solid #43484e;
    cursor: pointer;
    text-indent: 10px;
    user-select: none;

    :hover {
        color: #68c968;

        ${Icon} {
            fill: #68c968;
        }

        ${Expand} {
            fill: #68c968;
        }
    }
`;

export const Styled = { Expand, Group, Icon, Title };
