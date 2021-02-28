import React from 'react';
import { WorkshopWeb, WorkshopWebProps } from './workshop-web';

export default {
  component: WorkshopWeb,
  title: 'WorkshopWeb',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: WorkshopWebProps = {};

  return <WorkshopWeb />;
};
