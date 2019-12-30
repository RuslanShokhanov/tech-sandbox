import React from "react";
import { SandCastle } from "./interfaces";

interface SandCastleConfig {
  id: string;
  component: React.ComponentType;
}

interface ListConfig {
  itemTitle: string;
  groupId: string;
}

export const buildSandCastle = (
  sandCastleConfig: SandCastleConfig,
  listConfig: ListConfig
): SandCastle => {
  return {
    id: sandCastleConfig.id,
    facade: sandCastleConfig.component,
    title: listConfig.itemTitle,
    groupId: listConfig.groupId,
  };
};
