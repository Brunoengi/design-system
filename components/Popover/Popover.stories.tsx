import type { Meta, StoryObj } from '@storybook/react';
import PopoverMessage, {PopoverMessageProps} from './Popover';

const meta: Meta<PopoverMessageProps> = {
  title: 'Design System/Molecules/Popover',
  component: PopoverMessage,
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
    },
    message: { control: 'text' },
    buttonLabel: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<PopoverMessageProps>;

export const Default: Story = {
  args: {
    message: 'Popover message!',
    placement: 'bottom',
    buttonLabel: 'Show Popover',
  },
};

export const Top: Story = {
  args: {
    message: 'On the top!',
    placement: 'top',
    buttonLabel: 'Top',
  },
};

export const Right: Story = {
  args: {
    message: 'On the right!',
    placement: 'right',
    buttonLabel: 'right',
  },
};

export const Left: Story = {
  args: {
    message: 'On the left!',
    placement: 'left',
    buttonLabel: 'left',
  },
};

export const LargeText: Story = {
  args: {
    message: 'A large texto to verify the limits of the popover component. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    placement: 'right',
    buttonLabel: 'right',
  },
};