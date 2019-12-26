import React from "react";

import { List } from "./list";

import './index.css';

export const AppLayout = () => {
  return (
    <div className="app-layout-root" style={{ height: "100vh" }}>
      <List />
    </div>
  );
};
