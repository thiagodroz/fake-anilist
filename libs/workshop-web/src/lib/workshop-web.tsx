import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface WorkshopWebProps {}

const StyledWorkshopWeb = styled.div`
  color: pink;
`;

export function WorkshopWeb(props: WorkshopWebProps) {
  return (
    <StyledWorkshopWeb>
      <h1>Welcome to workshop-web!</h1>
    </StyledWorkshopWeb>
  );
}

export default WorkshopWeb;
