// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import AddingUserCard from "../Components/UI/AddingUserCard/AddingUserCard";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/AddingUserCard",
  component: AddingUserCard,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof AddingUserCard>> = (args) => (
  <AddingUserCard {...args} />
);

export const AddUserCard = Template.bind({});
AddUserCard.args = {
  /*👇 The args you need here will depend on your component */
};
