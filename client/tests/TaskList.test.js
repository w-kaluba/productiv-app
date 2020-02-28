import React from "react";
import renderer from "react-test-renderer";

import TaskListStack from "../app/tasklist/TaskListStack";
import { NavigationContainer } from "@react-navigation/native";

jest.mock("react-navigation", () => ({
  withNavigation: component => component
}));

describe("<TaskListStack />", () => {
  it("has 1 child", () => {
    const tree = renderer
      .create(
        <NavigationContainer>
          <TaskListStack />
        </NavigationContainer>
      )
      .toJSON();
    expect(tree.children.length).toBe(1);
  });
});

// describe("AddTaskScreen", () => {
//     it("has a button that adds a task", () => {
//         const button = renderer.create
//     })
// })
