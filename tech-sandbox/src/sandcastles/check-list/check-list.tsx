import React, { useState } from "react";

import { buildSandCastle } from "../build-sandcastle";
import { groupIds } from "../get-sandcastles";
import { SimpleCheckbox } from "../../components";

import { Styled } from "./styled";

const sandCastleId = "check-list";

interface Task {
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  text: string;
  completed: boolean;
}

const tasks: Task[] = [
  { text: "Build a first sandcastle", completed: true },
  { text: "Buy milk", completed: false },
  { text: "Learn React", completed: true },
  { text: "Go to the gym", completed: true },
  { text: "Train hard", completed: true },
  { text: "Learn 1000 English words", completed: false },
  { text: "Become a Legend", completed: true }
];

const TaskItem = (props: TaskItemProps) => {
  const [completed, setCompleted] = useState<boolean>(props.completed);

  const handleTaskCompletedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompleted(event.currentTarget.checked);
  };

  return (
      <Styled.Task completed={completed}>
        <SimpleCheckbox
          label={props.text}
          checked={completed}
          onChange={handleTaskCompletedChange}
        />{completed && <Styled.Remark>done</Styled.Remark>}
      </Styled.Task>
  );
};

const CheckList = () => {
  return (
    <>
      {tasks.map(task => (
        <TaskItem text={task.text} completed={task.completed} />
      ))}
    </>
  );
};

export const checkListSandcastle = () =>
  buildSandCastle(
    { id: sandCastleId, component: CheckList },
    { groupId: groupIds.inputGroup, itemTitle: "Check List" }
  );
