import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

import { buildSandCastle } from '../build-sandcastle';
import { groupIds } from '../get-sandcastles';
import { SimpleCheckbox } from '../../components';
import ProgressBarProvider from "./progressbar-provider";

import { Styled } from './styled';
import 'react-circular-progressbar/dist/styles.css';



const sandCastleId = 'check-list';

interface Task {
    text: string;
    completed: boolean;
}

interface TaskItemProps {
    text: string;
    completed: boolean;
    onChanged: (completed: boolean) => void;
}

const tasks: Task[] = [
    { text: 'Build a first sandcastle', completed: true },
    { text: 'Create circular progress bar', completed: true },
    { text: 'Learn React', completed: true },
    { text: 'Visit Japan', completed: false },
    { text: 'Learn Spanish', completed: false },
    { text: 'Learn 1000 English words', completed: false },
    { text: 'Buy PlayStation 5', completed: false },
    { text: 'Complete `The Witcher 3`', completed: false },
    { text: 'Become a Legend', completed: false }
];

const TaskItem = (props: TaskItemProps) => {
    const [completed, setCompleted] = useState<boolean>(props.completed);

    const handleTaskCompletedChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const isCompleted = event.currentTarget.checked;
        setCompleted(isCompleted);
        props.onChanged(isCompleted);
    };

    return (
        <Styled.Task completed={completed}>
            <SimpleCheckbox
                label={props.text}
                checked={completed}
                onChange={handleTaskCompletedChange}
            />
        </Styled.Task>
    );
};

const CheckList = () => {
    const completedTasks = tasks.filter(task => task.completed);
    const [amountOfCompleted, setAmountOfCompleted] = useState(
        completedTasks.length
    );
    const onTaskProgressChanged = (completed: boolean) => {
        setAmountOfCompleted(
            completed ? amountOfCompleted + 1 : amountOfCompleted - 1
        );
    };

    const progress = Math.round((100 / tasks.length) * amountOfCompleted);

    return (
        <Styled.CheckList>
            <div>
                {tasks.map((task, index) => (
                    <TaskItem
                        key={index}
                        text={task.text}
                        completed={task.completed}
                        onChanged={onTaskProgressChanged}
                    />
                ))}
            </div>
            <Styled.Progress>
                <ProgressBarProvider valueStart={0} valueEnd={progress}>
                    {(value: number) => (
                        <CircularProgressbar
                            strokeWidth={6}
                            value={value}
                            text={`${progress}%`}
                        />
                    )}
                </ProgressBarProvider>
            </Styled.Progress>
        </Styled.CheckList>
    );
};

export const checkListSandcastle = () =>
    buildSandCastle(
        { id: sandCastleId, component: CheckList },
        { groupId: groupIds.inputGroup, itemTitle: 'Check List' }
    );
