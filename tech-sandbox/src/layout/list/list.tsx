import React from 'react';

import { GroupRow } from './group-row';
import { Group } from '../../sandcastles/interfaces';

import { Styled } from './styled';

interface ListProps {
    groups: Group[];
    onItemClick: (itemId: string) => void;
}

export const List = (props: ListProps) => {
    return (
        <Styled.List>
            <Styled.Header>
                <Styled.FirstHalf>SAND</Styled.FirstHalf>
                <Styled.SecondHalf>BOX</Styled.SecondHalf>
            </Styled.Header>
            {props.groups.map(group => (
                <GroupRow
                    key={group.id}
                    id={group.id}
                    items={group.items}
                    icon={group.icon}
                    onItemClick={props.onItemClick}
                >
                    {group.title}
                </GroupRow>
            ))}
            <Styled.Footer>SHADDY</Styled.Footer>
        </Styled.List>
    );
};
