import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 70px 30px;
`;

const GridContainer = styled.div`
  display: grid;
`;

function Grid() {
  return (
    <Section>
      <GridContainer>Grid</GridContainer>
    </Section>
  );
}

export default Grid;
