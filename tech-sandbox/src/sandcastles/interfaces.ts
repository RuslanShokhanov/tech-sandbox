export interface Group {
  id: string;
  title: string;
  items: SandCastle[]
  icon: React.ComponentType;
}

export interface SandCastle {
  id: string;
  title: string;
  facade: React.ComponentType;
  groupId: string;
}
