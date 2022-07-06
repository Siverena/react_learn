import { Form } from './Form';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from 'src/store';

export default {
  title: 'Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => (
  <Provider store={store}>
    <Form />
  </Provider>
);

export const BaseForm = Template.bind({}) as ComponentStory<typeof Form>;
