import { Group } from "./group-row/interfaces";

export const getGroups = (): Group[] => {
  return [
    {
      id: "first-group",
      title: "First group",
      items: [
        { id: "first-item", title: "Item 11" },
        { id: "second-item", title: "Item 12" }
      ]
    },
    {
      id: "second-group",
      title: "Second group",
      items: [{ id: "first-item", title: "Item 21" }]
    }
  ];
};
