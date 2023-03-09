import { ComponentStory, ComponentMeta } from '@storybook/react';
import  {MenuList} from '../menu/MenuList';

export default {
  title: 'Menu/MenuList',
  component: MenuList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = () => <MenuList />;

export const View = Template.bind({});
