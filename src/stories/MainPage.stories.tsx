// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import MainPage from "../Components/UI/MainPage/MainPage";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/MainPage",
  component: MainPage,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof MainPage>> = (args) => (
  <MainPage {...args} />
);

export const MainPageStyle = Template.bind({});
MainPageStyle.args = {
  /*👇 The args you need here will depend on your component */
};
