import React from 'react';
import { TextStyle } from 'react-native';
import { text, select } from '@storybook/addon-knobs';

import {
  FontFamily,
  FontSize,
  FontStyle,
  FontWeight,
} from '@fake-anilist/styles';

import { Typography } from './Typography';
import { HtmlTextTag } from '../../../models/Html';
import knobs from './Typography.knobs.json';

export default {
  title: 'Atoms/Typography',
  component: Typography,
};

const {
  as,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  textDecorationLine,
  textDecorationStyle,
} = knobs;

export const Default = () => (
  <Typography
    as={select(as.label, as.options, as.default) as HtmlTextTag}
    fontFamily={
      select(
        fontFamily.label,
        fontFamily.options,
        fontFamily.default,
      ) as FontFamily
    }
    fontSize={
      select(fontSize.label, fontSize.options, fontSize.default) as FontSize
    }
    fontStyle={
      select(fontStyle.label, fontStyle.options, fontStyle.default) as FontStyle
    }
    fontWeight={
      select(
        fontWeight.label,
        fontWeight.options,
        fontWeight.default,
      ) as FontWeight
    }
    textDecorationLine={
      select(
        textDecorationLine.label,
        textDecorationLine.options,
        textDecorationLine.default,
      ) as TextStyle['textDecorationLine']
    }
    textDecorationStyle={
      select(
        textDecorationStyle.label,
        textDecorationStyle.options,
        textDecorationStyle.default,
      ) as TextStyle['textDecorationStyle']
    }
  >
    {text('text', 'My Text')}
  </Typography>
);
