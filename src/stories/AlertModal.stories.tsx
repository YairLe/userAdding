// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import AlertModal from "../Components/UI/AlertModal/AlertModal";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/AlertModal",
  component: AlertModal,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof AlertModal>> = (args) => (
  <AlertModal {...args} />
);

export const Alert = Template.bind({});
Alert.args = {
  /*👇 The args you need here will depend on your component */
};
