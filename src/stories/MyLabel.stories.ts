import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";



const meta = {
  title: 'UI/labels/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    size: { control: 'inline-radio' },
    fontColor: { control: 'color' }
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Basic: Story = {
  args: {
    label: 'Basic label',
  },
};

export const AllCaps: Story = {
  args: {
    label: 'All Caps label',
    allcaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary label',
    color: 'text-secondary'
  },
};

export const CustomColor: Story = {
  args: {
    label: 'Custom Color label',
    fontColor: '#5517ac'
  },
};

export const CustomBackgroundColor: Story = {
  args: {
    label: 'Custom Background Color label',
    size: 'h1',
    fontColor: '#eeeeee',
    backgroundColor: '#000000'
  },
};