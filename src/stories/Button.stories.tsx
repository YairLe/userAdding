// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Button from "../Components/UI/Button/Button";

//๐ This default export determines where your story goes in the story list
export default {
  title: "Components/Button",
  component: Button,
} as Meta;

//๐ We create a โtemplateโ of how args map to rendering
const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const AddUser = Template.bind({});
AddUser.args = {
  /*๐ The args you need here will depend on your component */
  buttonLabel: "hey",
};
