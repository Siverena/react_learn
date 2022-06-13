import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => (
  <Button label="отправить" />
);

export const NormalButton = Template.bind({}) as ComponentStory<typeof Button>;
