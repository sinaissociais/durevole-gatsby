import React from 'react';

import { Massa } from './massa-bruta';

export default {
  title: 'Loads/Massa',
  component: Massa,
};

const Template = (args) => <Massa />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
