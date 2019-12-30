export interface Group {
  id: string;
  title: string;
  items: SandCastle[]
}

export interface SandCastle {
  id: string;
  title: string;
  facade: React.ComponentType;
  groupId: string;
}
