import React from 'react';
import { text, number, select } from '@storybook/addon-knobs';

import { Spacing } from '@seller-frontend/styles';

import { Box } from './Box';
import knobs from './Box.knobs.json';

export default {
  title: 'Atoms/Box',
  component: Box,
};

const { margin, padding } = knobs;

export const Default = () => (
  <Box bg="#AE8153">
    <Box
      m={select(margin.label, margin.options, margin.default) as Spacing}
      p={select(padding.label, padding.options, padding.default) as Spacing}
      bg="#B7C57F"
      borderColor="#E4C381"
      borderWidth={number('border width', 2)}
    >
      <Box bg="#88B2BE">{text('children', 'My Box')}</Box>
    </Box>
  </Box>
);
