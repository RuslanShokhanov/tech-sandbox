import { SandCastle, Group } from "./interfaces";
import { checkListSandcastle } from "./check-list";

export const groupIds = { inputGroup: "input-group" };

export const sandCastles: SandCastle[] = [checkListSandcastle()];

export const getSandCastle =(id: string) => {
    return sandCastles.find(sc => sc.id === id) || sandCastles[0];
}

const getSandCastlesByGroup =(groupId: string) => {
    return sandCastles.filter(sc => sc.groupId === groupId);
}

export const groups: Group[] = [{
    id: groupIds.inputGroup,
    title: 'Inputs',
    items: getSandCastlesByGroup(groupIds.inputGroup)
  }];