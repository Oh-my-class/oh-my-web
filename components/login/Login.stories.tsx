import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Login } from "./Login";
import React from "react";

export default {
  title: "Components/Login",
  component: Login,
  args: {},
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Primary = Template.bind({});
