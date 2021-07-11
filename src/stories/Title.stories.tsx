// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Title from "../Components/UI/Title/Title";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Title",
  component: Title,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Title>> = (args) => (
  <Title {...args} />
);

export const AppTitles = Template.bind({});
AppTitles.args = {
  title: "Username",
  /*👇 The args you need here will depend on your component */
};
