import { SandCastle, Group } from "./interfaces";
import { checkListSandcastle } from "./check-list";
import { memoryCardsSandcastle } from "./memory-cards";
import { Icons } from '../icons/index';

export const groupIds = { inputGroup: "input-group", gameGroup: "game-group" };

export const sandCastles: SandCastle[] = [checkListSandcastle(), memoryCardsSandcastle()];

export const getSandCastle = (id: string) => {
  return sandCastles.find(sc => sc.id === id) || sandCastles[0];
};

const getSandCastlesByGroup = (groupId: string) => {
  return sandCastles.filter(sc => sc.groupId === groupId);
};

export const groups: Group[] = [
  {
    id: groupIds.inputGroup,
    title: "Inputs",
	items: getSandCastlesByGroup(groupIds.inputGroup),
	icon: Icons.Input,
  },
  {
    id: groupIds.gameGroup,
    title: "Games",
	items: getSandCastlesByGroup(groupIds.gameGroup),
	icon: Icons.Gamepad,
  }
];
