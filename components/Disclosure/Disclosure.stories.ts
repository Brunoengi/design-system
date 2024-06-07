import { Meta, StoryObj } from "@storybook/react"
import Disclosure, {DisclosureProps} from "./Disclosure"

const meta: Meta<DisclosureProps> = {
  title: "Molecules/Disclosure",
  argTypes: {
    textAlign: {
      options: ['left', 'center', 'right', 'justify'],
      control: {
        type: 'select'
      }
    },
    width: {
      options: ['w-12', 'w-16', 'w-20', 'w-24', 'w-28', 'w-32', 'w-40', 'full', 'max', 'min', '1/2', '1/3', '2/3', '1/4', '2/4', '3/4'],
      control: "select"
    },
    backgroundColor: {
      options: ['primary', 'secondary', 'tertiary', 'quaternary', 'success', 'error', 'warning', 'disabled', 'gray-100', 'gray-200', 'gray-800', 'gray-900', 'black', 'white', 'transparent'],
      control: {
        type: 'select'
      }
    },
    borderRadius: {
      options: ['none', 'sm', 'md', 'lg'],
      control: {
        type: 'select'
      }
    },
    borderColor: {
      options: ['primary', 'secondary', 'tertiary', 'quaternary', 'success', 'error', 'warning', 'disabled'],
      control: {
        type: 'select'
      }
    },
    borderWidth: {
      options: ['none', 'border-1', 'border-2'],
      control: {
        type: 'select'
      }
    }
  },
  component: Disclosure,
}

export default meta

export const Primary: StoryObj<DisclosureProps> = {
  args: {
    allContent: [
      {
        title: 'Um conteúdo aleatório',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis quam urna. In vitae placerat ligula. Vivamus viverra augue id gravida efficitur. Pellentesque id lorem nulla. Mauris ac mauris et dui consectetur pharetra at eu ligula. Nam nec sapien at eros rhoncus rutrum sit amet eu magna. Fusce eget leo vel eros faucibus varius vitae eget augue.'
      },
      {
        title: 'Um segundo conteúdo aleatório',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel enim eget eros dapibus porta. Pellentesque aliquam ipsum enim, at porttitor nisl interdum quis. Praesent pulvinar velit vel neque consectetur, a volutpat eros tristique. Nam id tortor lobortis, varius tellus vel, tincidunt justo. Etiam in ante sed justo pretium convallis. Donec tristique egestas dapibus. Donec maximus quam mauris, nec sagittis purus vestibulum convallis. Cras sodales sagittis odio, ac facilisis leo pellentesque in.'
      }
    ]
  },
};