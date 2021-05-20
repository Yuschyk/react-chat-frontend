import { Message } from '../../components/Message';
import React from 'react';

export default {
  title: 'Components/Message',
  component: Message,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Message {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'This is message',
  isMineMessage: true,
};
