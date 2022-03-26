import React from 'react';
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

const GridItem = styled.div`
  text-align: center;
  padding: 80px 20px;
  border: 1px solid var(--black);
  border-radius: 5px;
`;

function Grid() {
  return (
    <Section>
      <GridContainer>
        <GridItem>ryanapples.com</GridItem>
        <GridItem>Todo List</GridItem>
        <GridItem>Project 3</GridItem>
        <GridItem>Test</GridItem>
      </GridContainer>
    </Section>
  );
}

export default Grid;
