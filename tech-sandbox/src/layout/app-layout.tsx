import React from "react";

import { ItemList } from "./item-list";
import { Sandbox } from "./sandox";

import './index.css';

export const AppLayout = () => {
  return (
    <div className="app-layout-root" style={{ height: "100vh" }}>
      <ItemList />
      <Sandbox />
    </div>
  );
};
