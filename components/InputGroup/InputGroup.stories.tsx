import { Meta, StoryObj } from "@storybook/react"
import InputGroup, { InputGroupProps } from "./InputGroup"
import Typography from "../Typography/Typography"


const meta: Meta<InputGroupProps> = {
  title: "Organisms/Input Group",
  component: InputGroup,
  parameters: {
    layout: 'centered'
  },
  argTypes: { 
    type: {
      control: {
        type: "number"
      }
    },
    width: {
      options: ['w-60', 'w-64', 'w-72', 'w-80', 'w-96', 'full', 'max', 'min', '1/2', '1/3', '2/3', '1/4', '2/4', '3/4'],
      control: "select"
    },
    textColor: {
      options: ["primary", "secondary", "tertiary", "quaternary", "success", "error", "warning", "disabled", "gray-100", "gray-200", "gray-800", "gray-900", "black", "white", "transparent"],
      control: {
        type: "select"
      }
    },
    backgroundColor: {
      options: ['primary', 'secondary', 'tertiary', 'quaternary', 'success', 'error', 'warning', 'disabled', 'gray-100', 'gray-200', 'gray-800', 'gray-900', 'black', 'white', 'transparent'],
      control: {
        type: 'select'
      }
    },
    externalBorderRadius: {
      options: ['none', 'sm', 'md', 'lg'],
      control: {
        type: 'select'
      }
    },
    externalBorderWidth: {
      options: ['none', 'border-1', 'border-2'],
      control: {
        type: 'select'
      }
    },
    internalBorderRadius: {
      options: ['none', 'sm', 'md', 'lg'],
      control: {
        type: 'select'
      }
    },
    internalBorderWidth: {
      options: ['none', 'border-1', 'border-2'],
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
    
  },
}

export const Primary: StoryObj<InputGroupProps> = {
  args: {
    leftBox: {
      children: 
        <Typography
          children={<div>f<sub>yd</sub></div>}
        />
    },
    type: 'select',
    DataElement: {
      contents: {
        name: 'steel',
        id: 'steel',
        options: [{
          value: '500',
          label: '500 (CA-50)'
        },
        {
          value: '600',
          label: '600 (CA-60)'
        }]
      }
    },
    rightBox: {
      children: 
        <Typography
          children={'MPa'}
        />
    }
  }
}

export const Steel: StoryObj<InputGroupProps> = {
  args: {
    leftBox: {
      children: 
        <Typography
          children={<div>f<sub>yd</sub></div>}
        />
    },
    type: 'select',
    DataElement: {
      contents: {
        name: 'steel',
        id: 'steel',
        options: [{
          value: '500',
          label: '500 (CA-50)'
        },
        {
          value: '600',
          label: '600 (CA-60)'
        }]
      },
      className: 'min-w-36',
    },
    rightBox: {
      children: 
        <Typography
          children={'MPa'}
        />
    }
  }
}

export const Concrete: StoryObj<InputGroupProps> = {
  args: {
    leftBox: {
      children: 
        <Typography
          children={<div>f<sub>ck</sub></div>}
        />
    },
    type: 'select',
    DataElement: {
      className: 'min-w-36',
      contents: {
        name: 'concrete',
        id: 'concrete',
        options: [{
          value: '20',
          label: '20'
        },
        {
          value: '25',
          label: '25'
        },
        {
          value: '30',
          label: '30'
        },
        {
          value: '35',
          label: '35'
        },
        {
          value: '40',
          label: '40'
        },
        {
          value: '45',
          label: '45'
        },
        {
          value: '50',
          label: '50'
        },
        {
          value: '55',
          label: '55'
        },
        {
          value: '60',
          label: '60'
        },
        {
          value: '65',
          label: '65'
        },
        {
          value: '70',
          label: '70'
        },
        {
          value: '75',
          label: '75'
        },
        {
          value: '80',
          label: '80'
        },
        {
          value: '85',
          label: '85'
        },
        {
          value: '90',
          label: '90'
        },
        {
          value: '95',
          label: '95'
        },
        {
          value: '100',
          label: '100'
        },
      ]
      }
    },
    rightBox: {
      children: 
        <Typography
          children={'MPa'}
        />
    }
  }
}

export const Base: StoryObj<InputGroupProps> = {
  args: {
    leftBox: {
      children: <Typography>b</Typography>
    },
    DataElement: {
      className:"w-12"
    },
    type: "input",
    rightBox: {
      children: <Typography>cm</Typography>
    }
  }
}


export default meta