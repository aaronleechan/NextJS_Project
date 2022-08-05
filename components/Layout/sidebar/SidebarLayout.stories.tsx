import { ComponentStory, ComponentMeta } from '@storybook/react';
import SidebarLayout from './SidebarLayout';
import { ISidebarLayout } from './SidebarInterface';
import { mockSideBarProps } from './SidebarLayout.mocks';

export default {
  title: 'sidebar/SidearLayout',
  component: SidebarLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SidebarLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SidebarLayout> = (args) => (
  <SidebarLayout {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  ...mockSideBarProps.base,
} as ISidebarLayout;
