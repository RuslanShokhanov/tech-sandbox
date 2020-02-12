import styled from 'styled-components';

const Task = styled.div<{ completed: boolean }>`
    .container {
        font-family: 'roboto';
        font-size: 20px;
        color: ${props => (props.completed ? 'lightgrey' : 'black')};
        text-decoration: ${props =>
            props.completed ? 'line-through' : 'none'};
    }
`;

const Progress = styled.div`
    height: 225px;
    width: 225px;
    min-height: 225px;
    min-width: 225px;
    margin-left: 60px;

    .CircularProgressbar-text {
        font-family: 'roboto';
    }
`;

const CheckList = styled.div`
    display: flex;
    padding: 30px 60px;
`;

export const Styled = { CheckList, Task, Progress };
