import { ComponentStory, ComponentMeta } from '@storybook/react';
import  {MenuItem} from '../menu/MenuItem';

export default {
  title: 'Menu/MenuItem',
  component: MenuItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args}/>;

export const View = Template.bind({});
View.args={
    imagePath:'assets/pizza/manhattan.jpeg',
    weight:555,
    title:'Піца Мангеттен',
    ingredients:'(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо',
    price:215

}