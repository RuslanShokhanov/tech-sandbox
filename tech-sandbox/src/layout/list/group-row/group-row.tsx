import React, { PropsWithChildren, useState } from "react";

import { Item, ItemRow } from "../item-row";
import { Icons } from "../../../icons/index";

import { Styled } from "./styled";

interface GroupRowProps {
    id: string;
    items: Item[];
    icon: React.ComponentType;
    onItemClick: (itemId: string) => void;
}

export const GroupRow = (props: PropsWithChildren<GroupRowProps>) => {
    const [expanded, setExpanded] = useState(false);

    const handleGroupClick = () => {
        setExpanded(!expanded);
    };

    const GroupIcon = props.icon;

    return (
        <>
            <Styled.Group onClick={handleGroupClick} className='aaa'>
                <Styled.Icon>
                    <GroupIcon />
                </Styled.Icon>
                {props.children}
                <Styled.Expand>
                    {expanded ? <Icons.ArrowDown /> : <Icons.ArrowRight />}
                </Styled.Expand>
            </Styled.Group>

            {expanded &&
                props.items.map(item => (
                    <ItemRow
                        key={item.id}
                        id={item.id}
                        onClick={props.onItemClick}
                    >
                        {item.title}
                    </ItemRow>
                ))}
        </>
    );
};
