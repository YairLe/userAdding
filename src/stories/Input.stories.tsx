// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Input from "../Components/UI/Input/Input";

//๐ This default export determines where your story goes in the story list
export default {
  title: "Components/Input",
  component: Input,
} as Meta;

//๐ We create a โtemplateโ of how args map to rendering
const Template: Story<ComponentProps<typeof Input>> = (args) => (
  <Input {...args} />
);

export const StoryInput = Template.bind({});
StoryInput.args = {
  /*๐ The args you need here will depend on your component */
};
