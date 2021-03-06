// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Title from "../Components/UI/Title/Title";

//๐ This default export determines where your story goes in the story list
export default {
  title: "Components/Title",
  component: Title,
} as Meta;

//๐ We create a โtemplateโ of how args map to rendering
const Template: Story<ComponentProps<typeof Title>> = (args) => (
  <Title {...args} />
);

export const AppTitles = Template.bind({});
AppTitles.args = {
  title: "Username",
  /*๐ The args you need here will depend on your component */
};
