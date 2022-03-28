import React from 'react';

import GridItem from './GridItem';
import constants from '../constants';
import styled from 'styled-components';

const Section = styled.section`
  padding: 70px 30px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(30px, 1fr));
  column-gap: 30px;
  row-gap: 30px;
  max-width: 777px;
  margin: 0 auto;
`;

function Grid() {
  const renderGridItems = () => {
    return constants.map((project, index) => (
      <GridItem project={project} key={index} />
    ));
  };

  return (
    <Section>
      <GridContainer>{renderGridItems()}</GridContainer>
    </Section>
  );
}

export default Grid;
