// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Card from "../Components/Card/Card";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Card",
  component: Card,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Card>> = (args) => (
  <Card {...args} />
);

export const StoryCard = Template.bind({});
StoryCard.args = {
  /*👇 The args you need here will depend on your component */
};
