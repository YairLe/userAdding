// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import ListAddedUsers from "../Components/UI/ListAddedUsers/ListAddedUsers";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/ListAddedUsers",
  component: ListAddedUsers,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof ListAddedUsers>> = (args) => (
  <ListAddedUsers {...args} />
);

export const UsersList = Template.bind({});
UsersList.args = {
  users: [{ name: "gilad", age: 12 }],

  /*👇 The args you need here will depend on your component */
};
